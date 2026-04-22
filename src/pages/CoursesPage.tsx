import { motion } from 'motion/react';
import { Bot, Camera, Youtube, Code2, Globe, Sparkles, ArrowLeft, ArrowRight, BookOpen, ShieldCheck, Download, User, ListChecks, HelpCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Using require for html2pdf.js as it's often imported this way in TS environments for older libs
// @ts-ignore
import html2pdf from 'html2pdf.js';

const industryCourses = [
  {
    category: "AI for Creators & Media",
    title: "AI Creator Full-Task Mastery",
    desc: "Xây dựng hệ thống sản xuất nội dung tự động từ kịch bản, hình ảnh đến video bằng AI. X5 hiệu suất sáng tạo.",
    features: ["Kịch bản AI (Social Media)", "Avatar AI & Voiceover", "Video Editing Automation"],
    outcomes: ["Tự động hóa 90% quy trình làm video", "Sở hữu kênh TikTok triệu view với AI", "Thành thạo 10+ công cụ Creative AI"],
    prerequisites: ["Đam mê sáng tạo nội dung", "Có kỹ năng sử dụng máy tính cơ bản"],
    instructor: "Tú AI - Creative Director",
    price: "1.500.000 VNĐ",
    icon: <Camera className="w-8 h-8 text-pink-500" />
  },
  {
    category: "AI for Marketing",
    title: "AI Channel Building (Z-A)",
    desc: "Lộ trình xây dựng kênh Social (TikTok/Youtube) chuẩn hóa từ con số 0 với sự hỗ trợ của AI định hướng dữ liệu.",
    features: ["Nghiên cứu đối thủ AI", "Sản xuất content quy mô lớn", "Phân tích số liệu tự động"],
    outcomes: ["Xây dựng thương hiệu cá nhân bằng AI", "Hệ thống SEO Youtube tự động", "Tăng trưởng traffic tự nhiên x3"],
    prerequisites: ["Đã có định hướng xây kênh", "Có tài khoản chuyên gia AI"],
    instructor: "Mr. Hải - Growth Strategist",
    price: "2.000.000 VNĐ",
    icon: <Youtube className="w-8 h-8 text-red-500" />
  },
  {
    category: "AI for Technical & Dev",
    title: "AI Video Coding Specialist",
    desc: "Hướng dẫn lập trình và ứng dụng AI trong xử lý video, tạo ra các tool video editing chuyên biệt.",
    features: ["AI API Integration", "Custom Video Workflow", "Processing & Effect AI"],
    outcomes: ["Xây dựng ứng dụng AI Video riêng", "Tự động hóa hậu kỳ bằng Python/API", "Tích hợp AI vào sản phẩm Tech"],
    prerequisites: ["Biết lập trình cơ bản (Python/JS)", "Hiểu về cấu trúc dữ liệu video"],
    instructor: "Admatrix Core Engineers",
    price: "3.500.000 VNĐ",
    icon: <Code2 className="w-8 h-8 text-indigo-500" />
  },
  {
    category: "AI for Business",
    title: "AI Business Automation & SOP",
    desc: "Số hóa và tự động hóa bộ máy vận hành doanh nghiệp bằng AI Agents và các flows tự động.",
    features: ["SOP Digitization", "Agentic Workflow", "Internal Knowledge Base"],
    outcomes: ["Tự động hóa 70% tác vụ lặp lại", "Giải phóng 4-6h làm việc mỗi ngày", "Quản trị dữ liệu tập trung bằng AI"],
    prerequisites: ["Cấp độ quản lý hoặc chủ doanh nghiệp", "Có quy trình vận hành cơ bản"],
    instructor: "CMO Admatrix Team",
    price: "5.000.000 VNĐ",
    icon: <Bot className="w-8 h-8 text-primary" />
  },
  {
    category: "AI for E-commerce",
    title: "AI Sales & Dropshipping",
    desc: "Tối ưu hóa phễu bán hàng, nghiên cứu sản phẩm trending và chatbot chốt đơn tự động.",
    features: ["Trending Research AI", "Ad Copy Generation", "Automated Checkout Flow"],
    outcomes: ["Tăng tỷ lệ chuyển đổi đơn hàng 20%", "Nghiên cứu sản phẩm win bằng AI", "Scale quy mô không cần tăng nhân sự"],
    prerequisites: ["Đang kinh doanh E-com/Dropshipping", "Hiểu về quảng cáo Facebook/Google"],
    instructor: "Dropshipping Mastermind",
    price: "2.500.000 VNĐ",
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />
  },
  {
    category: "AI for Education",
    title: "AI in EdTech & Teaching",
    desc: "Ứng dụng AI trong soạn bài, chấm điểm và cá nhân hóa lộ trình học tập cho học sinh.",
    features: ["Lesson Plan AI", "Personalized Tutoring", "Grading Automation"],
    outcomes: ["Soạn bài nhanh gấp 10 lần", "Lộ trình học tập cá nhân hóa tự động", "Tư vấn hỗ trợ học viên qua AI Chatbot"],
    prerequisites: ["Giáo viên hoặc làm trong ngành giáo dục", "Sử dụng tốt các nền tảng online"],
    instructor: "Education AI Specialist",
    price: "1.000.000 VNĐ",
    icon: <BookOpen className="w-8 h-8 text-green-500" />
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="py-8 bg-white border-b border-slate-100 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group transition-all">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Landing Page</span>
            </Link>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg admatrix-gradient" />
                    <span className="text-lg font-bold font-display text-slate-800 uppercase tracking-tighter italic">ADMATRIX <span className="text-primary">ACADEMY</span></span>
                </div>
            </div>
        </div>
      </header>

      <div id="courses-content">
        {/* Hero Section */}
        <div data-pdf-section="Course Introduction Header">
          <section className="py-20 relative overflow-hidden bg-white print:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
              >
                  AI Industrial Training specialization
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                  Khóa Học AI <span className="text-primary underline decoration-accent decoration-8 underline-offset-8 italic">Chuyên Sâu</span> <br /> 
                  Theo Từng Ngành Nghề
              </h1>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed italic border-b border-slate-100 pb-10">
                  Lộ trình đào tạo thực thi, tập trung vào kết quả thực tế cho từng lĩnh vực chuyên biệt.
              </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 no-print" />
        </section>
        </div>

        {/* Course Grid */}
        <div data-pdf-section="Detailed Course Grid">
          <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 print:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {industryCourses.map((course, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-blue-dark text-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all h-full flex flex-col page-break-inside-avoid border border-white-10"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-white-10 flex items-center justify-center shadow-sm">
                                {course.icon}
                            </div>
                            <div className="text-right">
                              <span className="block text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
                                  {course.category}
                              </span>
                              <span className="block text-xl font-bold text-white font-display">{course.price}</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 font-display">
                            {course.title}
                        </h3>
                        <p className="text-xs text-slate-300 mb-8 leading-relaxed italic">
                            {course.desc}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                          <div>
                            <h4 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <ListChecks className="w-3 h-3 text-accent" /> Key Modules
                            </h4>
                            <div className="space-y-3">
                                {course.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <ShieldCheck className="w-3 h-3 text-accent" />
                                        <span className="text-[10px] font-bold text-slate-200 uppercase">{f}</span>
                                    </div>
                                ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <Sparkles className="w-3 h-3 text-accent" /> Outcomes
                            </h4>
                            <div className="space-y-3">
                                {course.outcomes.map((o, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <ArrowRight className="w-3 h-3 text-accent" />
                                        <span className="text-[10px] font-medium text-slate-300 italic leading-none">{o}</span>
                                    </div>
                                ))}
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white-10 mt-auto">
                          <div className="flex items-center gap-4 p-4 bg-white-10 rounded-2xl">
                             <div className="w-10 h-10 rounded-full bg-white-10 flex items-center justify-center text-slate-300">
                                <User className="w-5 h-5" />
                             </div>
                             <div>
                                <p className="text-[8px] font-bold text-slate-400 uppercase">Instructor</p>
                                <p className="text-[10px] font-bold text-slate-100">{course.instructor}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 bg-white-10 rounded-2xl">
                             <div className="w-10 h-10 rounded-full bg-white-10 flex items-center justify-center text-accent">
                                <HelpCircle className="w-5 h-5" />
                             </div>
                             <div>
                                <p className="text-[8px] font-bold text-slate-400 uppercase">Requirement</p>
                                <p className="text-[9px] font-medium text-slate-200 leading-tight">
                                   {course.prerequisites[0]}
                                </p>
                             </div>
                          </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </section>
        </div>

      {/* CTA Footer */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold font-display uppercase tracking-widest mb-6">Bạn không thấy ngành nghề của mình?</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-xs leading-relaxed mb-10">
                Admatrix cung cấp dịch vụ huấn luyện AI Customized theo yêu cầu của phòng ban hoặc doanh nghiệp. Liên hệ để buil lộ trình riêng.
            </p>
            <div className="flex justify-center gap-6">
                <div className="px-8 py-4 bg-white text-secondary rounded-full font-bold uppercase tracking-widest text-[10px]">
                    Private AI Coaching
                </div>
                <div className="px-8 py-4 border border-white-20 hover:bg-white-10 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all">
                    Consulting Service
                </div>
            </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full admatrix-gradient blur-[100px]" />
      </section>

      <footer className="py-12 bg-surface text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">
          Internal Academy Portal 2026.
        </p>
      </footer>
      </div>
    </div>
  );
}
