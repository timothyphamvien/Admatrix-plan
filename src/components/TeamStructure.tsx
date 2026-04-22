import { motion } from 'motion/react';
import { Users2, Briefcase, DollarSign, Award, Target, UserPlus } from 'lucide-react';

const teamMembers = [
  {
    role: "CEO & AI Strategy",
    jd: "Định hướng chiến lược, quản trị hội đồng AI và đàm phán đối tác chiến lược Tier 4.",
    salary: "40M - 60M",
    bonus: "10% Net Profit năm + Thưởng thặng dư quý.",
    icon: <Target className="w-5 h-5" />
  },
  {
    role: "CMO & Business Development",
    jd: "Quản trị phễu marketing, pipeline doanh thu và hệ thống đối tác Affiliate/Co-host.",
    salary: "30M - 45M",
    bonus: "2% Doanh thu khóa học + 5% Doanh thu Corporate Setup.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    role: "Head of AI Academy",
    jd: "Số hóa giáo trình, quản trị chất lượng giảng dạy Online/Offline và support học viên.",
    salary: "25M - 35M",
    bonus: "Thưởng dựa trên số lượng học viên & chỉ số hài lòng học viên (NPS).",
    icon: <Award className="w-5 h-5" />
  },
  {
    role: "AI Technical Lead",
    jd: "Triển khai hạ tầng CDP/MDP cho Enterprise, phát triển AI Agents và tích hợp API đối tác.",
    salary: "35M - 50M",
    bonus: "10% giá trị hợp đồng triển khai công nghệ.",
    icon: <Users2 className="w-5 h-5" />
  },
  {
    role: "Content Creator Factory Manager",
    jd: "Vận hành xưởng sản xuất nội dung bằng AI, quản trị kênh TikTok/Social cho Branding.",
    salary: "15M - 25M",
    bonus: "Thưởng theo KPI Leads mang về từ kênh truyền thông.",
    icon: <UserPlus className="w-5 h-5" />
  },
  {
    role: "Customer Success & Admin",
    jd: "Hỗ trợ học viên sau khóa học, quản lý tài liệu, handbook và điều phối lịch học.",
    salary: "12M - 18M",
    bonus: "Thưởng chuyên cần & Hiệu quả support Lead.",
    icon: <DollarSign className="w-5 h-5" />
  }
];

export default function TeamStructure() {
  return (
    <section id="team" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="accent-border border-primary pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tighter italic">Cơ Cấu Nhân Sự Chiến Lược</h2>
            <p className="text-xs text-primary uppercase font-bold tracking-[0.4em] mt-2">Lean Team Structure & Compensation Model</p>
          </div>
          <div className="hidden md:block">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest max-w-[250px] leading-relaxed">
              Mô hình nhân sự tinh gọn (5-7 người) tối ưu hóa bằng AI Agents cho 80% tác vụ lặp lại.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-8 rounded-[2.5rem] border border-slate-100 hover:border-primary transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                   {m.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 uppercase tracking-widest mb-3 font-display">{m.role}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-8 italic">
                  {m.jd}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-50">
                 <div className="p-4 bg-primary text-white rounded-xl">
                    <p className="text-[8px] font-bold opacity-80 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                       <DollarSign className="w-3 h-3 text-accent" />
                       Cơ cấu Thưởng KPI
                    </p>
                    <p className="text-[10px] font-medium leading-relaxed">{m.bonus}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                 <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-2">Đặc quyền nhân sự Admatrix</h3>
                 <p className="text-xs text-slate-400 max-w-xl">
                    Ngoài lương và thưởng, nhân sự được tham gia các khóa đào tạo AI Advanced miễn phí, sử dụng toàn bộ hệ sinh thái công nghệ của công ty để tối ưu hóa công việc cá nhân.
                 </p>
              </div>
              <div className="px-8 py-4 bg-accent text-secondary rounded-full font-bold uppercase tracking-widest text-xs">
                 Join Our AI Revolution
              </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-10 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
}
