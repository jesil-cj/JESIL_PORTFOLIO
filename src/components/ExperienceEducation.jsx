import React from 'react';
import { internshipExperience, personalInfo } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ExperienceEducation({ onOpenResume }) {
  return (
    <section id="experience" className="py-24 relative z-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXPERIENCE & ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Internship <span className="text-gradient-indigo">Experience</span> & Education
          </h2>
          <p className="text-slate-600 text-base font-sans">
            Demonstrated technical dedication, real-world product problem-solving, and continuous academic growth.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Internship Experience Card */}
          <div className="glass-panel-interactive-light rounded-3xl p-8 border border-slate-200 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white text-xs font-mono font-bold rounded-bl-2xl">
              May 2026
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
                  INTERNSHIP EXPERIENCE
                </span>
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  {internshipExperience.role}
                </h3>
                <div className="text-sm font-semibold text-slate-600">
                  {internshipExperience.company}
                </div>
              </div>
            </div>

            {/* Date Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-semibold">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>{internshipExperience.period}</span>
            </div>

            {/* Certificate Callout Badge */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-emerald-800">OFFICIAL RECOGNITION</div>
                  <div className="text-xs text-slate-700">Certificate of Completion Issued</div>
                </div>
              </div>
              <button
                onClick={onOpenResume}
                className="text-xs font-mono text-emerald-700 hover:underline shrink-0 font-bold"
              >
                View Certificate &rarr;
              </button>
            </div>

            {/* Accomplishments */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-slate-500 font-bold uppercase">Key Achievements & Responsibilities:</div>
              {internshipExperience.keyAccomplishments.map((acc, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-panel-interactive-light rounded-3xl p-8 border border-slate-200 space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">
                  ACADEMIC EDUCATION
                </span>
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  {personalInfo.education.degree}
                </h3>
                <div className="text-sm font-semibold text-slate-600">
                  {personalInfo.education.institution}
                </div>
              </div>
            </div>

            {/* Graduation Date */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-semibold">
              <span className="text-slate-500">EXPECTED GRADUATION</span>
              <span className="text-indigo-600 font-extrabold">2028 (Final Year)</span>
            </div>

            {/* Domains Highlights */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono text-slate-500 font-bold uppercase">Relevant Coursework & Competencies:</div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                  <div className="text-indigo-700 font-bold mb-0.5">UI/UX Design</div>
                  Wireframing, Figma, User Centered Layouts
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                  <div className="text-violet-700 font-bold mb-0.5">Front-End Dev</div>
                  React.js, HTML5/CSS3, Modern Web
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                  <div className="text-emerald-700 font-bold mb-0.5">Programming</div>
                  Java, Python, OOP Architecture
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                  <div className="text-slate-900 font-bold mb-0.5">Backend & Systems</div>
                  Spring Boot, REST APIs, Git Workflow
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-sans pt-2">
              Combines computer science fundamentals and backend logic with modern visual product design skills to build user-centered software products.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
