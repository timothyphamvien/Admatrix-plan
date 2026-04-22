import { motion } from 'motion/react';
import { Brain, Gift, Rocket, ShieldCheck, Trophy } from 'lucide-react';

export const courses = [
  {
    title: "AI Business Starter",
    level: "Beginner",
    tagline: "Làm chủ AI thực chiến cho Executive/Sinh viên",
    description: "Không chỉ dừng lại ở ChatGPT. Học cách ứng dụng AI vào 80% công việc văn phòng: viết lách, tóm tắt, xử lý dữ liệu và tối ưu hóa thời gian.",
    price: "300.000 VNĐ",
    features: [
      "Làm chủ ChatGPT/Gemini Chuyên Sâu",
      "Xử lý văn bản & Data Entry tự động",
      "Tối ưu Prompting cho từng ngành nghề",
      "Quản lý Task & Email với AI"
    ],
    gift: "Bộ 1.000+ Business Prompts",
    challenge: "Thử thách 7 ngày X2 hiệu suất",
    color: "admatrix-gradient text-white",
    icon: <Brain className="text-accent" />
  },
  {
    title: "Advanced AI Master",
    level: "Advanced",
    tagline: "creator full task x 5 hiệu xuất với ai automation",
    description: "Hệ thống nhiều AI khác hỗ trợ công việc chuyên sâu: Marketing Automation, sáng tạo nội dung full-task cho Creator/Marketer chuyên nghiệp.",
    price: "500k - 1tr / Ngày",
    features: [
      "Hệ thống Marketing Automation Flow",
      "Xưởng sản xuất nội dung Video/Ảnh AI",
      "Workflow Tự động hóa sáng tạo",
      "Tích hợp Đa kênh AI Agents"
    ],
    gift: "Toolbox Automation (Free Credits)",
    challenge: "Xây dựng 1 Content Factory tự vận hành",
    color: "admatrix-gradient text-white",
    icon: <Rocket className="text-accent" />
  },
  {
    title: "AI Execution for Leader",
    level: "Leader",
    tagline: "Chiến lược AI dành riêng cho nhà quản lý",
    description: "Dành cho sếp và lãnh đạo đội nhóm. Cách đưa AI vào quản trị, đo lường và định hướng phát triển đội ngũ trong kỷ nguyên mới.",
    price: "5.000.000 VNĐ",
    features: [
      "Audit quy trình phòng ban bằng AI",
      "Xây dựng đội ngũ 'Hybrid Humans'",
      "Kế hoạch triển khai AI Transformation",
      "Quản trị dự án & KPI cùng AI"
    ],
    gift: "1-1 Leader Coaching Session",
    challenge: "Lập Roadmap AI 6 tháng cho Team",
    color: "admatrix-gradient text-white",
    icon: <Trophy className="text-accent" />
  },
  {
    title: "Enterprise AI Automation",
    level: "Enterprise",
    tagline: "Tự động hoá SOP đồng bộ doanh nghiệp (Sếp + 2 NV)",
    description: "Gói coaching cho sếp và 2 nhân sự key. Tự động hóa toàn bộ quy trình SOP cho các phòng ban, xây dựng hệ thống AI nội bộ vững chắc.",
    price: "20tr - 40tr VNĐ",
    features: [
      "Tự động hóa SOP toàn bộ phòng ban",
      "Custom AI Agents nội bộ (Knowledge Base)",
      "An toàn dữ liệu & Private LLMs",
      "Hỗ trợ setup onsite 2 ngày"
    ],
    gift: "Full Access CDP & MDP Admatrix",
    challenge: "Số hóa 100% SOP quan trọng",
    color: "admatrix-gradient text-white",
    icon: <ShieldCheck className="text-accent" />
  }
];

export default function CourseSection() {
  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 px-4">
          <div className="accent-border pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase">Hệ Thống Đào Tạo Thực Chiến</h2>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-2">Personalized Learning Funnel</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-3xl flex flex-col justify-between transition-all relative overflow-hidden h-full bg-blue-dark text-white shadow-xl`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white-10 text-blue-300 border border-white-10">
                    {course.level}
                  </span>
                  <span className="text-2xl font-bold text-accent">
                    {course.price}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-3 font-display tracking-tight leading-tight">{course.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-accent">
                  {course.tagline}
                </p>
                <p className="text-sm mb-8 leading-relaxed text-slate-300">
                  {course.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {course.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="p-4 rounded-2xl flex items-center justify-between bg-white-10 border border-white-10">
                   <div className="flex items-center gap-3">
                      <Gift className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-[10px] font-bold uppercase opacity-60 text-slate-300">Quà tặng kèm</p>
                        <p className="text-[10px] font-medium">{course.gift}</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
