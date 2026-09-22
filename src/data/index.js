import { profile, socialLinks } from './en/profile'
import { ui } from './en/ui'
import { about } from './en/about'
import { skillGroups } from './en/skills'
import { techStack } from './en/techStack'
import { journey, pillars } from './en/journey'
import { experience } from './en/experience'
import { education } from './en/education'
import { projects } from './en/projects'

// Sections with no content are hidden: no projects → no "Projects" menu item.
const visibleNav = ui.nav.filter((item) => item.id !== 'projects' || projects.length > 0)

const en = {
  locale: 'en',
  dir: 'ltr',
  profile,
  socialLinks,
  ui: { ...ui, nav: visibleNav },
  about,
  skillGroups,
  techStack,
  journey,
  pillars,
  experience,
  education,
  projects,
}

/**
 * Registry of available languages. To add Arabic later:
 *  1. copy src/data/en to src/data/ar and translate every file,
 *  2. import it here and add `ar: { locale: 'ar', dir: 'rtl', ... }`,
 *  3. add a language switch that calls setLocale('ar') from LocaleContext.
 */
export const contents = { en }
export const defaultLocale = 'en'
