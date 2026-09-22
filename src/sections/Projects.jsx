import { Plus } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/cards/ProjectCard'
import styles from './Projects.module.css'

export function Projects({ index: sectionIndex }) {
  const { projects, ui } = useContent()
  const copy = ui.sections.projects

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle id="projects-title" index={sectionIndex} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <ul className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * 100}>
              <ProjectCard project={project} copy={copy} />
            </Reveal>
          ))}
          <Reveal as="li" delay={projects.length * 100}>
            <div className={styles.more}>
              <span className={styles.plus} aria-hidden="true">
                <Plus size={22} />
              </span>
              <p>{copy.moreSoon}</p>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
