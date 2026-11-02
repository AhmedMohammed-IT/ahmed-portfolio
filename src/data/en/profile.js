/**
 * Core identity + contact details. Source: Ahmed's CV (Ahmed Rsume.pdf).
 * Edit values here — the whole site reads from this file.
 */
export const profile = {
  name: 'Ahmed AL-Talool',
  shortName: 'Ahmed',
  field: 'Information Technology',
  role: 'IT Support & Application Support',
  availability: 'Open to IT Support & Application Support roles',
  tagline:
    'I resolve app, account and Windows issues for customers, partners and staff, and I build full-stack web projects to understand the systems I support.',
  location: 'Sakaka, Saudi Arabia',

  email: 'Ahmed.M.Saif.IT@gmail.com',
  // Phone is stored but hidden by default (privacy). Set showPhone: true to display it in Contact.
  phone: '0558287245',
  phoneIntl: '+966558287245',
  showPhone: false,

  // Put the real PDF at /public/Ahmed-CV.pdf (a copy of the current CV is already there).
  cvUrl: '/Ahmed-CV.pdf',
  cvDownloadName: 'Ahmed-AL-Talool-CV.pdf',

  // Short facts under the hero text: only things no other section repeats.
  heroFacts: [
    { icon: 'pin', text: 'Sakaka, Saudi Arabia' },
    { icon: 'briefcase', text: 'On-site or remote, anywhere in Saudi Arabia' },
  ],

  // Hero "terminal" card: headline numbers from current work (details live in Experience).
  terminal: [
    { command: 'cases --daily', output: '~100 customer & partner cases' },
    { command: 'accounts --verified', output: '6,000+ user & partner accounts' },
    { command: 'it-support --users', output: '~15 staff kept working' },
    { command: 'build --current', output: 'Multi-branch restaurant ordering system' },
  ],
}

/**
 * Social / contact links.
 * A value that still contains "YOUR_" is hidden on the live site (placeholder in dev mode).
 */
export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/AhmedMohammed-IT' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-al-talool' },
  { id: 'email', label: 'Email', url: `mailto:${profile.email}` },
]
