/**
 * Skills, grouped — Arabic. Keep the same ids/levels/shape as ../en/skills.js.
 * Product and language names (HTML, React, Git…) stay in Latin script, as is standard practice.
 */
export const skillGroups = [
  {
    id: 'it',
    icon: 'monitor',
    title: 'الدعم التقني ودعم التطبيقات',
    blurb: 'ما أعمله يوميًا للعملاء والشركاء والموظفين.',
    items: [
      { name: 'دعم التطبيقات', level: 'daily' },
      { name: 'استكشاف أعطال الأجهزة والبرامج', level: 'daily' },
      { name: 'تفعيل الحسابات وحل مشاكل الدخول', level: 'daily' },
      { name: 'تصعيد الحالات وتوثيقها', level: 'daily' },
      { name: 'تثبيت وإعداد Windows', level: 'working' },
      { name: 'تثبيت وإعداد البرامج', level: 'working' },
      { name: 'أساسيات الشبكات', level: 'working' },
    ],
  },
  {
    id: 'data',
    icon: 'database',
    title: 'البيانات',
    blurb: 'الدقة أولًا: إدخال بيانات الحسابات والعمليات، والتحقق منها، ومراجعتها.',
    items: [
      { name: 'إدخال البيانات والتحقق منها', level: 'daily' },
      { name: 'مراجعة بيانات الحسابات والأنظمة', level: 'daily' },
      { name: 'SQL', level: 'working' },
      { name: 'MySQL', level: 'building' },
    ],
  },
  {
    id: 'web',
    icon: 'code',
    title: 'تطوير الويب',
    blurb: 'التقنيات التي أبني بها مشاريعي الشخصية المتكاملة.',
    items: [
      { name: 'HTML وCSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Node.js وExpress' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: 'الأدوات',
    blurb: 'أدوات يومية لعمل الدعم ولكتابة الكود.',
    items: [
      { name: 'Microsoft Office وExcel' },
      { name: 'VS Code' },
      { name: 'Git وGitHub' },
      { name: 'PowerShell' },
      { name: 'npm وVite' },
    ],
  },
]
