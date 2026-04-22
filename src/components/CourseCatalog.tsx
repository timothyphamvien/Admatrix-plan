import { useState } from 'react';
import { Search, Info, DollarSign } from 'lucide-react';
import { courses } from './CourseSection';

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="accent-border pl-6">
            <h2 className="text-3xl font-bold font-display text-slate-800 uppercase tracking-tight">Danh Mục Khóa Học</h2>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-2">Search & Explorer Catalog</p>
          </div>
          
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Tìm kiếm tên khóa học hoặc nội dung..."
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-sm outline-none focus:border-primary transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
            <div className="min-w-full">
              <div className="grid grid-cols-1 divide-y divide-slate-100">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, idx) => (
                    <div key={idx} className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-6 md:items-center justify-between group">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                           <Info className="w-4 h-4 text-primary opacity-40" />
                           <h3 className="font-bold text-slate-800 text-lg group-hover:text-primary transition-colors">{course.title}</h3>
                           <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 text-slate-400 rounded uppercase tracking-widest">{course.level}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">{course.description}</p>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="text-right">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Price</p>
                            <p className="text-xl font-bold text-slate-900 font-display">{course.price}</p>
                         </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-20 text-center">
                    <p className="text-slate-400 font-medium italic">Không tìm thấy khóa học phù hợp với từ khóa "{searchTerm}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
