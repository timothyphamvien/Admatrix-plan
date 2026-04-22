// @ts-ignore
import html2pdf from 'html2pdf.js';

export interface PDFExportOptions {
  filename: string;
  orientation: 'portrait' | 'landscape';
  margin?: number;
  scale?: number;
  mode?: 'save' | 'blob';
}

/**
 * Loại bỏ các hàm màu oklch/oklab vốn gây lỗi cho html2canvas
 */
function fixStylesForCapture(container: HTMLElement) {
  const allElements = container.querySelectorAll('*');
  allElements.forEach(el => {
    const htmlEl = el as HTMLElement;
    if (htmlEl.style) {
      // Quét các thuộc tính style inline
      for (let i = 0; i < htmlEl.style.length; i++) {
        const prop = htmlEl.style[i];
        const value = htmlEl.style.getPropertyValue(prop);
        if (value && (value.includes('oklch') || value.includes('oklab'))) {
          htmlEl.style.removeProperty(prop);
        }
      }
      
      // Fix cho các phần tử có filter/backdrop-filter cũng hay gây lỗi trắng trang
      const computed = window.getComputedStyle(htmlEl);
      if (computed.backdropFilter !== 'none' || (computed as any).webkitBackdropFilter !== 'none') {
        htmlEl.style.backdropFilter = 'none';
        (htmlEl.style as any).webkitBackdropFilter = 'none';
      }
    }
  });
}

export async function generatePDF(
  element: HTMLElement,
  options: PDFExportOptions
): Promise<Blob | void> {
  // Thực hiện tiền xử lý style
  fixStylesForCapture(element);
  
  // Đảm bảo font chữ đã sẵn sàng
  if ((document as any).fonts && (document as any).fonts.ready) {
    await (document as any).fonts.ready;
  }

    const opt = {
      margin: options.margin ?? 10,
      filename: options.filename,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: options.scale ?? 2,
        useCORS: true,
        logging: false, 
        letterRendering: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        scrollY: 0,
        scrollX: 0,
        onclone: (clonedDoc: Document) => {
          const root = clonedDoc.getElementById('pdf-capture-root');
          if (root) {
            root.style.opacity = '1';
            root.style.visibility = 'visible';
            root.style.left = '10mm'; // Add a small margin for the capture engine
            root.style.top = '10mm';
            root.style.position = 'relative';
            root.style.backgroundColor = '#ffffff';
          } else {
            console.warn('PDF Capture warning: Root element not found in clone.');
          }
        }
      },
      jsPDF: {
        unit: 'mm' as const,
        format: 'a4' as const,
        orientation: options.orientation,
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] as const }
    };

  try {
    const worker = html2pdf().set(opt).from(element);
    
    if (options.mode === 'blob') {
      return await worker.output('blob');
    } else {
      return await worker.save();
    }
  } catch (error) {
    console.error('Lỗi thư viện xuất PDF:', error);
    throw error;
  }
}
