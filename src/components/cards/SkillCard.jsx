import { Icon } from '@/components/ui/Icon'
import styles from './SkillCard.module.css'

/** One skill group. `levels` maps a level key to its label so the card stays language-agnostic. */
export function SkillCard({ group, levels }) {
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <span className={styles.icon}>
          <Icon name={group.icon} size={20} />
        </span>
        <h3 className={styles.title}>{group.title}</h3>
      </header>
      <p className={styles.blurb}>{group.blurb}</p>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <li key={item.name} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            {item.level && (
              <span className={`${styles.level} ${styles[item.level]}`}>{levels[item.level].label}</span>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}
