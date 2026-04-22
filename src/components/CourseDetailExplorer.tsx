import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Clock, Target, ListChecks, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react';

const coursesDetail = [
  {
    id: 1,
    title: "AI Business Starter",
    duration: "1 Ngày (8h Học Tập)",
    audience: "Sinh viên, Executive, Nhân viên văn phòng",
    objectives: "Khai mở tư duy AI, làm chủ bộ công cụ năng suất cá nhân.",
    outcomes: ["Hiểu bản chất Generative AI", "Thành thạo Prompt Engineering cơ bản", "Tự động hóa soạn thảo văn bản & email"],
    prerequisites: ["Biết sử dụng máy tính cơ bản", "Có tài khoản Google/Microsoft"],
    instructor: {
      name: "Chuyên gia AI - Admatrix Team",
      bio: "Đội ngũ chuyên gia có 10+ năm kinh nghiệm trong Digital Transformation và AI Implementation."
    },
    syllabus: [
      "Tổng quan kỷ nguyên AI & Cách Prompting chuyên nghiệp",
      "Ứng dụng ChatGPT/Gemini xử lý 80% công việc văn phòng",
      "Thiết lập trợ lý AI trả lời Email & soạn thảo văn bản",
      "Khai phá sức mạnh AI trong tóm tắt tài liệu & dịch thuật"
    ],
    gifts: [
      "AI Partner Credit (Preny/KatiChat)",
      "Vở tài liệu & Handbook Prompt",
      "Support hướng dẫn sau học (7 ngày)",
      "1 Khóa học Online cho Module sâu hơn"
    ],
    affiliate: "CK trực tiếp 20% - 30%",
    price: "300.000 VNĐ",
    color: "bg-blue-dark"
  },
  {
    id: 2,
    title: "Advanced AI Master",
    duration: "2 - 3 Ngày",
    audience: "Creators, Marketers, Freelancers chuyên nghiệp",
    objectives: "Xây dựng hệ thống tự động hóa nội dung và vận hành full-task.",
    outcomes: ["Xây dựng Content Factory tự động", "Thành thạo AI Video & Image Generation", "Vận hành Chatbot đa kênh"],
    prerequisites: ["Đã hoàn thành Starter hoặc có kiến thức AI cơ bản", "Có kinh nghiệm làm Marketing/Content"],
    instructor: {
      name: "Tú AI - Creative Director",
      bio: "Chuyên gia hàng đầu về AI Creative, mentor cho 50+ dự án sáng tạo nội dung tự động."
    },
    syllabus: [
      "Thiết lập Workflow Marketing Automation (Social/Ads/Email)",
      "Làm chủ AI sáng tạo hình ảnh/video chất lượng cao",
      "Xây dựng nhân vật AI - Influencer nội bộ",
      "Tích hợp đa kênh với AI Agents & Chatbots chuyên sâu"
    ],
    gifts: [
      "Gói Tool AI Advanced 1 tháng",
      "Bộ kịch bản AI Full-task Factory",
      "Credit tool từ đối tác chiến lược",
      "Khóa học Online chuyên sâu Mastery"
    ],
    affiliate: "CK trực tiếp 20% - 30%",
    price: "500k - 1M (Tùy ngành nghề)",
    color: "bg-blue-dark"
  },
  {
    id: 3,
    title: "AI Execution for Leader",
    duration: "2 - 3 Ngày",
    audience: "C-Level, Managers, Business Owners",
    objectives: "Thực thi chiến lược AI vào quản trị quy trình và tối ưu nhân sự.",
    outcomes: ["Thiết lập Roadmap AI cho doanh nghiệp", "Số hóa SOP phòng ban", "Tối ưu hóa 30-50% chi phí nhân sự"],
    prerequisites: ["Vị trí Quản lý/Lãnh đạo", "Hiểu rõ quy trình vận hành của đơn vị"],
    instructor: {
      name: "Mr. Hải - AI Strategy Consultant",
      bio: "Cố vấn chiến lược chuyển đổi số cho nhiều tập đoàn lớn, chuyên gia tối ưu hóa vận hành bằng AI."
    },
    syllabus: [
      "Audit quy trình phòng ban & xác định điểm chạm AI",
      "Xây dựng SOP số hóa kết hợp AI Agents",
      "Quản trị đội ngũ 'Hybrid': Kết hợp người & AI",
      "Xây dựng văn hóa AI Transformation trong doanh nghiệp"
    ],
    gifts: [
      "Suất ăn trưa & Networking cùng CEO",
      "Hỗ trợ đổi người học trong 3 tháng",
      "Support setup lộ trình cho phòng ban",
      "Tặng Library prompt chuyên dụng"
    ],
    affiliate: "CK trực tiếp 20% - 30%",
    price: "5.000.000 VNĐ",
    color: "bg-blue-dark"
  },
  {
    id: 4,
    title: "Enterprise AI Automation",
    duration: "2 - 3 Ngày (Bao gồm Onsite Coaching)",
    audience: "Chủ doanh nghiệp + 2 Nhân sự Key",
    objectives: "Tự động hóa 100% SOP vận hành toàn bộ doanh nghiệp.",
    outcomes: ["Hệ thống Private AI vận hành độc lập", "Tự động hóa 100% các SOP lặp lại", "Báo cáo dữ liệu thời gian thực tích hợp AI"],
    prerequisites: ["Doanh nghiệp đã có quy trình SOP rõ ràng", "Sẵn sàng đầu tư hạ tầng công nghệ"],
    instructor: {
      name: "Admatrix Tech Core Team",
      bio: "Đội ngũ kỹ sư core phát triển hệ sinh thái MDP/CDP/FDP trực tiếp onsite hướng dẫn."
    },
    syllabus: [
      "Thiết lập hệ thống hạ tầng dữ liệu AI nội bộ (Private LLMs)",
      "Triển khai CDP/MDP/FDP Admatrix đồng bộ",
      "Số hóa và tự động hóa toàn diện quy trình vận hành SOP",
      "Hỗ trợ setup onsite & Training cầm tay chỉ việc"
    ],
    gifts: [
      "Gói nghỉ dưỡng 2N1Đ tại đối tác",
      "Tặng Website tích hợp AI Agents",
      "License MDP/CDP 1 năm miễn phí",
      "Credit 500$ từ đối tác Cloud"
    ],
    affiliate: "CK trực tiếp 20% - 30%",
    price: "20M - 40M VNĐ",
    color: "bg-blue-dark"
  }
];

