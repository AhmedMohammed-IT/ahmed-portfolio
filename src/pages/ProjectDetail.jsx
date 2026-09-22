import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ImageOff } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'
import { ProjectCover } from '@/components/cards/ProjectCover'
import { ProjectLinks } from '@/components/cards/ProjectLinks'
import NotFound from './NotFound'
import styles from './ProjectDetail.module.css'

function Block({ title, children }) {
  return (
    <Reveal as="section" className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>
      {children}
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { projects, profile, ui, dir } = useContent()
  const copy = ui.projectDetail
  const listCopy = ui.sections.projects
  // "Back" points right and "forward/next" points left in RTL.
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft
  const NextIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const index = projects.findIndex((item) => item.slug === slug)
  const project = projects[index]

  useDocumentTitle(project ? `${project.name} — Case study | ${profile.name}` : `${copy.notFoundTitle} | ${profile.name}`)

  if (!project) return <NotFound title={copy.notFoundTitle} text={copy.notFoundText} />

  const next = projects[(index + 1) % projects.length]

  return (
    <article className={styles.page}>
      <div className="container">
        <Link to={{ pathname: '/', hash: '#projects' }} className={styles.back}>
          <BackIcon size={16} aria-hidden="true" />
          {copy.back}
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.type}>{project.type}</span>
            <span className={styles.status}>{project.status}</span>
          </div>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          <ProjectLinks links={project.links} githubLabel={listCopy.github} liveLabel={listCopy.liveDemo} />
        </header>

        <ProjectCover project={project} size="hero" />

        <div className={styles.layout}>
          <div className={styles.main}>
            <Block title={copy.overview}>
              <div className={styles.prose}>
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Block>

            <Block title={copy.problem}>
              <p className={styles.prose}>{project.problem}</p>
            </Block>

            <Block title={copy.solution}>
              <p className={styles.prose}>{project.solution}</p>
            </Block>

            <Block title={copy.features}>
              <ul className={styles.features}>
                {project.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={copy.challenges}>
              <ul className={styles.bullets}>
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Block>

            <Block title={copy.learned}>
              <ul className={styles.bullets}>
                {project.learned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Block>

            <Block title={copy.screenshots}>
              {project.screenshots.length > 0 ? (
                <ul className={styles.shots}>
                  {project.screenshots.map((shot) => (
                    <li key={shot.src}>
                      <img src={shot.src} alt={shot.alt} loading="lazy" />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={styles.empty}>
                  <ImageOff size={22} aria-hidden="true" />
                  <p>{copy.screenshotsEmpty}</p>
                </div>
              )}
            </Block>
          </div>

          <aside className={styles.side} aria-label={ui.common.ariaProjectFacts}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{copy.statusLabel}</h2>
              <p className={styles.cardValue}>{project.status}</p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{copy.technology}</h2>
              <ul className={styles.tags}>
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {projects.length > 1 && (
          <Link to={`/projects/${next.slug}`} className={styles.next}>
            <span>
              <span className={styles.nextLabel}>{copy.next}</span>
              <span className={styles.nextName}>{next.name}</span>
            </span>
            <NextIcon size={22} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  )
}
