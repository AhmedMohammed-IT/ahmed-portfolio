import { techStack } from './en/techStack'

import { profile as profileEn, socialLinks as socialLinksEn } from './en/profile'
import { ui as uiEn } from './en/ui'
import { about as aboutEn } from './en/about'
import { skillGroups as skillGroupsEn } from './en/skills'
import { journey as journeyEn, pillars as pillarsEn } from './en/journey'
import { experience as experienceEn } from './en/experience'
import { education as educationEn } from './en/education'
import { projects as projectsEn } from './en/projects'

import { profile as profileAr, socialLinks as socialLinksAr } from './ar/profile'
import { ui as uiAr } from './ar/ui'
import { about as aboutAr } from './ar/about'
import { skillGroups as skillGroupsAr } from './ar/skills'
import { journey as journeyAr, pillars as pillarsAr } from './ar/journey'
import { experience as experienceAr } from './ar/experience'
import { education as educationAr } from './ar/education'
import { projects as projectsAr } from './ar/projects'

// Tech-stack tiles are brand/product names (React, Git…), so they stay identical in every language.
function buildLocale({ locale, dir, profile, socialLinks, ui, about, skillGroups, journey, pillars, experience, education, projects }) {
  // Sections with no content are hidden: no projects → no "Projects" menu item.
  const visibleNav = ui.nav.filter((item) => item.id !== 'projects' || projects.length > 0)
  return {
    locale,
    dir,
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
}

const en = buildLocale({
  locale: 'en',
  dir: 'ltr',
  profile: profileEn,
  socialLinks: socialLinksEn,
  ui: uiEn,
  about: aboutEn,
  skillGroups: skillGroupsEn,
  journey: journeyEn,
  pillars: pillarsEn,
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
  journey: journeyAr,
  pillars: pillarsAr,
  experience: experienceAr,
  education: educationAr,
  projects: projectsAr,
})

/** Registry of available languages, keyed by locale code. */
export const contents = { en, ar }
export const defaultLocale = 'en'
