/**
 * Learning journey (rendered as a timeline).
 * `period` is only used where it is backed by the CV. `state`: 'done' | 'current' | 'ongoing'.
 * `pillar` ties each step to the site's core idea (see `pillars`).
 */
export const pillars = [
  'Academic mindset',
  'Technology',
  'Problem solving',
  'Practical experience',
  'Continuous learning',
]

export const journey = [
  {
    id: 'computer-fundamentals',
    title: 'Computer Fundamentals',
    text: 'How computers, operating systems and hardware actually work — the base everything else sits on.',
    period: '2019 — 2023',
    pillar: 'Academic mindset',
    state: 'done',
  },
  {
    id: 'it-fundamentals',
    title: 'IT Fundamentals',
    text: 'Systems, networking basics, databases and software — studied at university and extended with certificates in 2024.',
    period: '2019 — 2024',
    pillar: 'Academic mindset',
    state: 'done',
  },
  {
    id: 'html-css',
    title: 'HTML & CSS',
    text: 'Structuring and styling interfaces that are readable, responsive and accessible.',
    pillar: 'Technology',
    state: 'done',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    text: 'Adding logic and interaction — turning static pages into working tools.',
    pillar: 'Problem solving',
    state: 'done',
  },
  {
    id: 'react',
    title: 'React',
    text: 'Component-based interfaces, routing and state, used across my current projects.',
    pillar: 'Technology',
    state: 'done',
  },
  {
    id: 'real-projects',
    title: 'Building Real Projects',
    text: 'Full-stack projects with authentication, databases and admin dashboards.',
    pillar: 'Practical experience',
    state: 'current',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    text: 'Going deeper on the code I write, the tools I use, and the way I explain my work.',
    pillar: 'Continuous learning',
    state: 'ongoing',
  },
]
