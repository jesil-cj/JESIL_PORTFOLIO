import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { Layout, Code, ArrowUpRight, CheckCircle, Sparkles, Layers, Sliders, ShieldCheck, Monitor, Smartphone } from 'lucide-react';

export default function Projects({ activeMode, onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = featuredProjects.filter((project) => {
    if (filter === 'ux') return project.tools.includes('Figma') || project.tools.includes('UI/UX Design');
    if (filter === 'code') return project.tools.includes('React.js') || project.tools.includes('Spring Boot');
    if (filter === 'internship') return project.id === 'iot-dashboard';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative z-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
              Featured <span className="text-gradient-indigo">UX Case Studies</span> & Prototypes
            </h2>
            <p className="text-slate-600 text-base max-w-2xl font-sans">
              Detailed breakdown of user research, lo-fi wireframe iterations, pixel-perfect Figma design systems, and responsive React component implementations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto shadow-inner">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Case Studies ({featuredProjects.length})
            </button>
            <button
              onClick={() => setFilter('ux')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'ux' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Figma UX
            </button>
            <button
              onClick={() => setFilter('code')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'code' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              React & Spring Boot
            </button>
            <button
              onClick={() => setFilter('internship')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'internship' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Internship
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
              className="group github-bento-card p-6 flex flex-col justify-between cursor-pointer border border-slate-200 relative overflow-hidden"
            >

              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold">
                    {project.badgeText}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Title & Category */}
                <div>
                  <div className="text-xs font-mono text-indigo-600 font-bold mb-1">{project.category}</div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1 line-clamp-1">{project.subtitle}</p>
                </div>

                {/* Project Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-sans">
                  {project.summary}
                </p>

                {/* Mode Perspective Box */}
                {activeMode === 'design' ? (
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-700 font-bold">
                      <Layout className="w-3.5 h-3.5" />
                      <span>UX & WIREFRAME FOCUS</span>
                    </div>
                    <p className="text-xs text-slate-700 line-clamp-2 font-sans">
                      {project.wireframeHighlights[0]}
                    </p>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-bold">
                      <Code className="w-3.5 h-3.5" />
                      <span>TECH ARCHITECTURE</span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 font-sans">
                      {project.codeSpecs.frontend}
                    </p>
                  </div>
                )}

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-slate-900 font-bold line-clamp-1">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Tool Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Link Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                <span>Explore Full Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
