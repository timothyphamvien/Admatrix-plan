import { motion, AnimatePresence } from 'motion/react';
import { X, FileText } from 'lucide-react';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  previewUrl: string | null;
  filename: string;
}

export default function PDFPreviewModal({ isOpen, onClose, previewUrl, filename }: PDFPreviewModalProps) {
  if (!isOpen || !previewUrl) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = previewUrl;
    link.download = filename;
    link.click();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">PDF Preview</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Review your roadmap before downloading</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
          
          <div className="flex-1 bg-slate-200 relative">
            <iframe 
              src={`${previewUrl}#toolbar=0`}
              className="w-full h-full border-none"
              title="PDF Preview"
            />
          </div>

          <div className="p-6 bg-white border-t border-slate-100 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
