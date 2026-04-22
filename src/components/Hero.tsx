import { motion } from 'motion/react';
import { Play, Rocket, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[600px]">
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 admatrix-gradient rounded-3xl p-10 text-white relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white-10 text-blue-300 font-bold text-xs uppercase tracking-widest mb-8 border border-white-10"
              >
                <Sparkles className="w-3 h-3" /> AI Transformation Vietnam
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-6">
                Academy <br />& Technology.
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-slate-300 max-w-xl leading-relaxed"
              >
                Kế hoạch triển khai bán hàng: Academy khoá học thực chiến kết hợp giải pháp công nghệ: <span className="text-blue-300 font-bold">AI Agent + CDP, MDP, FDP Admatrix</span>.
              </motion.p>
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-10 rounded-full blur-[100px]" />
          </motion.div>

          {/* Plan Summary Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8 flex-1 border-t-4 border-primary"
            >
              <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">
                Executive Internal Summary
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AI Agent', 'CDP', 'MDP', 'FDP'].map(p => (
                      <span key={p} className="px-2 py-1 bg-blue-50 text-primary text-[9px] font-bold rounded border border-blue-100">{p}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3">Training & Services</h4>
                  <p className="text-xs font-bold text-slate-700">4 Khóa học chính (Starter → Leader)</p>
                  <p className="text-xs text-slate-500 mt-1">Audit, Consulting & AI Setup Onsite</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-4">Financial KPI (FY26)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Target Revenue</p>
                      <p className="text-lg font-bold text-slate-800">5 - 10B</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <p className="text-[9px] font-bold text-primary uppercase">Target Profit</p>
                      <p className="text-lg font-bold text-primary">2 - 3B</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-primary-dark text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Growth Plan</span>
                    </div>
                    <span className="text-[10px] font-bold text-accent">LOCKED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
