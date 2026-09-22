import { useContent } from '@/context/LocaleContext'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Journey } from '@/sections/Journey'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Education } from '@/sections/Education'
import { Contact } from '@/sections/Contact'

export default function Home() {
  const { projects } = useContent()

  // Sections without content are skipped, and the visible ones are numbered 01, 02, 03…
  const sections = [
    { id: 'about', Component: About },
    { id: 'skills', Component: Skills },
    { id: 'journey', Component: Journey },
    { id: 'experience', Component: Experience },
    { id: 'projects', Component: Projects, hidden: projects.length === 0 },
    { id: 'education', Component: Education },
    { id: 'contact', Component: Contact },
  ].filter((section) => !section.hidden)

  return (
    <>
      <Hero />
      {sections.map(({ id, Component }, position) => (
        <Component key={id} index={String(position + 1).padStart(2, '0')} />
      ))}
    </>
  )
}
