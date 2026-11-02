import { profile as profileEn, socialLinks as socialLinksEn } from './en/profile'
import { ui as uiEn } from './en/ui'
import { about as aboutEn } from './en/about'
import { skillGroups as skillGroupsEn } from './en/skills'
import { experience as experienceEn } from './en/experience'
import { education as educationEn } from './en/education'
import { projects as projectsEn } from './en/projects'

import { profile as profileAr, socialLinks as socialLinksAr } from './ar/profile'
import { ui as uiAr } from './ar/ui'
import { about as aboutAr } from './ar/about'
import { skillGroups as skillGroupsAr } from './ar/skills'
import { experience as experienceAr } from './ar/experience'
import { education as educationAr } from './ar/education'
import { projects as projectsAr } from './ar/projects'

function buildLocale({ locale, dir, profile, socialLinks, ui, about, skillGroups, experience, education, projects }) {
  // Sections with no content are hidden: no projects → no "Projects" menu item (same for experience).
  const visibleNav = ui.nav.filter(
    (item) => (item.id !== 'projects' || projects.length > 0) && (item.id !== 'experience' || experience.length > 0),
  )
  return {
    locale,
    dir,
    profile,
    socialLinks,
    ui: { ...ui, nav: visibleNav },
    about,
    skillGroups,
    experience,
    education,
    projects,
  }
}

const en = buildLocale({
  locale: 'en',
  dir: 'ltr',
  profile: profileEn,
  socialLinks: socialLinksEn,
  ui: uiEn,
  about: aboutEn,
  skillGroups: skillGroupsEn,
  experience: experienceEn,
  education: educationEn,
  projects: projectsEn,
})

const ar = buildLocale({
  locale: 'ar',
  dir: 'rtl',
  profile: profileAr,
  socialLinks: socialLinksAr,
  ui: uiAr,
  about: aboutAr,
  skillGroups: skillGroupsAr,
  experience: experienceAr,
  education: educationAr,
  projects: projectsAr,
})

/** Registry of available languages, keyed by locale code. */
export const contents = { en, ar }
export const defaultLocale = 'en'
