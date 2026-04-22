import { motion } from 'motion/react';
import { Bot, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 top-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-3">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rotate-45"></div>
              </div>
              <span className="text-xl font-bold font-display tracking-tighter text-slate-800 uppercase">
                ADMATRIX <span className="text-primary font-bold">AI</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
               <div className="flex items-center gap-1.5 p-1 px-3 bg-blue-50 border border-blue-100 rounded-full">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <Link to="/courses" className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline">Detailed Courses</Link>
               </div>
              <a href="#services" className="hover:text-primary transition-all uppercase text-[10px] font-bold tracking-widest">Services</a>
              <a href="#use-cases" className="hover:text-primary transition-all uppercase text-[10px] font-bold tracking-widest">Use Cases</a>
              <a href="#roadmap" className="hover:text-primary transition-all uppercase text-[10px] font-bold tracking-widest">Roadmap</a>
              <a href="#partners" className="hover:text-primary transition-all uppercase text-[10px] font-bold tracking-widest">Partners</a>
              <a href="#financials" className="hover:text-primary transition-all uppercase text-[10px] font-bold tracking-widest">Finance</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end border-l border-slate-100 pl-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hạng đối tác</span>
              <span className="text-xs font-bold text-slate-700">DIAMOND RANK</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-8 space-y-6 rounded-b-3xl shadow-xl mt-2"
        >
          <Link to="/courses" className="block text-lg font-bold text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>Detailed Courses</Link>
          <a href="#services" className="block text-lg font-bold text-gray-700 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#roadmap" className="block text-lg font-bold text-gray-700 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Roadmap</a>
          <a href="#partners" className="block text-lg font-bold text-gray-700 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Partners</a>
          <a href="#financials" className="block text-lg font-bold text-gray-700 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Finance</a>
        </motion.div>
      )}
    </nav>
  );
}
