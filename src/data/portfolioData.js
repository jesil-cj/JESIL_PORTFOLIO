export const personalInfo = {
  name: "Jesil Mohamed CJ",
  title: "Aspiring UI/UX Designer & Creative Front-End Developer",
  email: "jesilcj11@gmail.com",
  phone: "+91 638219567",
  portfolioUrl: "https://jesil-mohamed-cj.netlify.app/#/home",
  education: {
    degree: "B.Tech / B.E. in Computer Science",
    institution: "Autonomous Engineering College / University",
    period: "2024 - 2028",
    status: "Expected Graduation: 2028 (Final-Year Focus on Product Design & Frontend)",
  },
  summary:
    "Final-year Computer Science student with a passionate focus on UI/UX design, supported by hands-on front-end development experience in React. Skilled in Figma for wireframing, interactive prototyping, and design system creation, with a deep understanding of user-centered design, responsive layouts, and usability heuristics. Combines a product design mindset with backend & systems architecture skills to build beautiful, functional, production-ready interfaces.",
  targetRole: "Seeking UI/UX Design & Product Design Internship Opportunities",
  socials: {
    github: "https://github.com/jesil-cj",
    linkedin: "https://linkedin.com/in/jesil-mohamed-cj",
    figma: "https://figma.com/@jesil_ux",
  }
};

