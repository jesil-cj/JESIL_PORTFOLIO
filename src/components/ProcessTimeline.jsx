import React from 'react';
import { designProcessSteps } from '../data/portfolioData';
import { Search, LayoutGrid, Palette, Code2, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Search: Search,
  LayoutGrid: LayoutGrid,
  Palette: Palette,
  Code2: Code2,
};

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 relative z-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <span>METHODOLOGY & CRAFT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            How I <span className="text-gradient-indigo">Design</span> & <span className="text-gradient-coral">Build</span>
          </h2>
          <p className="text-slate-600 text-base font-sans">
            A structured user-centered workflow bridging user empathy, wireframe iterations in Figma, and clean React engineering.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designProcessSteps.map((step) => {
            const StepIcon = iconMap[step.icon] || Search;
            return (
              <div
                key={step.step}
                className="glass-panel-interactive-light rounded-3xl p-6 border border-slate-200 flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-heading font-black text-indigo-600 font-mono">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-indigo-600">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500">{step.subtitle}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[10px] font-mono text-indigo-700 font-bold uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
