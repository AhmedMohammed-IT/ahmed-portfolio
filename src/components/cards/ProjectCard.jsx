import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'
import { ProjectCover } from './ProjectCover'
import { ProjectLinks } from './ProjectLinks'
import styles from './ProjectCard.module.css'

const MAX_TAGS = 5

/** Card for the projects grid. The whole card opens the case study (stretched title link). */
export function ProjectCard({ project, copy }) {
  const visibleTech = project.technologies.slice(0, MAX_TAGS)
  const hiddenCount = project.technologies.length - visibleTech.length

  return (
    <article className={styles.card}>
      <ProjectCover project={project} />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.type}>{project.type}</span>
          <span className={styles.status}>{project.status}</span>
        </div>

        <h3 className={styles.title}>
          <Link to={`/projects/${project.slug}`} className={styles.titleLink}>
            {project.name}
          </Link>
        </h3>
        <p className={styles.summary}>{project.summary}</p>

        <ul className={styles.tech} aria-label="Technologies">
          {visibleTech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
          {hiddenCount > 0 && (
            <li>
              <Tag>+{hiddenCount}</Tag>
            </li>
          )}
        </ul>

        <div className={styles.footer}>
          <span className={styles.cta}>
            {copy.viewCaseStudy}
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
          <ProjectLinks links={project.links} githubLabel={copy.github} liveLabel={copy.liveDemo} />
        </div>
      </div>
    </article>
  )
}
