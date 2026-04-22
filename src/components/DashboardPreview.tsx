import { motion } from 'motion/react';
import { Bell, LayoutPanelLeft, LineChart, MessageSquare, Star, Trophy } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 accent-border pl-6">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Student Experience</span>
            <h2 className="text-4xl font-bold font-display text-slate-800 mb-6 leading-tight">
              Quản Lý Học Tập Thông Minh
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
              Trải nghiệm hệ thống LMS hiện đại của Admatrix với các tính năng cá nhân hóa, giúp học viên luôn duy trì động lực và đo lường được hiệu quả ứng dụng AI vào thực tế.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card hover:bg-white p-4 rounded-xl transition-all">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mb-3">
                  <Star className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Gamification</h4>
                <p className="text-[10px] text-slate-500">Thu thập bùa chú, thăng hạng Leaderboard.</p>
              </div>
              <div className="glass-card hover:bg-white p-4 rounded-xl transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <LineChart className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Analytics</h4>
                <p className="text-[10px] text-slate-500">Biểu đồ đo lường hiệu suất thực tế.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:max-w-xl">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl relative overflow-hidden"
            >
              {/* Fake Sidebar */}
              <div className="flex">
                <div className="w-16 bg-slate-50 border-r border-slate-100 p-4 flex flex-col items-center gap-6 py-8 hidden sm:flex">
                  <div className="w-8 h-8 bg-primary rounded-lg shadow-lg" />
                  <LayoutPanelLeft className="w-5 h-5 text-slate-300" />
                  <LineChart className="w-5 h-5 text-slate-300" />
                  <Trophy className="w-5 h-5 text-primary" />
                  <Users2 className="w-5 h-5 text-slate-300" />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8 bg-white backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Dashboard</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Giai đoạn: Implementation</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1" /> 2,450 XP
                        </div>
                    </div>
                  </div>

                  <div className="admatrix-gradient rounded-2xl p-6 text-white mb-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] opacity-60 uppercase font-bold tracking-widest mb-1">Tiến độ học tập</p>
                        <p className="text-3xl font-bold">78%</p>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 w-full bg-white-10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{width: '78%'}} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 h-12 mb-8">
                    <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-primary" />
                        <span className="text-[10px] font-bold">Harry P.</span>
                    </div>
                     <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-slate-300" />
                        <span className="text-[10px] font-bold">Rank 01</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Thử thách tiếp theo</h4>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[10px] font-bold">Build AI Automation Flow</span>
                        </div>
                        <span className="text-[9px] font-bold text-primary px-2 py-1 bg-blue-50 rounded uppercase">7 Days Left</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users2 } from 'lucide-react';
