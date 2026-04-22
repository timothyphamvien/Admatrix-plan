import { motion } from 'motion/react';
import { Target, TrendingUp, DollarSign, PieChart, Table as TableIcon, CalendarDays, ArrowUpRight } from 'lucide-react';

export default function FinancialSection() {
  const products = [
    { 
      name: "AI Business Starter (Cá nhân)", 
      price: "300k", 
      discount: "30%", 
      ops: "60k",
      mkt: "45k",
      comm: "90k",
      margin: "35% (105k)"
    },
    { 
      name: "Advanced AI Master (Cá nhân)", 
      price: "1M", 
      discount: "30%", 
      ops: "200k",
      mkt: "150k",
      comm: "300k",
      margin: "35% (350k)"
    },
    { 
      name: "AI Execution for Leader (1-2)", 
      price: "5M", 
      discount: "30-40%", 
      ops: "1M",
      mkt: "750k",
      comm: "1.5M",
      margin: "35% (1.75M)"
    },
    { 
      name: "Enterprise AI Automation (1-1)", 
      price: "20-40M", 
      discount: "30-40%", 
      ops: "4-8M",
      mkt: "3-6M",
      comm: "6-12M",
      margin: "35% (7-14M)"
    },
    { 
      name: "Gói Online (Starter, Master, Leader)", 
      price: "150k - 2.5M", 
      discount: "50% vs Offline", 
      ops: "10%",
      mkt: "15%",
      comm: "30%",
      margin: "45% High Margin"
    }
  ];

  const cashflow = [
    { period: "Q1 - Khởi động", revenue: "800M", expenses: "400M", profit: "400M", status: "Done" },
    { period: "Q2 - Scaling Online", revenue: "1.5B", expenses: "600M", profit: "900M", status: "Executing" },
    { period: "Q3 - Enterprise Focus", revenue: "2.5B", expenses: "800M", profit: "1.7B", status: "Planned" },
    { period: "Q4 - Max Peak", revenue: "3.5B", expenses: "1B", profit: "2.5B", status: "Planned" }
  ];

  const outcomes = [
    { label: "Vận hành & Tổ chức", val: "20%", color: "bg-blue-400" },
    { label: "Marketing & Ads", val: "15%", color: "bg-indigo-400" },
    { label: "Chiết khấu/Commission", val: "30%", color: "bg-accent" },
    { label: "Net Profit (Lợi nhuận)", val: "35%", color: "bg-primary" }
  ];

  return (
    <section id="financials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="accent-border pl-6 max-w-2xl">
            <h2 className="text-4xl font-bold font-display text-slate-800 uppercase tracking-tighter">Báo Cáo Tài Chính & Kế Hoạch Cashflow</h2>
            <p className="text-xs text-primary uppercase font-bold tracking-[0.4em] mt-2">CFO Strategic Financial Planning FY26</p>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
             <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
             <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none pt-0.5">Live Data Projection</span>
          </div>
        </div>

        {/* Product Pricing Table */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <TableIcon className="text-primary w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest font-display">Bảng Định Giá & Biên Lợi Nhuận</h3>
            </div>
            <div className="flex gap-4">
               <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Max Discount Cá nhân</p>
                  <p className="text-[10px] font-bold text-slate-700">30%</p>
               </div>
               <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Max Discount Leader/ENT</p>
                  <p className="text-[10px] font-bold text-slate-700">30% - 40%</p>
               </div>
            </div>
          </div>
          <div className="glass-card rounded-[2rem] overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sản phẩm / Dịch vụ</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Giá Bán</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Chiết Khấu tối đa</th>
                    <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center bg-blue-50">Vận hành (20%)</th>
                    <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center bg-indigo-50">Marketing (15%)</th>
                    <th className="p-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center bg-accent-10">Comm (30%)</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Biên Lợi Nhuận</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {products.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6">
                        <p className="text-sm font-bold text-slate-700">{p.name}</p>
                      </td>
                      <td className="p-6 text-center text-sm font-bold text-primary">{p.price}</td>
                      <td className="p-6 text-center text-xs font-medium text-slate-500">{p.discount}</td>
                      <td className="p-6 text-center text-xs font-bold text-slate-500 bg-blue-50">{(p as any).ops}</td>
                      <td className="p-6 text-center text-xs font-bold text-slate-500 bg-indigo-50">{(p as any).mkt}</td>
                      <td className="p-6 text-center text-xs font-bold text-slate-500 bg-accent-5">{(p as any).comm}</td>
                      <td className="p-6 text-center">
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold border border-green-100">
                          {p.margin}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cross-sell Revenue Highlight */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-between">
               <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Cross-sell Revenue (Partner Products)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                    Chiết khấu 15-30% cho mỗi sản phẩm Admatrix bán hộ đối tác trong hệ sinh thái.
                  </p>
               </div>
               <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Dự phóng doanh thu</p>
                  <p className="text-2xl font-bold text-primary">~200Tr/Tháng</p>
               </div>
            </div>
            
            <div className="p-8 rounded-3xl border border-slate-100 flex items-center gap-6">
               <div className="flex-1">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Outcome: Cơ cấu Chi phí & Lợi nhuận</h4>
                  <div className="flex w-full h-3 rounded-full overflow-hidden mb-4">
                     {outcomes.map((o, idx) => (
                       <div key={idx} className={`${o.color} h-full`} style={{ width: o.val }} />
                     ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                     {outcomes.map((o, idx) => (
                       <div key={idx} className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full ${o.color}`} />
                          <span className="text-[9px] font-bold text-slate-500 uppercase">{o.label}: {o.val}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Summary Stats */}
          <div className="lg:col-span-4 space-y-6">
             <div className="glass-card p-10 rounded-3xl border-l-[8px] border-primary h-full flex flex-col justify-between">
                <div>
                  <Target className="text-primary w-8 h-8 mb-6" />
                  <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest font-display mb-2">Net Profit Target</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-slate-900 leading-none">2.5B+</span>
                    <span className="text-sm font-bold text-primary uppercase">VND</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic leading-relaxed">
                    Mục tiêu tái đầu tư 40% lợi nhuận vào R&D AI giải pháp.
                  </p>
                </div>
                
                <div className="mt-12 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Doanh thu dự phóng</span>
                    <span className="text-sm font-bold text-slate-800 tracking-tight">8.3B VND</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary text-white rounded-2xl shadow-lg">
                    <span className="text-[10px] font-bold opacity-80 uppercase leading-none">ROI (Yearly Project)</span>
                    <span className="text-sm font-bold tracking-tight">~310%</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Quarterly Cashflow */}
          <div className="lg:col-span-8 admatrix-gradient p-10 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                  <CalendarDays className="text-accent w-6 h-6" />
                  <h3 className="text-lg font-bold uppercase tracking-widest font-display">Dòng tiền theo quý (Cashflow)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cashflow.map((c, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white-10 rounded-2xl border border-white-10 backdrop-blur-md group"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">{c.period}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${c.status === 'Done' ? 'bg-accent text-secondary' : 'bg-white-10 text-white'}`}>
                        {c.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                       <div className="text-center border-r border-white-10">
                          <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Revenue</p>
                          <p className="text-sm font-bold">{c.revenue}</p>
                       </div>
                       <div className="text-center border-r border-white-10">
                          <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Expenses</p>
                          <p className="text-sm font-bold text-slate-300">{c.expenses}</p>
                       </div>
                       <div className="text-center pl-2">
                          <p className="text-[9px] text-accent font-bold uppercase mb-1">Profit</p>
                          <p className="text-sm font-bold text-accent">{c.profit}</p>
                       </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white-10 flex items-center justify-between">
                       <p className="text-[9px] font-bold text-slate-400 uppercase italic">Financial Efficiency Rank</p>
                       <ArrowUpRight className="w-3 h-3 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-between opacity-60">
                 <div className="flex items-center gap-4">
                    <PieChart className="w-5 h-5 text-accent" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">Đa dạng hóa dòng tiền tối ưu rủi ro</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">Tăng trưởng 250% so với năm trước</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
