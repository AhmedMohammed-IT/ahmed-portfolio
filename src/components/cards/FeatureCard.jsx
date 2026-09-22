import { Icon } from '@/components/ui/Icon'
import styles from './FeatureCard.module.css'

export function FeatureCard({ icon, title, text }) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>
        <Icon name={icon} size={22} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  )
}
