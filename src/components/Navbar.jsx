import React, { useState } from 'react';
import { Palette, Code, FileText, Menu, X, Sparkles, Send, MessageSquare } from 'lucide-react';

export default function Navbar({ activeMode, setActiveMode, onOpenResume, wireframeMode, setWireframeMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappPhone = '91638219567';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/90 border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo - Straight Single Line */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-sm group-hover:bg-indigo-600 transition-colors">
            J
          </div>
          <div className="flex items-center gap-2 font-heading font-extrabold text-base text-slate-900 tracking-tight whitespace-nowrap">
            <span>Jesil Mohamed CJ</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-mono font-bold border border-indigo-200">
              UI/UX
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-600 tracking-wide uppercase font-mono">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Case Studies</a>
          <a href="#freelance" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Freelance</span>
          </a>
          <a href="#sandbox" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Sandbox</span>
          </a>
          <a href="#process" className="hover:text-indigo-600 transition-colors">Methodology</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Perspective Switcher */}
          <div className="p-1 bg-slate-100 border border-slate-200 rounded-xl flex items-center gap-1">
            <button
              onClick={() => setActiveMode('design')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'design'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-indigo-600" />
              <span>Design</span>
            </button>
            
            <button
              onClick={() => setActiveMode('code')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'code'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              <span>Code</span>
            </button>
          </div>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Resume</span>
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hi Jesil, I saw your portfolio and want to discuss a freelance project!")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-mono text-slate-500 font-bold">PERSPECTIVE</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveMode('design')}
                className={`px-3 py-1 rounded-md text-xs font-bold ${
                  activeMode === 'design' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Design
              </button>
              <button
                onClick={() => setActiveMode('code')}
                className={`px-3 py-1 rounded-md text-xs font-bold ${
                  activeMode === 'code' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Code
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-2.5 font-bold text-slate-700 text-xs font-mono uppercase tracking-wide">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-600">Case Studies</a>
            <a href="#freelance" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-emerald-600 text-emerald-600">Freelance Services</a>
            <a href="#sandbox" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-600">Figma Sandbox</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-600">Methodology</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-600">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-600">Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-indigo-600">Contact</a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <a
              href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hi Jesil, I saw your portfolio and want to discuss a freelance project!")}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
