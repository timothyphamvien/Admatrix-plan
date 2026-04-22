import { motion } from 'motion/react';
import { AreaChart, Layers, Map, Settings, Users } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Analysis",
    desc: "Đánh giá hiện trạng doanh nghiệp, xác định các điểm 'nóng' có thể tối ưu bằng AI.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500"
  },
  {
    title: "Syllabus Design",
    desc: "Xây dựng lộ trình đào tạo và áp dụng công cụ AI phù hợp với từng phòng ban.",
    icon: <Map className="w-6 h-6" />,
    color: "bg-indigo-500"
  },
  {
    title: "Automation Setup",
    desc: "Triển khai hệ thống AI Agent, No-code Automation cho Marketing, Sale, Ops.",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-purple-500"
  },
  {
    title: "Training & Adoption",
    desc: "Đào tạo nhân sự sử dụng thành thạo bộ công cụ mới, xây dựng văn hóa AI-first.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-pink-500"
  },
  {
    title: "Optimize & Flow",
    desc: "Theo dõi hiệu suất, tinh chỉnh Prompt và Workflow để đạt ROI tối đa.",
    icon: <AreaChart className="w-6 h-6" />,
    color: "bg-emerald-500"
  }
];

import { Search } from 'lucide-react';

export default function TransformationRoadmap() {
  return (
    <section id="roadmap" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="accent-border pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-slate-800">Lộ Trình AI Transformation</h2>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-2">End-to-End Implementation Flow</p>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col group transition-all hover:bg-white"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-10 transition-all`}
                >
                  <div className="scale-75">{step.icon}</div>
                </motion.div>
                
                <span className="text-[10px] font-bold text-slate-300 mb-2 font-display uppercase tracking-widest">Phase 0{idx + 1}</span>
                <h3 className="text-sm font-bold text-slate-700 mb-2 transition-colors group-hover:text-primary">{step.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed italic">"{step.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 p-10 rounded-3xl admatrix-gradient text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white-10 rounded-2xl border border-white-10 backdrop-blur-md">
              <Layers className="w-8 h-8 text-blue-300" />
            </div>
            <div>
              <h4 className="text-2xl font-bold font-display leading-tight">Hành trình chuyển đổi bắt đầu từ sự chuẩn bị.</h4>
              <p className="text-slate-400 text-sm mt-1">Audit doanh nghiệp giúp xác định rõ các điểm chạm AI tối ưu nhất.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
