import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Download, Copy, Check, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo, internshipExperience } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleDownloadPdf = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalInfo.portfolioUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Action Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading font-bold text-slate-900">
              Jesil_Mohamed_CJ_Resume.pdf
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
              Verified 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-white font-sans text-slate-800 space-y-8 flex-1 print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-heading font-black text-slate-900 tracking-tight">
                Jesil Mohamed CJ
              </h1>
              <span className="text-sm font-mono text-indigo-600 font-bold">
                Aspiring UI/UX Designer
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>jesilcj11@gmail.com</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                <span>+91 638219567</span>
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline text-indigo-600">
                  {personalInfo.portfolioUrl}
                </a>
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">SUMMARY</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">EDUCATION</h2>
            <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-900">
              <span>{personalInfo.education.degree}</span>
              <span className="text-slate-500 font-mono">Expected Graduation: 2028</span>
            </div>
            <div className="text-xs text-slate-500">{personalInfo.education.institution}</div>
          </div>

          {/* Relevant Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">RELEVANT SKILLS</h2>
            <div className="space-y-2 text-xs text-slate-700">
              <div><strong className="text-slate-900">Design Tools:</strong> Figma</div>
              <div><strong className="text-slate-900">UI/UX Skills:</strong> Wireframing, Prototyping, User Interface Design, Responsive Design, User-Centered Design</div>
              <div><strong className="text-slate-900">Front-End Development:</strong> React, HTML/CSS, JavaScript</div>
              <div><strong className="text-slate-900">Programming Languages:</strong> Java, Python</div>
              <div><strong className="text-slate-900">Other:</strong> Spring Boot, System Design, Object-Oriented Programming, Git, Version Control</div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">PROJECTS</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>Turf Booking App – Personal Project</span>
                <span className="text-indigo-600 font-mono">Figma + React + Spring Boot</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-2">
                <li>Designed the user interface and user flow in Figma for a turf slot browsing and booking experience, then built it using React (frontend) and Spring Boot (backend).</li>
                <li>Focused on a clean, intuitive layout to simplify the booking process for end users.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>Clothing Brand Website – Personal Project</span>
                <span className="text-indigo-600 font-mono">Editorial UX + React</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-2">
                <li>Designed and prototyped the visual layout for an e-commerce style clothing brand website, prioritizing product showcase and easy navigation.</li>
                <li>Developed the responsive front end using React and Spring Boot, translating the design into a functional website.</li>
              </ul>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">INTERNSHIP EXPERIENCE</h2>
            
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>IoT Devices Intern – Digital Hub</span>
                <span className="text-emerald-700 font-mono">May 2026 (01 May 2026 - 20 May 2026)</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-2">
                <li>Completed a hands-on internship in the IoT Devices department, working on assigned projects and tasks related to IoT technologies and solutions.</li>
                <li>Demonstrated strong technical aptitude, dedication, and professionalism throughout the program, as recognized in the official Certificate of Completion.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-600">
          <span>Jesil Mohamed CJ Portfolio</span>
          <button onClick={onClose} className="hover:text-slate-900 font-bold">Close Resume</button>
        </div>

      </div>
    </div>
  );
}
