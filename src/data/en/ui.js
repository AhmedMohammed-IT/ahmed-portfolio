/** Interface text: navigation, section headings, button labels, form copy. */
export const ui = {
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],

  common: {
    skipToContent: 'Skip to content',
    home: 'Home',
    downloadCv: 'Download CV',
    viewWork: 'View My Work',
    aboutMe: 'About Me',
    contactMe: 'Contact Me',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    backToTop: 'Back to top',
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    loading: 'Loading…',
    linkComingSoon: 'Link coming soon',
  },

  sections: {
    about: {
      eyebrow: 'About',
      title: 'Technology, applied to real problems',
      description:
        'A short story about where I am, what I do every day, and where I am heading.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Skills & tools, grouped by how I use them',
      description:
        'No percentages — just an honest view of what I use daily, what I know well, and what I am actively building.',
      legendTitle: 'How I describe levels',
      stackTitle: 'Tech stack',
      stackDescription: 'The languages and tools behind my projects.',
    },
    journey: {
      eyebrow: 'Journey',
      title: 'From technology to solutions',
      description:
        'Step by step — from computer fundamentals toward building things people can actually use.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Where technical meets operational',
      description: 'My current role combines user support, systems, and data accuracy.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects & case studies',
      description:
        'Real projects I have built while learning. Each one has a case study with the problem, the approach, and what I took away from it.',
      viewCaseStudy: 'View case study',
      github: 'GitHub',
      liveDemo: 'Live demo',
      moreSoon: 'More projects are on the way.',
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic & technical background',
      description: 'A formal IT foundation, extended with focused certificates.',
      certificationsTitle: 'Certificates & courses',
      areasTitle: 'Areas of study & practice',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      description:
        'Open to conversations about IT support, data, and web development opportunities.',
    },
  },

  skillLevels: {
    daily: { label: 'Daily use', hint: 'Part of my everyday work.' },
    working: { label: 'Working knowledge', hint: 'Comfortable using it on real tasks.' },
    building: { label: 'Building & learning', hint: 'Actively growing it through projects.' },
  },

  projectDetail: {
    back: 'All projects',
    overview: 'Overview',
    problem: 'The problem',
    solution: 'The approach',
    features: 'Key features',
    technology: 'Technology',
    challenges: 'Challenges',
    learned: 'What I learned',
    screenshots: 'Screenshots',
    screenshotsEmpty: 'Screenshots will be added soon.',
    links: 'Links',
    statusLabel: 'Status',
    notFoundTitle: 'Project not found',
    notFoundText: "That project doesn't exist (or was moved).",
  },

  notFound: {
    code: '404',
    title: "This page doesn't exist",
    text: 'The link may be broken, or the page may have been moved.',
    action: 'Back to home',
  },

  contact: {
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    cvTitle: 'Prefer a quick overview?',
    cvText: 'My CV summarises my experience, education and skills on a single page.',
    copy: 'Copy email',
    copied: 'Copied!',
    copyFailed: 'Copy failed — select the address manually.',
    form: {
      title: 'Send a message',
      note: 'This form opens your email app with the message ready to send — nothing is stored on this site.',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
      send: 'Open in email app',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        message: 'Please write a short message.',
      },
      success:
        'Your email app should now be open with the message ready. If nothing happened, copy my address and write to me directly.',
    },
  },

  footer: {
    line: 'Built with curiosity, code, and continuous learning.',
    rights: 'All rights reserved.',
  },
}
