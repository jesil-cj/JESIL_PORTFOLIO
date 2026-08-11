import React, { useState } from 'react';
import { ShoppingBag, Globe, Palette, Server, MessageSquare, ArrowRight, CheckCircle2, Zap, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FreelanceServices() {
  const [selectedService, setSelectedService] = useState('ecommerce');
  const [customNote, setCustomNote] = useState('');

  const whatsappPhone = '91638219567';

  const services = [
    {
      id: 'ecommerce',
      title: 'E-Commerce & Functional Online Stores',
      icon: ShoppingBag,
      tag: 'Most Popular',
      price: 'Custom Quote',
      summary: 'High-converting, fully functional e-commerce stores with product showcases, interactive cart drawers, and secure backend integration.',
      features: [
        'Custom Product Showcase & Gallery',
        'Interactive Shopping Cart & Slide-Over Drawer',
        'Spring Boot / REST API Backend Integration',
        'Mobile-First Touch & Responsive Layouts',
        'High-Speed Page Loading & SEO Setup',
      ],
      whatsappText: "Hi Jesil, I am interested in building a Functional E-Commerce Website for my brand. Let's discuss details!",
    },
    {
      id: 'static-websites',
      title: 'Static & High-Converting Landing Pages',
      icon: Globe,
      tag: 'Fast Turnaround',
      price: 'Custom Quote',
      summary: 'Sleek, modern business websites, landing pages, and portfolio showcases built with pixel-perfect design and sub-second load times.',
      features: [
        'Pixel-Perfect Modern HTML5 / CSS3 / React UI',
        'Responsive Across Mobile, Tablet & Desktop',
        'Clean SEO Meta Tags & Fast Google Performance',
        'Interactive Smooth Animations & Micro-interactions',
        'One-Click Contact & Lead Generation Setup',
      ],
      whatsappText: "Hi Jesil, I need a Modern Landing Page / Business Website for my venture. Let's connect!",
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design & Figma Prototypes',
      icon: Palette,
      tag: 'Design Only / Dev-Ready',
      price: 'Custom Quote',
      summary: 'Complete product design services from initial wireframes and user journey maps to clickable high-fidelity Figma prototypes and design systems.',
      features: [
        'User Flow Research & Lo-Fi Blueprint Wireframes',
        'Pixel-Perfect High-Fi Figma Prototypes',
        'Design Systems & Reusable Component Tokens',
        'Usability Testing & Heuristic Redesigns',
        'Developer-Ready Handoff Files & Auto-Layout Specs',
      ],
      whatsappText: "Hi Jesil, I need UI/UX Design and Figma Prototypes for my app/website idea. Let's talk!",
    },
    {
      id: 'custom-web-apps',
      title: 'Custom Web Apps & Admin Dashboards',
      icon: Server,
      tag: 'Full-Stack React + Spring Boot',
      price: 'Custom Quote',
      summary: 'Custom full-stack web applications, telemetry analytics dashboards, slot reservation systems, and REST API services.',
      features: [
        'React State-Driven Frontend Architecture',
        'Java / Spring Boot Backend API Development',
        'Data Visualization & Real-Time Dashboards',
        'User Authentication & Role-Based Access',
        'Clean Modular Codebase & Git Versioning',
      ],
      whatsappText: "Hi Jesil, I want to build a Custom Web Application / Dashboard using React and Spring Boot. Let's discuss!",
    },
  ];

  const currentServiceObj = services.find((s) => s.id === selectedService) || services[0];

  const getWhatsappUrl = (msgText) => {
    const combined = customNote ? `${msgText} Note: ${customNote}` : msgText;
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(combined)}`;
  };

  return (
    <section id="freelance" className="py-24 relative z-10 bg-slate-50/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>FREELANCE SERVICES & DIRECT WHATSAPP CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Turn Your Idea Into a <span className="text-gradient-indigo">High-Converting</span> Web Experience
          </h2>
          <p className="text-slate-600 text-base font-sans">
            I offer end-to-end freelance web design & full-stack development services. From custom e-commerce stores to responsive landing pages and UI/UX prototypes — directly connected to WhatsApp for fast communication.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => {
            const IconComp = service.icon;
            const isSelected = service.id === selectedService;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`glass-panel-interactive-light rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-indigo-600 ring-2 ring-indigo-600/20 shadow-xl bg-white scale-[1.02]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-indigo-600'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold">
                  <span className="text-indigo-600">
                    {isSelected ? 'Selected Package' : 'Click to View'}
                  </span>
                  <span className="text-slate-400">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Consultation Box */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                <currentServiceObj.icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-600 font-bold uppercase">SELECTED SERVICE</span>
                <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                  {currentServiceObj.title}
                </h3>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={getWhatsappUrl(currentServiceObj.whatsappText)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Discuss on WhatsApp (+91 638219567)</span>
            </a>
          </div>

          {/* Included Deliverables */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
              What Is Included In This Package:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentServiceObj.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Note & Direct Launch */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <label className="text-xs font-mono text-slate-700 font-bold block">
              ADD A CUSTOM NOTE OR PROJECT DETAIL (OPTIONAL):
            </label>
            <input
              type="text"
              placeholder="e.g. I need an e-commerce clothing store with 15 products by next month..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-sans text-slate-900 focus:outline-none focus:border-indigo-600"
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500 font-mono">
                Direct WhatsApp link opens instantly with pre-filled details.
              </span>
              <a
                href={getWhatsappUrl(currentServiceObj.whatsappText)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
              >
                <span>Send Pre-Filled WhatsApp Message</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
