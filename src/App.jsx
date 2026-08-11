import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import FreelanceServices from './components/FreelanceServices';
import CaseStudyModal from './components/CaseStudyModal';
import FigmaSandbox from './components/FigmaSandbox';
import ProcessTimeline from './components/ProcessTimeline';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceEducation from './components/ExperienceEducation';
import ResumeModal from './components/ResumeModal';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [activeMode, setActiveMode] = useState('design');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [wireframeMode, setWireframeMode] = useState(false);

  return (
    <div className={`min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 ${wireframeMode ? 'wireframe-mode' : ''}`}>
      
      {/* Navigation */}
      <Navbar
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onOpenResume={() => setResumeModalOpen(true)}
        wireframeMode={wireframeMode}
        setWireframeMode={setWireframeMode}
      />

      {/* Main Content */}
      <main>
        <Hero
          activeMode={activeMode}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenSandbox={() => {
            const el = document.getElementById('sandbox');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <Projects
          activeMode={activeMode}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <FreelanceServices />

        <FigmaSandbox />

        <ProcessTimeline />

        <SkillsMatrix />

        <ExperienceEducation
          onOpenResume={() => setResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <ContactFooter />

      {/* Modals */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          activeMode={activeMode}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {resumeModalOpen && (
        <ResumeModal
          onClose={() => setResumeModalOpen(false)}
        />
      )}

    </div>
  );
}
