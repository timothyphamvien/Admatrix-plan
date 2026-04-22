import { motion } from 'motion/react';
import { Briefcase, Users, Zap, TrendingUp, Calendar, UserCheck, Target, Layers } from 'lucide-react';

const useCases = [
  {
    id: "UC-AMWAY",
    partner: "Team Amway",
    lead: "Anh Hải",
    frequency: "1 tháng / 2 lần",
    status: "Dự kiến Triển khai",
    strategy: "Funnel Conversion",
    objectives: [
      "Đào tạo AI thực chiến Gói 1 cho đội ngũ nòng cốt",
      "Triển khai AI Agent cho lãnh đạo & Anh Hải",
      "Cung cấp giải pháp Media AI Automation cho team marketing"
    ],
    tags: ["Training", "AI Agents", "Media Services"],
    color: "blue"
  },
  {
    id: "UC-IEC",
    partner: "IEC (Strategic Partner)",
    lead: "Anh Khoa",
    frequency: "Khởi động Tháng 05/2026",
    status: "Đối tác Phân phối",
    strategy: "Ecosystem Upsell",
    objectives: [
      "Triển khai bộ 3 khóa học thực chiến (Gói 1, 2, 3)",
      "Mô hình đối tác bán khóa học với Chiết khấu 30%",
      "Upsell hệ thống MDP, CDP & Khóa học AI cao cấp cho CEO"
    ],
    tags: ["Distribution", "MDP/CDP", "CEO Mastery"],
    color: "indigo"
  }
];

export default function ImplementationUseCases() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="accent-border pl-6">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tighter italic">Thực thi & Use Cases</h2>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-[0.4em] mt-2">Real-world Implementation Pipeline</p>
          </div>
          <div className="hidden md:flex gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 italic text-[10px] font-bold text-slate-400">
                <Calendar className="w-3 h-3" /> Updated: Q2 2026
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[3rem] border border-slate-100 hover:border-primary transition-all group relative overflow-hidden h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${uc.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'} flex items-center justify-center shadow-inner`}>
                  <Briefcase className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Dự án trọng điểm</span>
                  <span className={`inline-block px-3 py-1 rounded-full ${uc.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'} text-[9px] font-bold uppercase tracking-widest`}>
                    {uc.status}
                  </span>
                </div>
              </div>

              <div className="relative z-10 mb-8">
                <h3 className="text-3xl font-bold text-slate-800 font-display mb-2">{uc.partner}</h3>
                <div className="flex items-center gap-6 mt-4">
                   <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-slate-700">Lead: {uc.lead}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{uc.frequency}</span>
                   </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 mb-8 relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-4 h-4 text-primary" />
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kế hoạch khai thác & Upsell</h4>
                </div>
                <div className="space-y-4">
                  {uc.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <p className="text-[11px] font-medium text-slate-600 leading-relaxed italic">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 relative z-10">
                {uc.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-100 text-[9px] font-bold text-slate-400 rounded-full uppercase tracking-widest hover:border-primary transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp className="w-32 h-32" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-5 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 no-print">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white-10 flex items-center justify-center">
                 <Zap className="w-8 h-8 text-accent" />
              </div>
              <div>
                 <h4 className="text-xl font-bold font-display uppercase italic text-accent">Deployment Engine</h4>
                 <p className="text-xs text-slate-400 max-w-md mt-1">Hệ thống thực thi thực tế đảm bảo dòng tiền & tối ưu ROI cho đối tác dựa trên nền tảng AI Admatrix.</p>
              </div>
           </div>
           <div className="flex items-center gap-4 py-4 px-8 bg-white-10 rounded-2xl border border-white-10">
              <div className="text-right">
                 <p className="text-[9px] font-bold text-slate-400 uppercase">Commision Flow</p>
                 <p className="text-lg font-bold text-accent">30% Max</p>
              </div>
              <Layers className="w-8 h-8 text-slate-500" />
           </div>
        </div>
      </div>
    </section>
  );
}
