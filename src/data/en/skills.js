/**
 * Skills, grouped by how they are used. This is the single place skills are listed on the site
 * (the separate tech-stack grid was removed because it repeated these items).
 * Levels (see ui.skillLevels): 'daily' | 'working' | 'building'. Omit `level` to show no pill.
 */
export const skillGroups = [
  {
    id: 'it',
    icon: 'monitor',
    title: 'IT & Application Support',
    blurb: 'What I do every day for customers, partners and staff.',
    items: [
      { name: 'Application Support', level: 'daily' },
      { name: 'Hardware & Software Troubleshooting', level: 'daily' },
      { name: 'User Account Activation & Access', level: 'daily' },
      { name: 'Case Escalation & Documentation', level: 'daily' },
      { name: 'Windows Installation & Configuration', level: 'working' },
      { name: 'Software Installation & Configuration', level: 'working' },
      { name: 'Networking Fundamentals', level: 'working' },
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
      { name: 'SQL', level: 'working' },
      { name: 'MySQL', level: 'building' },
    ],
  },
  {
    id: 'web',
    icon: 'code',
    title: 'Web Development',
    blurb: 'The stack behind my personal full-stack projects.',
    items: [
      { name: 'HTML & CSS', level: 'working' },
      { name: 'JavaScript', level: 'working' },
      { name: 'React', level: 'building' },
      { name: 'Node.js & Express', level: 'building' },
      { name: 'Tailwind CSS', level: 'building' },
      { name: 'Bootstrap', level: 'working' },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: 'Tools',
    blurb: 'Everyday tools for support work and for writing code.',
    items: [
      { name: 'Microsoft Office & Excel' },
      { name: 'VS Code' },
      { name: 'Git & GitHub' },
      { name: 'PowerShell' },
      { name: 'npm & Vite' },
    ],
  },
]
