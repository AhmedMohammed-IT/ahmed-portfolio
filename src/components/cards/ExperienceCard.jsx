import { useContent } from '@/context/LocaleContext'
import { Icon } from '@/components/ui/Icon'
import { Tag } from '@/components/ui/Tag'
import styles from './ExperienceCard.module.css'

/** One job. Columns split the work into technical / operational / support so both sides show. */
export function ExperienceCard({ job }) {
  const { ui } = useContent()
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <div>
          <h3 className={styles.role}>{job.role}</h3>
          <p className={styles.company}>
            {job.company} <span aria-hidden="true">·</span> {job.location}
          </p>
        </div>
        <p className={styles.period}>
          <time>{job.start}</time> — <time>{job.end}</time>
        </p>
      </header>

      <p className={styles.summary}>{job.summary}</p>

      <div className={styles.columns}>
        {job.columns.map((column) => (
          <section key={column.title} className={styles.column} aria-label={column.title}>
            <h4 className={styles.columnTitle}>
              <Icon name={column.icon} size={16} />
              {column.title}
            </h4>
            <ul className={styles.list}>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <ul className={styles.skills} aria-label={ui.common.ariaSkillsUsed}>
        {job.skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </article>
  )
}
