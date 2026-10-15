/**
 * Core identity + contact details — Arabic. Keep in sync with ../en/profile.js.
 * Source: Ahmed's CV (Ahmed Rsume.pdf).
 */
export const profile = {
  name: 'أحمد الطلول',
  shortName: 'أحمد',
  field: 'تقنية المعلومات',
  role: 'الدعم التقني ودعم التطبيقات',
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
    { icon: 'briefcase', text: 'الدعم التقني ودعم التطبيقات' },
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
  { id: 'github', label: 'GitHub', url: 'https://github.com/AhmedMohammed-IT' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-al-talool' },
  { id: 'email', label: 'البريد الإلكتروني', url: `mailto:${profile.email}` },
]
