import React from 'react';
import { Palette, Code, ArrowRight, Sparkles, Download, Layers, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import DynamicGridCanvas from './DynamicGridCanvas';

export default function Hero({ activeMode, onOpenResume, onOpenSandbox }) {
  return (
    <section id="hero" className="relative min-h-[88vh] pt-12 pb-24 overflow-hidden flex items-center bg-slate-50/40 border-b border-slate-200">
      
      {/* Dynamic Grid Background Canvas */}
      <DynamicGridCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content Left Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-slate-800">
                {personalInfo.targetRole}
              </span>
            </div>

            {/* Apple-Style Headline */}
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-indigo-600 uppercase font-bold">
                ASPIRING UI/UX DESIGNER & CREATIVE DEVELOPER
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Crafting <span className="text-gradient-indigo">Human-Centered</span> Digital Experiences.
              </h1>
            </div>

            {/* Subheadline Summary */}
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-sans">
              I’m <strong className="text-slate-900 font-bold">{personalInfo.name}</strong> — a final-year Computer Science student blending Figma user-centered design, usability heuristics, and clean React front-end development to bridge the gap between design concepts and production code.
            </p>

            {/* Mode Perspective Box */}
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 shadow-sm backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${activeMode === 'design' ? 'bg-indigo-50 text-indigo-600 border border-indigo-200' : 'bg-violet-50 text-violet-600 border border-violet-200'}`}>
                  {activeMode === 'design' ? <Palette className="w-5 h-5" /> : <Code className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">ACTIVE PORTFOLIO PERSPECTIVE</div>
                  <div className="text-sm font-bold text-slate-900">
                    {activeMode === 'design' ? '🎨 Figma UI/UX & Product Design Focus' : '💻 React & System Architecture Focus'}
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-500 hidden sm:block font-mono">
                {activeMode === 'design' ? 'Showing User Flows & Prototypes' : 'Showing Component Architecture'}
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-xl shadow-slate-900/10 hover:scale-[1.02] transition-all"
              >
                <span>Explore Featured UX Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </a>

              <a
                href="#sandbox"
                className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-sm transition-all hover:border-indigo-300"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Interactive Figma Sandbox</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Resume</span>
              </button>
            </div>

            {/* Toolkit Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
              <span className="font-semibold text-slate-400">DESIGN TOOLKIT:</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">Figma</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-indigo-700 font-semibold shadow-2xs">React.js</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-violet-700 font-semibold shadow-2xs">Wireframing</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-emerald-700 font-semibold shadow-2xs">Usability Heuristics</span>
            </div>

          </div>

          {/* Figma Visual Frame Right Column */}
          <div className="lg:col-span-5 relative z-10">
            {/* Device Mockup Container */}
            <div className="bg-white/95 rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-5 backdrop-blur-md">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Jesil_Mohamed_Figma_Work.fig</span>
                </div>
                <div className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>100% Zoom</span>
                </div>
              </div>

              {/* Visual Prototype Mockup Cards */}
              <div className="space-y-4">
                
                {/* Turf App Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      FEATURED CASE STUDY #01
                    </span>
                    <span className="text-xs font-mono text-amber-400 font-bold">94% Usability Score</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading">Turf Booking App UI & Flow</h3>
                    <p className="text-xs text-slate-300">Simplified 3-step slot calendar & venue reservations.</p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono border-t border-slate-800 text-slate-400">
                    <span>Figma Lo-Fi &rarr; High-Fi UI</span>
                    <span className="text-indigo-300 font-bold">React + Spring Boot</span>
                  </div>
                </div>

                {/* E-Commerce Card */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2 hover:border-indigo-300 transition-all">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-600 font-bold">
                    <span>CASE STUDY #02 • E-COMMERCE</span>
                    <span className="text-slate-400 font-normal">Figma Prototyping</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Minimalist Apparel Storefront</h3>
                  <p className="text-xs text-slate-500">Editorial grid layout, tactile color swatches & slide cart drawer.</p>
                </div>

                {/* Internship Card */}
                <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-700 font-bold">
                    <span>DIGITAL HUB INTERNSHIP</span>
                    <span className="text-slate-500 font-normal">May 2026</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">IoT Devices Telemetry Dashboard</h3>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Certificate of Completion Issued</span>
                  </div>
                </div>

              </div>

              {/* Stats Grid */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-base font-extrabold font-heading text-indigo-600">2028</div>
                  <div className="text-[10px] text-slate-500">B.Tech CS</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-base font-extrabold font-heading text-violet-600">Figma</div>
                  <div className="text-[10px] text-slate-500">Design Systems</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 text-white rounded-xl">
                  <div className="text-base font-extrabold font-heading text-amber-400">React</div>
                  <div className="text-[10px] text-slate-300">Front-End</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
