import styles from './TimelineItem.module.css'

/** Vertical timeline wrapper. Items are <TimelineItem>. */
export function Timeline({ children, label }) {
  return (
    <ol className={styles.timeline} aria-label={label}>
      {children}
    </ol>
  )
}

/**
 * One step on a timeline.
 * `state`: 'done' (filled) | 'current' (pulsing) | 'ongoing' (dashed).
 * `marker` is the node content (a number, a year, an icon).
 */
export function TimelineItem({ marker, state = 'done', bare = false, children }) {
  return (
    <li className={`${styles.item} ${styles[state]}`}>
      <span className={styles.marker} aria-hidden="true">
        {marker}
      </span>
      <div className={bare ? styles.bare : styles.content}>{children}</div>
    </li>
  )
}
