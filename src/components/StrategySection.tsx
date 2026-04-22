import { motion } from 'motion/react';
import { Network, Rocket, ShieldCheck, Zap, Handshake, Globe, Target, Sparkles } from 'lucide-react';

const partners = {
  tech: [
    { name: "GoClaw", role: "Thực thi công nghệ" },
    { name: "NghĩaKP3", role: "AI Specialist" },
    { name: "KatiChat", role: "Conversational AI" }
  ],
  community: [
    { name: "IEC (Anh Khoa)", role: "Phát triển cộng đồng" },
    { name: "VDBG (Chị Bình)", role: "Mạng lưới DN" },
    { name: "Community Group", role: "Lan tỏa tri thức" }
  ],
  sponsors: [
    { name: "PentyChat", logo: "https://picsum.photos/seed/penty/100/100" },
    { name: "Egany", logo: "https://picsum.photos/seed/egany/100/100" },
    { name: "Haravan", logo: "https://picsum.photos/seed/haravan/100/100" },
    { name: "IEC", logo: "https://picsum.photos/seed/iec/100/100" },
    { name: "Bluecore", logo: "https://picsum.photos/seed/blue/100/100" }
  ]
};

export default function StrategySection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20 px-4">
          <div className="accent-border border-primary pl-6 inline-block">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tight italic">Chiến Lược Tăng Trưởng & Cross-sell</h2>
            <p className="text-xs text-primary uppercase font-bold tracking-[0.3em] mt-2">Revenue Pipeline & Capacity Planning</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Part 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-10 rounded-[3rem] border-l-[8px] border-blue-500"
          >
            <div className="flex items-center gap-4 mb-6">
                <Zap className="text-blue-500 w-8 h-8" />
                <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Phần 1: AI Business Starter</h3>
            </div>
            <div className="space-y-6">
                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-700 text-xs uppercase">Target: 50-100 Học viên/Lớp</span>
                        <span className="text-[10px] font-bold text-primary">GIÁ 300K/NGƯỜI</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Upsell Products</p>
                            <ul className="text-[9px] font-bold text-slate-600 space-y-1">
                                <li>• Tools: Preny, KatiChat</li>
                                <li>• System: MDP, FDP</li>
                                <li>• Khóa Livestream AI</li>
                                <li>• Admatrix Modules</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Gifts & Funnel</p>
                            <ul className="text-[9px] font-bold text-slate-600 space-y-1">
                                <li>• Handbook Document</li>
                                <li>• Free Online Course</li>
                                <li>• Credit cho 3rd Tools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Part 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 rounded-[3rem] border-l-[8px] border-indigo-500"
          >
            <div className="flex items-center gap-4 mb-6">
                <Rocket className="text-indigo-500 w-8 h-8" />
                <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Phần 2: Advanced AI Master</h3>
            </div>
            <div className="space-y-6">
                <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-700 text-xs uppercase">Target: 30-50 Học viên/Lớp</span>
                        <span className="text-[10px] font-bold text-indigo-600">GIÁ 500K - 1M/NGÀY</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Upsell Products</p>
                            <ul className="text-[9px] font-bold text-slate-600 space-y-1">
                                <li>• AI Content Factory Setup</li>
                                <li>• CRM Automation integration</li>
                                <li>• Custom AI Agents</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Gifts & Funnel</p>
                            <ul className="text-[9px] font-bold text-slate-600 space-y-1">
                                <li>• 1 Tháng License Full Tools</li>
                                <li>• Library Prompt chuyên sâu</li>
                                <li>• Support 1:1 qua Lead</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Part 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-[3rem] border-l-[8px] border-primary"
          >
            <div className="flex items-center gap-4 mb-6">
                <Target className="text-primary w-8 h-8" />
                <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Phần 3: AI execution for Leader</h3>
            </div>
            <div className="space-y-6">
                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-700 text-xs uppercase">Target: 10-20 Leader/Lớp</span>
                        <span className="text-[10px] font-bold text-primary">GIÁ 5.000.000 VNĐ</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Upsell: 3rd Services</p>
                            <ul className="text-[9px] font-bold text-slate-600 space-y-1">
                                <li>• Consulting 1-1 by CMO</li>
                                <li>• Team Training Onsite</li>
                                <li>• Private Data Cloud</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Special Benefits</p>
                            <ul className="text-[9px] font-bold text-slate-600 space-y-1">
                                <li>• Hỗ trợ đổi người học</li>
                                <li>• Support Roadmap Setup</li>
                                <li>• Tặng License MDP 6 tháng</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Part 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="admatrix-gradient p-10 rounded-[3rem] text-white shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
                <Sparkles className="text-accent w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-tight">Phần 4: Enterprise AI Automation</h3>
            </div>
            <div className="space-y-6">
                <div className="p-5 bg-white-10 rounded-2xl border border-white-10 backdrop-blur-md">
                   <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-white text-xs uppercase">Target: 5-10 Doanh nghiệp/Tháng</span>
                        <span className="text-[10px] font-bold text-accent">GIÁ 20M - 40M VNĐ</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-blue-200 uppercase mb-2">Upsell: Tech Bundle</p>
                            <ul className="text-[9px] font-bold text-slate-200 space-y-1">
                                <li>• Full MDP/CDP/FDP Ecosystem</li>
                                <li>• AI Maintenance Package</li>
                                <li>• Executive Retreat Sponsor</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-blue-200 uppercase mb-2">Elite Gifts</p>
                            <ul className="text-[9px] font-bold text-slate-200 space-y-1">
                                <li>• Nghỉ dưỡng 2N1Đ tại Partner</li>
                                <li>• Tặng Website tích hợp Agent</li>
                                <li>• License 1 năm MDP/CDP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="text-primary w-5 h-5" />
              <h4 className="text-lg font-bold text-slate-800 uppercase tracking-widest">Đối tác thực thi công nghệ</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {partners.tech.map((p, idx) => (
                <div key={idx} className="glass-card hover:border-primary transition-all p-4 rounded-xl text-center">
                  <p className="font-bold text-slate-800 text-sm">{p.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{p.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Network className="text-primary w-5 h-5" />
              <h4 className="text-lg font-bold text-slate-800 uppercase tracking-widest">Đối tác phát triển cộng đồng</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {partners.community.map((p, idx) => (
                <div key={idx} className="glass-card hover:border-primary transition-all p-4 rounded-xl text-center">
                  <p className="font-bold text-slate-800 text-sm">{p.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-16">
          <div className="flex flex-col items-center text-center mb-10">
            <Handshake className="text-slate-300 w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold text-slate-800 uppercase tracking-[0.4em]">Sponsors & Strategic Partners</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.sponsors.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                <img 
                  src={s.logo} 
                  alt={s.name} 
                  className="w-16 h-16 rounded-2xl group-hover:scale-110 transition-transform" 
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary transition-colors">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
