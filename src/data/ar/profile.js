/**
 * Core identity + contact details — Arabic. Keep in sync with ../en/profile.js.
 * Source: Ahmed's CV (Ahmed Rsume.pdf).
 */
export const profile = {
  name: 'أحمد الطلول',
  shortName: 'أحمد',
  field: 'تقنية المعلومات',
  role: 'أخصائي دعم تقني',
  tagline: 'أستكشف التقنية، وأبني حلولًا عملية، وأتعلّم باستمرار من خلال الكود.',
  location: 'سكاكا، السعودية',

  email: 'Ahmed.M.Saif.IT@gmail.com',
  phone: '0558287245',
  phoneIntl: '+966558287245',
  showPhone: false,

  // نفس ملف السيرة الذاتية (إنجليزي) يُستخدم لكل اللغات.
  cvUrl: '/Ahmed-CV.pdf',
  cvDownloadName: 'Ahmed-AL-Talool-CV.pdf',

  heroFacts: [
    { icon: 'graduation', text: 'بكالوريوس في تقنية المعلومات' },
    { icon: 'briefcase', text: 'أخصائي دعم تقني · سما تاكسي' },
    { icon: 'pin', text: 'سكاكا، السعودية' },
  ],

  terminal: [
    { command: 'whoami', output: 'أحمد الطلول' },
    { command: 'field', output: 'تقنية المعلومات' },
    { command: 'focus', output: 'دعم تقني · بيانات · تطوير الويب' },
    { command: 'status', output: 'دائم التعلّم' },
  ],
}

export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME' },
  { id: 'linkedin', label: 'LinkedIn', url: 'YOUR_LINKEDIN_URL' },
  { id: 'email', label: 'البريد الإلكتروني', url: `mailto:${profile.email}` },
]
