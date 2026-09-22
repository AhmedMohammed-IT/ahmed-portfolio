/**
 * Core identity + contact details. Source: Ahmed's CV (Ahmed Rsume.pdf).
 * Edit values here — the whole site reads from this file.
 */
export const profile = {
  name: 'Ahmed AL-Talool',
  shortName: 'Ahmed',
  field: 'Information Technology',
  role: 'IT Support Specialist',
  tagline:
    'Exploring technology, building practical solutions, and continuously learning through code.',
  location: 'Sakaka, Saudi Arabia',

  email: 'ahmed784675175@gmail.com',
  // Phone is stored but hidden by default (privacy). Set showPhone: true to display it in Contact.
  phone: '0558287245',
  phoneIntl: '+966558287245',
  showPhone: false,

  // Put the real PDF at /public/Ahmed-CV.pdf (a copy of the current CV is already there).
  cvUrl: '/Ahmed-CV.pdf',
  cvDownloadName: 'Ahmed-AL-Talool-CV.pdf',

  // Short facts shown under the hero text so a visitor understands the profile in seconds.
  heroFacts: [
    { icon: 'graduation', text: "Bachelor's in Information Technology" },
    { icon: 'briefcase', text: 'IT Support Specialist · SamaTaxi' },
    { icon: 'pin', text: 'Sakaka, Saudi Arabia' },
  ],

  // Lines shown in the hero terminal card.
  terminal: [
    { command: 'whoami', output: 'Ahmed AL-Talool' },
    { command: 'field', output: 'Information Technology' },
    { command: 'focus', output: 'IT Support · Data · Web Dev' },
    { command: 'status', output: 'Always learning' },
  ],
}

/**
 * Social / contact links.
 * TODO(Ahmed): replace the two placeholders below. While a value still contains "YOUR_",
 * the link is hidden on the live site (and shown as a dashed placeholder in dev mode).
 */
export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME' },
  { id: 'linkedin', label: 'LinkedIn', url: 'YOUR_LINKEDIN_URL' },
  { id: 'email', label: 'Email', url: `mailto:${profile.email}` },
]