export const skillsCategories = [
  {
    id: "design-tools",
    title: "Design Tools & Prototyping",
    icon: "Figma",
    description: "Creating design systems, component libraries, and interactive high-fidelity prototypes.",
    skills: [
      { name: "Figma (Advanced)", level: 92, tag: "Primary Tool" },
      { name: "Wireframing & Lo-Fi Sketches", level: 95, tag: "UX Research" },
      { name: "High-Fidelity Prototyping", level: 90, tag: "Interactive UI" },
      { name: "Design Systems & Variables", level: 88, tag: "Scalability" },
      { name: "Figma Auto-Layout & Variants", level: 94, tag: "Layout Precision" },
    ],
  },
  {
    id: "ux-craft",
    title: "UI/UX & User-Centered Craft",
    icon: "Layout",
    description: "Designing intuitive user flows, information architecture, and micro-interactions.",
    skills: [
      { name: "User Journey & Flow Mapping", level: 90 },
      { name: "Responsive & Adaptive Layouts", level: 95 },
      { name: "Usability Testing & Heuristics", level: 85 },
      { name: "Micro-interactions & Motion Design", level: 88 },
      { name: "Accessibility (WCAG) Principles", level: 84 },
    ],
  },
  {
    id: "frontend",
    title: "Front-End Engineering",
    icon: "Code",
    description: "Translating pixel-perfect Figma designs into responsive React components.",
    skills: [
      { name: "React.js & Hooks", level: 88, tag: "Frontend Framework" },
      { name: "HTML5 & CSS3 (Modern Architecture)", level: 95, tag: "Core Web" },
      { name: "JavaScript (ES6+) / TypeScript basics", level: 86, tag: "Logic" },
      { name: "Vanilla CSS & Modern Frameworks", level: 92, tag: "Styling" },
      { name: "Component State Management", level: 85, tag: "Architecture" },
    ],
  },
  {
    id: "backend-systems",
    title: "Programming & Systems",
    icon: "Server",
    description: "Strong Computer Science foundation in object-oriented development and backend integration.",
    skills: [
      { name: "Java & OOP Principles", level: 85, tag: "Core Language" },
      { name: "Python", level: 80, tag: "Scripting & Data" },
      { name: "Spring Boot (Backend Framework)", level: 78, tag: "REST APIs" },
      { name: "System Design Fundamentals", level: 75, tag: "Architecture" },
      { name: "Git & Version Control", level: 90, tag: "Workflow" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "turf-booking",
    title: "Turf Booking App",
    category: "Full-Stack UX & Product Design",
    subtitle: "Streamlining Sports Slot Reservations with Seamless UX",
    summary:
      "A complete end-to-end booking experience designed in Figma to simplify local turf venue browsing, real-time slot selection, and instant confirmation, then engineered using React frontend & Spring Boot backend.",
    role: "Lead UI/UX Designer & React Developer",
    timeline: "3 Months • Personal Project",
    tools: ["Figma", "React.js", "Spring Boot", "Java", "Tailwind CSS", "User Flow Research"],
    metrics: {
      usabilityScore: "94% Flow Completion Rate",
      stepsToBook: "Reduced from 7 steps to 3 steps",
      responsiveScore: "100% Mobile & Desktop Adaptability",
    },
    wireframeHighlights: [
      "Lo-Fi Sketching: Quick wireframes mapping user checkout pain points",
      "Mid-Fi Figma Prototypes: Testing slot calendar interaction & time slot chips",
      "Design System: Custom theme variables, dark turf-green accents, and accessible buttons",
    ],
    designRationale:
      "Users previously struggled with complex time-slot selection on mobile screens. By introducing visual grid selectors with instant availability badges and a 3-tap checkout modal, task completion time dropped by 60%.",
    codeSpecs: {
      frontend: "React stateful components managing real-time slot reservations, dynamic price calculation, and filter chips.",
      backend: "Spring Boot REST controllers with slot concurrency locking to prevent double bookings.",
    },
    accentColor: "from-emerald-500 to-teal-700",
    glowColor: "rgba(16, 185, 129, 0.2)",
    badgeText: "Case Study + Live Prototype",
    featuredImage: "turf_app_preview",
  },
  {
    id: "clothing-brand",
    title: "Minimalist E-Commerce Store",
    category: "Brand Identity & Editorial Web Design",
    subtitle: "High-Fashion Apparel Showcase with Interactive Micro-Interactions",
    summary:
      "Designed and prototyped an editorial, photo-driven apparel website layout in Figma prioritizing high-impact product storytelling, sleek navigation, and micro-interactions. Built front-end in React.",
    role: "Visual Designer & Front-End Developer",
    timeline: "2 Months • Personal Project",
    tools: ["Figma Prototyping", "React.js", "CSS Architecture", "Design Tokens", "Spring Boot"],
    metrics: {
      visualHierarchy: "Editorial Grid Layout with Asymmetric Typography",
      interactionStyle: "Smooth Drawer Cart & Hover Color Swatch Swaps",
      techPerformance: "Sub-second Page Transitions",
    },
    wireframeHighlights: [
      "Visual Discovery Phase: Editorial mood boards, warm monochrome palettes, typography scale",
      "Interactive Components: Size selector pills, color variant previewers, quick slide-over cart",
      "Responsive Layout: Multi-column hero desktop down to single-column swipeable mobile view",
    ],
    designRationale:
      "Focusing on whitespace and clean typography allows luxury apparel items to take center stage. Micro-animations on hover give users immediate tactile feedback without cluttering the visual hierarchy.",
    codeSpecs: {
      frontend: "Custom React image gallery with preloading, CSS glassmorphism slide-over drawer, responsive CSS Grid.",
      backend: "Spring Boot product catalog API with filtered search endpoints.",
    },
    accentColor: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.2)",
    badgeText: "Editorial UX & Interactive UI",
    featuredImage: "clothing_brand_preview",
  },
  {
    id: "iot-dashboard",
    title: "IoT Device Management & Telemetry UI",
    category: "Hardware-to-Screen UX & Internship Showcase",
    subtitle: "Transforming Complex Sensor Data into Digestible Dashboard Analytics",
    summary:
      "Created during IoT Internship at Digital Hub. Designed intuitive telemetry dashboards and device control interfaces to monitor smart IoT sensors, status alerts, and performance metrics.",
    role: "IoT Devices UX & Front-End Intern",
    company: "Digital Hub",
    period: "May 2026 (01 May 2026 - 20 May 2026)",
    tools: ["UI/UX Design", "Figma Dashboard Components", "Data Visualization", "IoT Solutions", "React"],
    metrics: {
      recognition: "Awarded Official Certificate of Completion",
      dataClarity: "Clear visual hierarchy for real-time sensor metrics",
      adaptability: "Dark mode optimized for monitoring screens",
    },
    wireframeHighlights: [
      "Hardware Context: Understanding device status codes and ping latencies",
      "Telemetry Cards: Metric widgets with color-coded warning indicators (Green = Nominal, Amber = Alert)",
      "Device Control Modal: Quick toggle switches for device reboot and firmware updates",
    ],
    designRationale:
      "Engineers needed a dashboard that allowed high-level monitoring at a glance while enabling instant drill-down into individual device logs. High contrast status badges and spatial grouping drastically improved incident response time.",
    codeSpecs: {
      frontend: "Modular card grid component layout with real-time status updates and search filter.",
      hardwareIntegration: "Interfaced with IoT payload structures to present human-readable health scores.",
    },
    accentColor: "from-violet-500 to-indigo-600",
    glowColor: "rgba(139, 92, 246, 0.2)",
    badgeText: "Digital Hub Internship Project",
    featuredImage: "iot_dashboard_preview",
  },
];

export const designProcessSteps = [
  {
    step: "01",
    title: "Empathize & Research",
    subtitle: "Understanding User Pain Points & Context",
    description: "Conducting user interviews, defining personas, mapping user journeys, and dissecting competitive benchmark solutions.",
    icon: "Search",
    deliverables: ["User Journey Maps", "Persona Cards", "Problem Statement"],
  },
  {
    step: "02",
    title: "Wireframing & Structure",
    subtitle: "Laying Structural Foundations",
    description: "Sketching quick paper lo-fi ideas, moving into Figma to build structural layout grids and user flow wireframes without visual distraction.",
    icon: "LayoutGrid",
    deliverables: ["Lo-Fi Paper Sketches", "Figma Wireframe Flows", "Information Architecture"],
  },
  {
    step: "03",
    title: "Visual System & High-Fi Prototype",
    subtitle: "Crafting Pixel-Perfect Interfaces",
    description: "Building color tokens, typographic hierarchies, reusable component variants in Figma, and interactive micro-interactions.",
    icon: "Palette",
    deliverables: ["Design System & Tokens", "Figma Component Library", "Clickable High-Fi Prototype"],
  },
  {
    step: "04",
    title: "Engineering & Handoff",
    subtitle: "Bringing Designs to Life in Production",
    description: "Writing clean, semantic React component code with modern CSS architecture, ensuring 100% fidelity to original Figma specs.",
    icon: "Code2",
    deliverables: ["React Front-End Code", "Responsive Layouts", "Backend API Integration"],
  },
];

export const internshipExperience = {
  role: "IoT Devices Intern",
  company: "Digital Hub",
  period: "May 2026 (01 May 2026 - 20 May 2026)",
  location: "On-site / Hybrid",
  certificateStatus: "Official Certificate of Completion Issued",
  keyAccomplishments: [
    "Completed a hands-on technical internship in the IoT Devices department, working on assigned projects and tasks related to IoT technologies and connected solutions.",
    "Designed and prototyped user-centered dashboard interfaces for monitoring hardware sensor telemetry and status indicators.",
    "Demonstrated strong technical aptitude, dedication, and professionalism throughout the intensive program, earning formal recognition in the official Certificate of Completion.",
    "Collaborated with cross-functional engineering teams to bridge hardware telemetry data with clean web interface UI elements.",
  ],
};
