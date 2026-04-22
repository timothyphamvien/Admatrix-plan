import { motion } from 'motion/react';
import { Bot, LineChart, Code2, Sparkles, Zap, Cpu, ShieldCheck, Layout, MessageSquare } from 'lucide-react';

const services = [
  {
    title: "AI Business Audit",
    desc: "Đánh giá toàn diện mức độ sẵn sàng và tiềm năng ứng dụng AI trong doanh nghiệp của bạn.",
    icon: <LineChart className="w-8 h-8" />,
    features: ["Quy trình phòng ban", "Hạ tầng dữ liệu", "Phân tích ROI"]
  },
  {
    title: "AI Agent Development",
    desc: "Xây dựng các trợ lý AI thông minh chuyên biệt cho từng tác vụ kinh doanh cụ thể.",
    icon: <Bot className="w-8 h-8" />,
    features: ["Customer Support", "Sales Assistant", "SOP Execution"]
  },
  {
    title: "Enterprise AI Setup",
    desc: "Thiết lập hệ sinh thái AI toàn diện bao gồm CDP, MDP và FDP đồng bộ.",
    icon: <Code2 className="w-8 h-8" />,
    features: ["System Integration", "Data Migration", "Custom Training"]
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="accent-border border-primary pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tighter italic">Dịch Vụ Tư Vấn B2B - Business AI Agent</h2>
            <p className="text-xs text-primary uppercase font-bold tracking-[0.4em] mt-2">Professional AI Consulting & Setup</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card hover:bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary-5 rounded-full blur-2xl group-hover:bg-primary-10 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-display flex items-center gap-2">
                {service.title}
                <Sparkles className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed italic">
                {service.desc}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-slate-50">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <Zap className="w-3 h-3 text-accent" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
