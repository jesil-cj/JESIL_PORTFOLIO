import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, ExternalLink, Send, Check, Copy, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);



export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="py-24 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
                Let's Craft Something <span className="text-gradient-indigo">Great</span> Together
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                I’m currently seeking <strong className="text-slate-900 font-bold">UI/UX Design Internship</strong> opportunities. Whether you have a project idea, feedback, or a potential role, feel free to drop a message or reach out directly!
              </p>
            </div>

            {/* Direct Contact Buttons */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Copy Email Button */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">EMAIL ADDRESS</span>
                    <span className="text-slate-900 font-bold">{personalInfo.email}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold flex items-center gap-1.5 hover:bg-slate-800 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Tag */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">PHONE / WHATSAPP</span>
                    <span className="text-slate-900 font-bold">{personalInfo.phone}</span>
                  </div>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors"
                >
                  Call
                </a>
              </div>

              {/* GitHub Account Tag */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">GITHUB PROFILE</span>
                    <span className="text-slate-900 font-bold">{personalInfo.socials.github.replace('https://', '')}</span>
                  </div>
                </div>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
                >
                  View Profile
                </a>
              </div>


              {/* Portfolio URL Tag */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">NETLIFY PORTFOLIO LINK</span>
                    <span className="text-slate-900 font-bold line-clamp-1">{personalInfo.portfolioUrl}</span>
                  </div>
                </div>
                <a
                  href={personalInfo.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors"
                >
                  Visit
                </a>
              </div>


            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-600" />
              <span>Send Me a Direct Message</span>
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Thank You! Message Received.</h4>
                <p className="text-xs text-slate-600">
                  I will review your message and reach out to <span className="text-indigo-600 font-bold">{formData.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="text-slate-600 block mb-1 font-bold">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-600 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="text-slate-600 block mb-1 font-bold">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-600 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="text-slate-600 block mb-1 font-bold">MESSAGE / OPPORTUNITY DETAILS</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Jesil, we reviewed your UI/UX portfolio and would love to connect..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-600 transition-colors font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2 font-sans"
                >
                  <Send className="w-4 h-4 text-indigo-400" />
                  <span>Send Message Now</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Jesil Mohamed CJ. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Figma & Custom Modern CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
