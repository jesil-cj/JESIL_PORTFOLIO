import React, { useState } from 'react';
import { X, Palette, Code, CheckCircle, Sliders, ExternalLink, ArrowRight, Layers, Layout, Smartphone, Monitor } from 'lucide-react';

export default function CaseStudyModal({ project, onClose, activeMode }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'wireframe' | 'design-system' | 'code'
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 font-bold mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto font-mono text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 font-bold ${
              activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>01. Overview & Research</span>
          </button>
          
          <button
            onClick={() => setActiveTab('wireframe')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 font-bold ${
              activeTab === 'wireframe' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>02. Wireframe vs High-Fi Slider</span>
          </button>

          <button
            onClick={() => setActiveTab('design-system')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 font-bold ${
              activeTab === 'design-system' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>03. Design System & Tokens</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 font-bold ${
              activeTab === 'code' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span>04. React & Backend Code</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-1">ROLE</span>
                  <span className="text-slate-900 font-bold">{project.role}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-1">TIMELINE</span>
                  <span className="text-slate-900 font-bold">{project.timeline || 'Project Period'}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-1">TOOLS USED</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-white text-indigo-700 border border-slate-200 font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problem & Rationale */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  The Problem & UX Rationale
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-sans">
                  {project.designRationale}
                </p>
              </div>

              {/* Usability & Impact Metrics */}
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-4">
                <h4 className="text-xs font-mono text-indigo-800 font-bold uppercase tracking-wider">Key Usability Metrics & Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="text-xs text-slate-500 font-mono capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div className="text-sm font-extrabold text-slate-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wireframe Process Highlights */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-slate-900">Wireframe & Prototyping Steps</h3>
                <div className="space-y-2">
                  {project.wireframeHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: WIREFRAME VS HIGH-FI COMPARISON SLIDER */}
          {activeTab === 'wireframe' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">Interactive Wireframe Comparison</h3>
                  <p className="text-xs text-slate-500">Drag the slider to compare initial low-fidelity UX blueprint vs high-fidelity React UI.</p>
                </div>
                <div className="text-xs font-mono text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200 font-bold">
                  Slider Position: {sliderPosition}%
                </div>
              </div>

              {/* Visual Comparison Box */}
              <div className="relative h-80 sm:h-96 rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 select-none shadow-inner">
                
                {/* Left Side: Lo-Fi Wireframe View */}
                <div
                  className="absolute inset-0 bg-slate-100 p-6 flex flex-col justify-between wireframe-mode"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <div className="flex items-center justify-between pb-4 border-b border-indigo-300">
                    <span className="text-xs font-mono text-indigo-700 font-bold">[FIGMA LO-FI WIREFRAME]</span>
                    <span className="text-[10px] font-mono text-slate-500">Blueprint Grid & Bounds</span>
                  </div>
                  
                  <div className="space-y-4 max-w-md mx-auto w-full my-auto text-center p-6 border-2 border-dashed border-indigo-400 rounded-xl bg-white/50">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-600 mx-auto flex items-center justify-center text-indigo-700 text-xs font-mono font-bold">
                      Avatar
                    </div>
                    <div className="h-4 bg-indigo-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-3 bg-indigo-100 rounded w-1/2 mx-auto"></div>
                    <div className="grid grid-cols-2 gap-2 pt-4">
                      <div className="h-10 border border-indigo-300 rounded flex items-center justify-center text-[10px] text-indigo-700 font-mono">BTN_PRIMARY</div>
                      <div className="h-10 border border-indigo-300 rounded flex items-center justify-center text-[10px] text-indigo-700 font-mono">BTN_CANCEL</div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-indigo-700 font-bold">
                    Focus: Information Hierarchy & Interaction Blueprint
                  </div>
                </div>

                {/* Right Side: High-Fi Final UI View */}
                <div
                  className="absolute inset-0 bg-white p-6 flex flex-col justify-between"
                  style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <span className="text-xs font-mono text-emerald-700 font-bold">[HIGH-FIDELITY REACT RENDER]</span>
                    <span className="text-[10px] font-mono text-slate-500">Final Color & Micro-interactions</span>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto w-full my-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                        JM
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{project.title} Interface</div>
                        <div className="text-xs text-indigo-600 font-semibold">Interactive Prototype</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {project.subtitle}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button className="py-2 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md">
                        Confirm Selection
                      </button>
                      <button className="py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-emerald-700 font-bold">
                    Status: Verified Usability & Production-Ready Code
                  </div>
                </div>

                {/* Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-indigo-600 z-10 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg font-bold text-xs">
                    ↔
                  </div>
                </div>

              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>← 0% Lo-Fi Wireframe Blueprint</span>
                  <span>50% Split View</span>
                  <span>100% High-Fi Render →</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: DESIGN SYSTEM & TOKENS */}
          {activeTab === 'design-system' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-heading font-bold text-slate-900">Design Tokens & Component Rules</h3>
              
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-indigo-700 font-bold uppercase">Color Tokens</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="h-12 rounded-xl bg-indigo-600 mb-2"></div>
                    <div className="text-xs font-bold text-slate-900">Primary Indigo</div>
                    <div className="text-[10px] font-mono text-slate-500">#4F46E5</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="h-12 rounded-xl bg-violet-600 mb-2"></div>
                    <div className="text-xs font-bold text-slate-900">Accent Violet</div>
                    <div className="text-[10px] font-mono text-slate-500">#7C3AED</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="h-12 rounded-xl bg-slate-900 mb-2"></div>
                    <div className="text-xs font-bold text-slate-900">Charcoal Dark</div>
                    <div className="text-[10px] font-mono text-slate-500">#0F172A</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="h-12 rounded-xl bg-emerald-600 mb-2"></div>
                    <div className="text-xs font-bold text-slate-900">Success Emerald</div>
                    <div className="text-[10px] font-mono text-slate-500">#059669</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h4 className="text-xs font-mono text-indigo-700 font-bold uppercase">Typography System</h4>
                <div className="space-y-3 font-sans">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">DISPLAY TITLE • PLUS JAKARTA SANS 32PX</span>
                    <span className="text-2xl font-extrabold text-slate-900 font-heading">The Quick Brown Fox Jumps</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">BODY TEXT • PLUS JAKARTA SANS 14PX</span>
                    <span className="text-sm text-slate-700">Designing responsive, human-centered UI with usability focus.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CODE ARCHITECTURE */}
          {activeTab === 'code' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-heading font-bold text-slate-900">React & Spring Boot Implementation</h3>
                <span className="text-xs font-mono text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200 font-bold">
                  Full-Stack Architecture
                </span>
              </div>

              <div className="space-y-4 font-sans">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono text-indigo-700 font-bold mb-1">FRONTEND (REACT.JS)</h4>
                  <p className="text-xs text-slate-700">{project.codeSpecs.frontend}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono text-indigo-700 font-bold mb-1">BACKEND (SPRING BOOT / JAVA)</h4>
                  <p className="text-xs text-slate-700">
                    {project.codeSpecs.backend || project.codeSpecs.hardwareIntegration || 'REST API Service endpoints handling business logic.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-2">
                <div className="text-slate-400 text-[10px]">// Sample React Component State Integration</div>
                <div className="text-indigo-400">
                  <span className="text-amber-400">export function</span> {project.id.replace('-', '')}Component() &#123;
                </div>
                <div className="pl-4 text-cyan-300">
                  const [selectedSlot, setSelectedSlot] = useState(null);
                </div>
                <div className="pl-4 text-slate-300">
                  return &lt;<span className="text-amber-300">InteractiveLayout</span> slot=&#123;selectedSlot&#125; /&gt;;
                </div>
                <div className="text-indigo-400">&#125;</div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-600 font-semibold">
            Jesil Mohamed CJ Portfolio • UI/UX Designer
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