export default function CourseDetailExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % coursesDetail.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + coursesDetail.length) % coursesDetail.length);

  const currentCourse = coursesDetail[activeIndex];

  return (
    <section className="py-24 bg-surface border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div className="accent-border pl-6 text-print-dark">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tighter italic">Chi Tiết Lộ Trình & Đặc Quyền</h2>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-[0.4em] mt-2">Course Detailed Syllabus & Gifts</p>
          </div>
          <div className="flex gap-4 no-print">
             <button onClick={prev} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-slate-400 hover:text-primary">
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button onClick={next} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-all shadow-lg">
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>

        <div className="relative min-h-[850px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="grid lg:grid-cols-12 gap-12 items-stretch"
            >
              {/* Left Column: Vision & Meta */}
              <div className="lg:col-span-4 space-y-8">
                <div className={`${currentCourse.color} p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col`}>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded bg-white-10 text-[10px] font-bold uppercase tracking-widest mb-6">Course Outline 0{currentCourse.id}</span>
                    <h3 className="text-4xl font-bold font-display leading-[1.1] mb-6">{currentCourse.title}</h3>
                    <p className="text-slate-200 text-sm italic mb-10 border-l-2 border-white-20 pl-6 lowercase">
                      "{currentCourse.objectives}"
                    </p>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-4">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="text-sm font-bold uppercase tracking-wide">{currentCourse.duration}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Target className="w-5 h-5 text-accent" />
                            <span className="text-sm font-bold opacity-80">{currentCourse.audience}</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white-10 rounded-2xl border border-white-10 mb-8 backdrop-blur-sm">
                       <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Giảng viên / Instructor</h4>
                       <p className="text-sm font-bold mb-1">{currentCourse.instructor.name}</p>
                       <p className="text-[11px] text-slate-300 leading-relaxed italic">{currentCourse.instructor.bio}</p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-12 mt-auto">
                    <div className="p-4 bg-white-10 rounded-2xl border border-white-10 mb-6">
                       <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Chương trình Affiliate</p>
                       <p className="text-lg font-bold text-white">{currentCourse.affiliate}</p>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Investment</p>
                    <p className="text-4xl font-bold text-white font-display uppercase">{currentCourse.price}</p>
                  </div>

                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white-10 rounded-full blur-3xl" />
                </div>
              </div>

              {/* Right Column: Detailed Syllabus & Gifts */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="glass-card p-10 rounded-[3rem] flex-1">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <ListChecks className="text-primary w-6 h-6" />
                          <h4 className="text-lg font-bold text-slate-800 uppercase tracking-widest font-display">Nội dung chi tiết</h4>
                        </div>
                        
                        <div className="space-y-3">
                          {currentCourse.syllabus.map((item, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:bg-white transition-all group">
                              <span className="w-6 h-6 rounded-full bg-primary-10 text-primary flex items-center justify-center font-bold text-[10px] shrink-0">
                                {idx + 1}
                              </span>
                              <p className="text-xs font-medium text-slate-700 leading-relaxed pt-1">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                         <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-3">
                            <Lightbulb className="text-primary w-5 h-5" />
                            Kết quả đạt được / Outcomes
                         </h4>
                         <ul className="space-y-4">
                            {currentCourse.outcomes.map((outcome, i) => (
                               <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-slate-600 uppercase tracking-wide leading-relaxed">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                  {outcome}
                               </li>
                            ))}
                         </ul>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-accent-10 flex items-center justify-center">
                             <ArrowRight className="text-accent w-6 h-6" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-800 uppercase tracking-widest font-display">Quà tặng & Đặc quyền</h4>
                        </div>

                        <div className="space-y-3">
                          {currentCourse.gifts.map((gift, gIdx) => (
                            <div key={gIdx} className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3">
                               <div className="w-2 h-2 rounded-full bg-primary" />
                               <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">{gift}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-200">
                         <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-3">
                            <ShieldCheck className="text-slate-400 w-5 h-5" />
                            Điều kiện tiên quyết / Prerequisites
                         </h4>
                         <ul className="space-y-4">
                            {currentCourse.prerequisites.map((req, i) => (
                               <li key={i} className="flex items-start gap-3 text-[10px] font-medium text-slate-500 leading-relaxed italic">
                                  <ChevronRight className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                                  {req}
                               </li>
                            ))}
                         </ul>
                      </div>

                      <div className="p-6 bg-slate-900 rounded-2xl text-white">
                         <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 font-display italic">Mục đích phễu (Funnel Strategy)</p>
                         <p className="text-[11px] text-slate-300 leading-relaxed">
                            Lộ trình này được thiết kế để học viên không chỉ học mà còn có đủ công cụ (credit/toolkit) để chuyển đổi trực tiếp sang các dịch vụ cao cấp khác của Admatrix.
                         </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 no-print">
                  {coursesDetail.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-primary' : 'w-4 bg-slate-200'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
