/** Interface text: navigation, section headings, button labels, form copy. */
export const ui = {
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
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
    /** Shown on the language switch button: the name of the OTHER language, to switch to it. */
    languageLabel: 'العربية',
    switchLanguage: 'View this site in Arabic',
    // Screen-reader-only landmark labels.
    ariaQuickFacts: 'Quick facts',
    ariaSkillsUsed: 'Skills used in this role',
    ariaTechnologies: 'Technologies',
    ariaProjectFacts: 'Project facts',
  },

  sections: {
    about: {
      eyebrow: 'About',
      title: 'Support work, backed by an IT degree and code',
      description: 'Who I am, how I work, and what I am looking for next.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Skills, grouped by how I use them',
      description: 'No percentages: what I use every day at work, what I know well, and what I am building through projects.',
      legendTitle: 'Levels',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Where I make an impact today',
      description: 'Customer, partner and staff support, measured in cases closed and accounts verified.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects & case studies',
      description: 'Personal projects, each with a short case study: the problem, the approach, and what I learned.',
      viewCaseStudy: 'View case study',
      github: 'GitHub',
      liveDemo: 'Live demo',
      moreSoon: 'More projects are on the way.',
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic & technical background',
      description: 'A formal IT degree, extended with focused certificates.',
      certificationsTitle: 'Certificates & courses',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      description: 'Open to IT Support, Help Desk and Application Support opportunities across Saudi Arabia.',
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
    next: 'Next project',
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
    cvTitle: 'Prefer a quick overview?',
    cvText: 'My CV puts my experience, skills and education on a single page.',
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
    line: 'IT & Application Support · Saudi Arabia',
    rights: 'All rights reserved.',
  },
}
