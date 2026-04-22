import { motion, AnimatePresence } from 'motion/react';
import { Download, Loader2, Settings, X, Check, Layout, Layers, CheckSquare, Square, Eye } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { usePDFExport, Section } from '../hooks/usePDFExport';
import PDFPreviewModal from './PDFPreviewModal';

export default function FloatingDownloadButton() {
  const [showConfig, setShowConfig] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const location = useLocation();

  const { isExporting, exportType, progress, exportPDF } = usePDFExport({
    onError: (error) => {
      console.error('PDF Export UI Error:', error);
      // More specific error handling in the UI
      let title = 'Lỗi Xuất PDF';
      let message = error.message;

      if (message.includes('ID:')) {
        title = 'Lỗi Cấu Trúc';
        message = 'Không tìm thấy vùng dữ liệu cần xuất. Vui lòng tải lại trang.';
      } else if (message.includes('captured')) {
        title = 'Lỗi Render';
        message = 'Dữ liệu trang web không thể được chụp lại chính xác. Thử cuộn trang xuống dưới cùng rồi xuất lại.';
      }

      alert(`${title}\n\n${message}`);
    }
  });

  // Re-detect sections and maintain selection state by name if possible
  const detectSections = useCallback(() => {
    const sectionElements = document.querySelectorAll('[data-pdf-section]');
    
    setSections(prevSections => {
      return Array.from(sectionElements).map((el, idx) => {
        const name = el.getAttribute('data-pdf-section') || `Section ${idx + 1}`;
        // Try to find if this section name was previously selected
        const prevMatch = prevSections.find(ps => ps.name === name);
        
        return {
          id: `section-${idx}-${location.pathname}`,
          name: name,
          selected: prevMatch ? prevMatch.selected : true
        };
      });
    });
  }, [location.pathname]);

  // Load sections from DOM on mount or route change
  useEffect(() => {
    const timer = setTimeout(detectSections, 300);
    return () => clearTimeout(timer);
  }, [location.pathname, detectSections]);

  const toggleSection = (id: string) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
  };

  const selectAll = (selected: boolean) => {
    setSections(prev => prev.map(s => ({ ...s, selected })));
  };

  const getExportParams = () => {
    const isCourses = location.pathname === '/courses';
    return {
      targetId: isCourses ? 'courses-content' : 'landing-content',
      filename: isCourses ? 'Admatrix_Academy_Roadmap.pdf' : 'Admatrix_AI_Plan.pdf'
    };
  };

  const handleExportAction = async (type: 'download' | 'preview') => {
    const { targetId, filename } = getExportParams();

    const result = await exportPDF(targetId, sections, {
      filename,
      orientation,
      type
    });

    if (type === 'preview' && result instanceof Blob) {
      const url = URL.createObjectURL(result);
      setPreviewUrl(url);
      setShowPreviewModal(true);
      setShowConfig(false);
    } else if (type === 'download') {
      setShowConfig(false);
    }
  };

  const closePreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setShowPreviewModal(false);
  };

  const allSelected = sections.length > 0 && sections.every(s => s.selected);
  const { filename } = getExportParams();

  return (
    <>
      <PDFPreviewModal 
        isOpen={showPreviewModal}
        onClose={closePreview}
        previewUrl={previewUrl}
        filename={filename}
      />

      <AnimatePresence>
        {showConfig && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 bg-white border border-slate-200 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[9999] overflow-hidden no-print"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary" />
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">PDF Settings</h3>
              </div>
              <button 
                onClick={() => setShowConfig(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center transition-colors"
                disabled={isExporting}
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Progress Indicator */}
              {isExporting && (
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary">
                    <span>{progress < 40 ? 'Preparing...' : progress < 80 ? 'Capturing...' : 'Generating...'}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
              {/* Orientation */}
              <div>
                <label className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <Layout className="w-3 h-3" /> Layout Orientation
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setOrientation('portrait')}
                    className={`py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${orientation === 'portrait' ? 'bg-primary text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}
                  >
                    Portrait
                  </button>
                  <button
                    onClick={() => setOrientation('landscape')}
                    className={`py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${orientation === 'landscape' ? 'bg-primary text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}
                  >
                    Landscape
                  </button>
                </div>
              </div>

              {/* Sections Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Layers className="w-3 h-3" /> Select Sections
                  </label>
                  <button 
                    onClick={() => selectAll(!allSelected)}
                    className="text-[9px] font-bold text-primary uppercase tracking-wider flex items-center gap-1 hover:underline"
                  >
                    {allSelected ? <Square className="w-2.5 h-2.5" /> : <CheckSquare className="w-2.5 h-2.5" />}
                    {allSelected ? 'Bỏ chọn hết' : 'Chọn tất cả'}
                  </button>
                </div>
                <div className="space-y-2">
                  {sections.length === 0 ? (
                    <p className="text-[10px] text-slate-400 italic text-center py-4">Đang quét nội dung...</p>
                  ) : (
                    sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => toggleSection(section.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${section.selected ? 'bg-blue-50 border-primary' : 'bg-white border-slate-100 opacity-60'}`}
                      >
                        <span className={`text-[10px] font-bold uppercase tracking-tight ${section.selected ? 'text-primary' : 'text-slate-500'}`}>
                          {section.name}
                        </span>
                        {section.selected ? (
                          <Check className="w-3 h-3 text-primary" />
                        ) : (
                          <div className="w-3 h-3 border border-slate-300 rounded-sm" />
                        )}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleExportAction('preview')}
                disabled={isExporting || sections.every(s => !s.selected)}
                className="py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-100 disabled:opacity-50 transition-all shadow-sm"
              >
                {isExporting && exportType === 'preview' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Eye className="w-3 h-3 text-primary" />}
                {isExporting && exportType === 'preview' ? 'Wait...' : 'Preview'}
              </button>
              <button
                onClick={() => handleExportAction('download')}
                disabled={isExporting || sections.every(s => !s.selected)}
                className="py-4 bg-slate-900 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-800 disabled:opacity-50 transition-all shadow-lg overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                {isExporting && exportType === 'download' ? <Loader2 className="w-3 h-3 animate-spin relative z-10" /> : <Download className="w-3 h-3 text-accent relative z-10" />}
                <span className="relative z-10">{isExporting && exportType === 'download' ? 'Wait...' : 'Download'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[9999] no-print"
      >
        <button 
          onClick={() => setShowConfig(!showConfig)}
          disabled={isExporting}
          className="group relative flex items-center gap-3 bg-slate-900 border border-white-10 text-white px-6 py-4 rounded-full shadow-black-30 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 rounded-full bg-primary-20 blur-xl group-hover:bg-primary-10 transition-all" />
          
          {isExporting ? (
            <Loader2 className="w-5 h-5 text-accent animate-spin relative z-10" />
          ) : (
            <Download className="w-5 h-5 text-accent relative z-10 group-hover:rotate-6 transition-transform" />
          )}
          
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] relative z-10">
            {isExporting ? 'Processing...' : 'Export PDF'}
          </span>
        </button>
      </motion.div>
    </>
  );
}
