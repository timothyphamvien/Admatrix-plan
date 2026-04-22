import { useState } from 'react';
import { generatePDF } from '../lib/pdfGenerator';

interface UsePDFExportOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface Section {
  id: string;
  name: string;
  selected: boolean;
}

export function usePDFExport(options: UsePDFExportOptions = {}) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'download' | 'preview' | null>(null);
  const [progress, setProgress] = useState(0);

  const exportPDF = async (
    targetId: string,
    sections: Section[],
    config: {
      filename: string;
      orientation: 'portrait' | 'landscape';
      type: 'download' | 'preview';
    }
  ) => {
    const originalElement = document.getElementById(targetId);
    if (!originalElement) {
      options.onError?.(new Error(`Cấu trúc trang (ID: ${targetId}) không tìm thấy. Có thể trang chưa tải xong.`));
      return;
    }

    let captureRoot: HTMLDivElement | null = null;
    
    try {
      setIsExporting(true);
      setExportType(config.type);
      setProgress(10); // Start

      // 1. Prepare Root
      captureRoot = document.createElement('div');
      captureRoot.id = 'pdf-capture-root';
      captureRoot.style.cssText = `
        position: absolute;
        top: 0;
        left: -5000px;
        width: 1200px;
        z-index: -99999;
        opacity: 1;
        visibility: visible;
        background-color: #ffffff;
        color: #000000;
        pointer-events: none;
        overflow: visible;
        font-family: sans-serif;
      `;
      
      // Inherit the entire body environment
      captureRoot.className = document.body.className + ' pdf-capture-environment bg-white';
      document.body.appendChild(captureRoot);
      setProgress(25);

      // 2. Clone and Clean
      const clone = originalElement.cloneNode(true) as HTMLElement;
      
      // Strategy: Force a clean, non-animated, visible state for everything
      clone.style.cssText = `
        display: block !important;
        width: 1200px !important;
        max-width: none !important;
        background-color: #ffffff !important;
        color: #000000 !important;
        position: relative !important;
        transform: none !important;
        transition: none !important;
        opacity: 1 !important;
        visibility: visible !important;
        z-index: 1 !important;
      `;
      
      let selectionCount = 0;
      const sectionElements = clone.querySelectorAll('[data-pdf-section]');
      
      sectionElements.forEach((el: any) => {
        const name = el.getAttribute('data-pdf-section');
        const isSelected = sections.find(s => s.name === name)?.selected;
        
        if (!isSelected) {
          el.remove();
        } else {
          selectionCount++;
          el.style.cssText += `
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
            background-color: transparent !important;
          `;
        }
      });

      // Deep force styles for the entire clone
      const all = clone.querySelectorAll('*');
      all.forEach((node: any) => {
        if (node.style) {
          const style = window.getComputedStyle(node);
          
          // Force background-color for dark sections that might lose their context
          if (node.classList.contains('bg-blue-dark') || node.classList.contains('bg-slate-900')) {
            node.style.backgroundColor = '#1E3A8A'; // Explicit hex
            node.style.color = '#ffffff';
          }
          
          // Remove animation-related properties
          node.style.animation = 'none';
          node.style.transition = 'none';
          node.style.transform = 'none';
          
          // Force visibility
          if (style.opacity === '0') node.style.opacity = '1';
          if (style.visibility === 'hidden') node.style.visibility = 'visible';
          
          // Ensure backdrop filters (problematic for html2canvas) are removed
          if (style.backdropFilter !== 'none') node.style.backdropFilter = 'none';
          if ((style as any).webkitBackdropFilter !== 'none') (node.style as any).webkitBackdropFilter = 'none';
        }
      });

      if (selectionCount === 0) {
        throw new Error('Bạn chưa chọn mục nào để xuất PDF.');
      }

      captureRoot.appendChild(clone);
      setProgress(40);

      // 3. Wait for layout and resources
      const images = captureRoot.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      
      await Promise.all([
        ...imagePromises,
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
      
      setProgress(60);

      // Verify that the container actually has height
      if (captureRoot.offsetHeight < 100) {
        throw new Error('Dữ liệu captured quá nhỏ hoặc bị lỗi layout. Vui lòng thử lại.');
      }

      // 4. Generate PDF
      const result = await generatePDF(captureRoot, {
        filename: config.filename,
        orientation: config.orientation,
        scale: 2,
        mode: config.type === 'preview' ? 'blob' : 'save'
      });

      setProgress(100);
      options.onSuccess?.();
      return result;

    } catch (error: any) {
      console.error('CRITICAL PDF EXPORT ERROR:', error);
      
      let errorMsg = error.message;
      if (errorMsg.includes('oklch') || errorMsg.includes('oklab')) {
        errorMsg = 'Lỗi không tương thích định dạng màu CSS hiện đại. Hệ thống đang cố gắng tự động sửa đổi.';
      } else if (errorMsg.includes('canvas')) {
        errorMsg = 'Trình duyệt không thể tạo Canvas để render PDF. Thử dùng trình duyệt khác (Chrome/Edge).';
      }
      
      options.onError?.(new Error(errorMsg));
    } finally {
      setIsExporting(false);
      setExportType(null);
      setProgress(0);
      if (captureRoot && document.body.contains(captureRoot)) {
        document.body.removeChild(captureRoot);
      }
    }
  };

  return {
    isExporting,
    exportType,
    progress,
    exportPDF
  };
}
