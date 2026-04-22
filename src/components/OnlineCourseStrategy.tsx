import { motion } from 'motion/react';
import { Monitor, Share2, Users, Gift, TrendingUp, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function OnlineCourseStrategy() {
  const steps = [
    { title: "Đóng gói nội dung", desc: "Số hóa giáo trình offline thành các Module Video ngắn gọn (5-10p/video)." },
    { title: "Nền tảng Hosting", desc: "Sử dụng LMS chuyên dụng, bảo mật nội dung và hỗ trợ học liệu đi kèm." },
    { title: "Chiến lược 1/2 Giá", desc: "Mở rộng tệp khách hàng mass với mức giá tối ưu chỉ 50% so với offline." }
  ];

  const journey = [
    { step: "Awareness", action: "Free AI Prompts & Webniar hàng tuần" },
    { step: "Conversion", action: "Gói học thử $9 -> Upsell Online Full" },
    { step: "Loyalty", action: "Group thực chiến & Update kiến thức" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <div className="accent-border pl-6 mb-12">
              <h2 className="text-4xl font-bold font-display text-slate-800 uppercase leading-tight">
                Chiến Lược Số Hóa & Online Scaling
              </h2>
              <p className="text-xs text-primary uppercase font-bold tracking-[0.3em] mt-2">Product Packaging & Scaling Model</p>
            </div>

            <p className="text-slate-500 mb-10 leading-relaxed text-sm">
              Đưa Admatrix Academy lên môi trường Online để mở rộng quy mô không giới hạn. Áp dụng chính sách giá cực kỳ cạnh tranh nhằm chiếm lĩnh thị phần nhanh chóng.
            </p>

            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-wide">{s.title}</h4>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-blue-50 border border-blue-100">
               <div className="flex items-center gap-3 mb-6">
                  <Monitor className="text-primary w-5 h-5" />
                  <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Target: 3 Gói Online Chuyên Sâu</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <p className="text-[10px] font-bold text-primary uppercase mb-1">Pricing Strategy</p>
                    <p className="text-xs font-bold text-slate-700">Giá Online = 50% Giá Offline</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <p className="text-[10px] font-bold text-primary uppercase mb-1">Accessibility</p>
                    <p className="text-xs font-bold text-slate-700">Học mọi lúc - Support trọn đời</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden h-full border-t-8 border-primary">
              <h3 className="text-lg font-bold text-slate-800 uppercase mb-8 font-display">Quy trình Quản lý & Loyalty</h3>
              
              <div className="mb-10">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Customer Journey Strategy</h4>
                <div className="space-y-4">
                  {journey.map((j, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-slate-100 pb-4 last:pb-0">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary" />
                      <p className="text-[10px] font-bold text-primary uppercase mb-1">{j.step}</p>
                      <p className="text-xs font-medium text-slate-700">{j.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-100">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Ranking & Gifts System</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <Gift className="w-4 h-4 text-primary mb-2" />
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Thăng hạng</p>
                    <p className="text-[9px] text-slate-500">Dựa trên kết quả thực thi SOP & đóng góp community.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <TrendingUp className="w-4 h-4 text-accent mb-2" />
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Phần thưởng</p>
                    <p className="text-[9px] text-slate-500">Voucher 20-50% gói Tech hoặc Consulting Session.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 rounded-xl admatrix-gradient text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Users className="w-4 h-4 text-blue-300" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Partner Dashboard Area</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white-20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
