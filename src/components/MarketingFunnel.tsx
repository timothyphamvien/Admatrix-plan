import { motion } from 'motion/react';
import { ArrowDown, GraduationCap, Users, UserCheck, Briefcase } from 'lucide-react';

export default function MarketingFunnel() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 px-4">
          <div className="accent-border pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase">Phễu Chuyển Đổi Tri Thức</h2>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-2">Education Journey: From Executive to Leader</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Level 1: Beginner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl glass-card p-10 rounded-3xl mb-4 border-primary-10 relative z-40"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Cấp độ: Executive / Sinh viên</h3>
                  <p className="text-slate-500 text-sm">Học cách sử dụng AI công cụ hàng ngày.</p>
                </div>
              </div>
              <div className="bg-primary-10 px-6 py-3 rounded-full border border-primary-10">
                <span className="text-primary font-bold">KHÓA 1: AI BUSINESS STARTER</span>
              </div>
            </div>
          </motion.div>

          <ArrowDown className="text-slate-200 w-10 h-10 mb-4 animate-bounce" />

          {/* Level 2: Advanced */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-[90%] max-w-3xl glass-card p-8 rounded-3xl mb-4 border-slate-100 relative z-30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Cấp độ: Creator / Marketer</h3>
                  <p className="text-slate-500 text-xs">Tăng x5 hiệu suất bằng AI Automation chuyên sâu.</p>
                </div>
              </div>
              <div className="bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                <span className="text-indigo-600 font-bold text-sm uppercase">Advanced AI Master</span>
              </div>
            </div>
          </motion.div>

          <ArrowDown className="text-slate-200 w-8 h-8 mb-4 opacity-10" />

          {/* Level 3: Leader */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-[80%] max-w-2xl admatrix-gradient p-8 rounded-3xl mb-4 text-white shadow-xl relative z-20"
          >
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white-10 text-blue-300 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Cấp độ: Team Lead / Manager</h3>
                  <p className="text-slate-400 text-xs italic">Quản trị và định hướng AI cho nhân sự.</p>
                </div>
              </div>
              <div className="bg-white-10 px-4 py-2 rounded-full border border-white-20">
                <span className="text-blue-300 font-bold text-xs uppercase tracking-widest">AI EXECUTION FOR LEADER</span>
              </div>
            </div>
          </motion.div>

          <ArrowDown className="text-slate-200 w-6 h-6 mb-4 opacity-10" />

          {/* Level 4: Enterprise */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-[70%] max-w-xl admatrix-gradient p-6 rounded-3xl text-white shadow-2xl relative z-10 border-t border-white-10"
          >
            <div className="flex flex-col items-center text-center">
                <GraduationCap className="text-accent w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold text-accent mb-1 uppercase tracking-widest">Enterprise Transform</h3>
                <p className="text-xs text-slate-300">Tự động hóa SOP toàn bộ doanh nghiệp (Sếp + 2 key person)</p>
                <div className="mt-4 px-4 py-1 bg-accent text-secondary text-[10px] font-bold rounded-full">
                    GOAL: 100% SOP AUTOMATION
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
