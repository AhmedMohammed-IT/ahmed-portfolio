/**
 * Skills, grouped. Source: CV skills list + the stack listed by Ahmed.
 * Levels (see ui.skillLevels): 'daily' | 'working' | 'building'. Omit `level` to show no pill.
 * TODO(Ahmed): review the levels below and adjust any that don't match how you use the skill.
 */
export const skillGroups = [
  {
    id: 'web',
    icon: 'code',
    title: 'Programming & Web',
    blurb: 'Front-end fundamentals, plus the tools I use to build small full-stack projects.',
    items: [
      { name: 'HTML', level: 'working' },
      { name: 'CSS', level: 'working' },
      { name: 'JavaScript', level: 'working' },
      { name: 'Bootstrap', level: 'working' },
      { name: 'React', level: 'building' },
      { name: 'Vite', level: 'building' },
    ],
  },
  {
    id: 'it',
    icon: 'monitor',
    title: 'IT & Support',
    blurb: 'Hands-on troubleshooting and user support in a live operational environment.',
    items: [
      { name: 'Technical Support', level: 'daily' },
      { name: 'Hardware & Software Troubleshooting', level: 'daily' },
      { name: 'Windows Installation & Configuration', level: 'working' },
      { name: 'Networking Fundamentals', level: 'working' },
      { name: 'Software Installation & Configuration', level: 'working' },
      { name: 'Technical Documentation', level: 'working' },
    ],
  },
  {
    id: 'data',
    icon: 'database',
    title: 'Data',
    blurb: 'Accuracy first: entering, verifying and reviewing account and operational data.',
    items: [
      { name: 'Data Entry & Verification', level: 'daily' },
      { name: 'Account / System Data Review', level: 'daily' },
      { name: 'SQL (basics)', level: 'working' },
      { name: 'Database Fundamentals', level: 'working' },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: 'Tools',
    blurb: 'The everyday toolbox for writing, versioning and running code.',
    items: [
      { name: 'VS Code' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'PowerShell' },
      { name: 'npm' },
      { name: 'Microsoft Office' },
    ],
  },
]
