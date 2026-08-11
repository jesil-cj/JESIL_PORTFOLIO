import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Palette, Layout, Code, Server, CheckCircle2, Sparkles } from 'lucide-react';

const categoryIconMap = {
  Figma: Palette,
  Layout: Layout,
  Code: Code,
  Server: Server,
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id);

  const currentCatData = skillsCategories.find((c) => c.id === activeCategory) || skillsCategories[0];

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOLKIT & SKILLS MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Design <span className="text-gradient-indigo">Craft</span> & Technical Foundation
          </h2>
          <p className="text-slate-600 text-base font-sans">
            Combining product design principles with software engineering fundamentals to build seamless user experiences.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 max-w-4xl w-full">
            {skillsCategories.map((cat) => {
              const IconComp = categoryIconMap[cat.icon] || Code;
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <IconComp className="w-4 h-4 text-indigo-600" />
                  <span className="truncate">{cat.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Box */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-8">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900">
                {currentCatData.title}
              </h3>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                {currentCatData.description}
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200 font-bold self-start sm:self-auto">
              Verified Competencies
            </span>
          </div>

          {/* Skill Progress List */}
          <div className="space-y-6">
            {currentCatData.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-slate-900">{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-indigo-700 font-bold">{skill.level}% Proficiency</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
