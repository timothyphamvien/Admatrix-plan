import { motion } from 'motion/react';
import { Award, CheckCircle2, ChevronRight, TrendingUp, Users2 } from 'lucide-react';

const ranks = [
  {
    name: "Tier 1: Bronze Partner",
    commission: "15%",
    target: "Doanh thu < 50M",
    benefits: [
      "Quyền bán các khóa học Starter Online/Offline",
      "Hỗ trợ bộ công cụ Marketing & Landing Page",
      "Tham gia Group đào tạo cộng tác viên"
    ],
    color: "from-amber-600 to-amber-700"
  },
  {
    name: "Tier 2: Silver Partner",
    commission: "20%",
    target: "Doanh thu 50M - 200M",
    benefits: [
      "Quyền bán gói Advanced & Leader",
      "Quản lý Leads qua CRM Dashboard riêng",
      "Bonus 2% khi đạt target quý",
      "Ưu tiên hỗ trợ kỹ thuật 24/7"
    ],
    color: "from-slate-400 to-slate-500",
    popular: true
  },
  {
    name: "Tier 3: Gold / Co-Host",
    commission: "25% - 30%",
    target: "Deposit 20M / Doanh thu > 200M",
    benefits: [
      "Chính sách Co-Host: CK 40-50% khi mua thầu gói",
      "Tổ chức Webinar chung cùng chuyên gia Admatrix",
      "Quyền khai thác trọn bộ hệ sinh thái AI",
      "Được list tên tại danh sách đối tác chiến lược"
    ],
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "Tier 4: Special Partner",
    commission: "40%",
    target: "Doanh thu 500M - 1B / Tháng",
    benefits: [
      "Deposit 50% cho toàn bộ các khóa học thầu",
      "Hỗ trợ setup hạ tầng AI nội bộ miễn phí",
      "Quyền tham gia hội đồng chiến lược Admatrix",
      "Khai thác độc quyền khu vực (Region Exclusive)"
    ],
    color: "from-primary to-slate-900"
  }
];

export default function PartnerProgram() {
  return (
    <section id="partners" className="py-24 bg-secondary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4">
          <div className="accent-border border-white-20 pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-white italic">Mở Rộng Hệ Sinh Thái Đối Tác</h2>
            <p className="text-xs text-blue-300 uppercase font-bold tracking-widest mt-2">Win-Win Scaling & Co-Hosting Strategy</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 bg-white-10 p-4 rounded-2xl border border-white-10">
               <TrendingUp className="text-accent w-5 h-5" />
               <p className="text-[10px] text-slate-300 max-w-[200px] font-bold uppercase leading-relaxed">
                  Mục tiêu kết nối 150+ đối tác chiến lược đa lĩnh vực.
               </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[2.5rem] bg-white-10 border border-white-10 hover:border-accent transition-all relative overflow-hidden group h-full flex flex-col ${rank.popular ? 'bg-white-10 shadow-lg' : ''}`}
            >
              {rank.popular && (
                <div className="absolute top-0 right-0 bg-accent text-secondary px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Standard Choice
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rank.color} flex items-center justify-center mb-6`}>
                <Award className="text-white w-6 h-6" />
              </div>
              
              <h3 className="text-sm font-bold mb-1 font-display tracking-tight text-slate-100">{rank.name}</h3>
              <p className="text-[9px] font-bold text-blue-300 uppercase mb-6">{rank.target}</p>
              
              <div className="flex items-baseline gap-2 mb-8 border-b border-white-10 pb-6">
                <span className="text-3xl font-bold text-accent">{rank.commission}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Rev Share</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {rank.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-[9px] text-slate-400 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 p-1 bg-white-10 rounded-3xl border border-white-10">
            {[
                { label: "Tech Execution Partners", val: "50+", icon: <Users2 />, sub: "Expandable 50+" },
                { label: "Community Development", val: "100+", icon: <Award />, sub: "Network Expand 100+" },
                { label: "Strategic Sponsors", val: "20+", icon: <TrendingUp />, sub: "20+ Partners Yearly" }
            ].map((stat, i) => (
                <div key={i} className="p-10 text-center border-r last:border-0 border-white-10 group hover:bg-white-10 transition-all">
                    <div className="text-accent mb-4 flex justify-center opacity-60 scale-75 group-hover:scale-90 transition-all">{stat.icon}</div>
                    <p className="text-4xl font-bold text-white mb-2">{stat.val}</p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-[9px] text-accent font-bold uppercase tracking-widest opacity-60">{stat.sub}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
