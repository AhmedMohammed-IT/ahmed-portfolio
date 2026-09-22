import styles from './SectionTitle.module.css'

/** Numbered eyebrow + heading + description used at the top of every section. */
export function SectionTitle({ id, index, eyebrow, title, description, align = 'start' }) {
  return (
    <header className={`${styles.head} ${align === 'center' ? styles.center : ''}`}>
      <p className={styles.eyebrow}>
        {index && <span className={styles.index}>{index}</span>}
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
