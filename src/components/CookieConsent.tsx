import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[10000] no-print"
        >
          <div className="bg-white border border-slate-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <div className="flex gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1 flex items-center gap-2">
                    Cookie Consent
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    Chúng tôi sử dụng cookies để cá nhân hóa trải nghiệm và phân tích lưu lượng truy cập nhằm tối ưu hóa các giải pháp AI cho bạn.
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-4 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-20"
                  >
                    <Check className="w-3 h-3" /> Chấp nhận
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 px-4 py-2 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <X className="w-3 h-3" /> Từ chối
                  </button>
                </div>

                <p className="text-[9px] text-slate-300 font-medium italic">
                  * Bằng cách tiếp tục, bạn đồng ý với chính sách bảo mật dữ liệu của Admatrix.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
