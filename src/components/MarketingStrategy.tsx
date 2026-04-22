import { motion } from 'motion/react';
import { Globe, MessageSquare, Play, Video, LayoutList, Share2, Layers, Cpu, CheckCircle } from 'lucide-react';

export default function MarketingStrategy() {
  const channels = [
    { title: "Mạng xã hội", platforms: ["Facebook Group AI", "TikTok Content Factory", "LinkedIn B2B Branding"], icon: <Share2 /> },
    { title: "Nội dung Video", platforms: ["Free AI Tutorials", "Webinar chuyên đề", "Youtube Deep Dive"], icon: <Video /> },
    { title: "Cộng đồng & Partner", platforms: ["Affiliate Network", "Co-host Events", "Referral Program"], icon: <Globe /> }
  ];

  const pipeline = [
    { phase: "Giai đoạn 1: Awareness", content: "Chuỗi bài viết 'AI đã thay đổi công việc như thế nào?' + Bộ quà tặng Prompt 1k+ free." },
    { phase: "Giai đoạn 2: Interest", content: "Webinar thực chiến hàng tuần - Giải quyết vấn đề cụ thể của từng ngành nghề bằng AI." },
    { phase: "Giai đoạn 3: Action", content: "Landing page chuyển đổi khóa học Starter và lộ trình tư vấn 1-1 cho Leader." },
    { phase: "Giai đoạn 4: Retention", content: "Newsletter cập nhật kịch bản AI mới nhất + Community hỗ trợ trọn đời." }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="accent-border border-primary pl-6 inline-block">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tighter">Chiến Lược Truyền Thông & Marketing</h2>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-[0.4em] mt-2">Full Channel & Content Pipeline 2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Multi-channel Strategy */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 uppercase mb-8 font-display flex items-center gap-2">
                <Layers className="text-primary w-5 h-5" /> 
                Hệ thống Kênh Phân Phối
            </h3>
            {channels.map((c, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        {c.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 uppercase tracking-wide mb-3">{c.title}</h4>
                        <div className="flex flex-wrap gap-2">
                            {c.platforms.map((p, idx) => (
                                <span key={idx} className="text-[10px] font-bold px-3 py-1 bg-white border border-slate-100 text-slate-400 rounded-full uppercase">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Pipeline & Flow */}
          <div className="lg:col-span-7">
             <div className="admatrix-gradient p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden h-full">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-display mb-10 flex items-center gap-3">
                        <Cpu className="text-accent w-8 h-8" /> 
                        Content Implementation Flow
                    </h3>
                    
                    <div className="space-y-10 relative">
                        {/* Timeline Connector */}
                        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-white-10" />

                        {pipeline.map((p, i) => (
                            <div key={i} className="flex gap-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm shrink-0 shadow-xl">
                                    0{i + 1}
                                </div>
                                <div>
                                    <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-2">{p.phase}</h4>
                                    <p className="text-sm text-slate-200 leading-relaxed max-w-md">{p.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-white-10 border border-white-10 backdrop-blur-md">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="text-accent w-4 h-4" />
                            <p className="text-xs font-bold uppercase tracking-widest">Growth Engine</p>
                        </div>
                        <p className="text-xs text-slate-300 italic">
                            Xây dựng quy trình tự động hóa phân phối nội dung đa nền tảng bằng chính AI Agents triển khai khóa học.
                        </p>
                    </div>
                </div>

                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-10 rounded-full blur-[100px]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
