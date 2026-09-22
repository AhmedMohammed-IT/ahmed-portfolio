import styles from './TerminalCard.module.css'

/**
 * A calm "digital profile" rendered as a terminal window. The text is real DOM content
 * (readable by assistive tech); the typing effect is CSS-only and skipped for reduced motion.
 */
export function TerminalCard({ title, lines, label }) {
  const LINE_GAP = 1.5 // seconds between commands
  const START = 0.6
  const SPEED = 0.055 // seconds per typed character

  return (
    <figure className={styles.window} aria-label={label}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>
        {lines.map((line, index) => {
          const start = START + index * LINE_GAP
          const typingTime = line.command.length * SPEED
          return (
            <div className={styles.block} key={line.command}>
              <p className={styles.command}>
                <span className={styles.prompt} aria-hidden="true">
                  &gt;
                </span>
                <span
                  className={styles.type}
                  style={{
                    '--chars': line.command.length,
                    '--duration': `${typingTime}s`,
                    '--delay': `${start}s`,
                  }}
                >
                  {line.command}
                </span>
              </p>
              <p className={styles.output} style={{ '--delay': `${start + typingTime + 0.12}s` }}>
                {line.output}
              </p>
            </div>
          )
        })}
        <p className={styles.command} aria-hidden="true">
          <span className={styles.prompt}>&gt;</span>
          <span className={styles.cursor} />
        </p>
      </div>
    </figure>
  )
}
