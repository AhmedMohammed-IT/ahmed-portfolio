import { useReveal } from '@/hooks/useReveal'
import styles from './Reveal.module.css'

/** Fades and slides its children up once they scroll into view. `delay` is in milliseconds. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  const classes = [styles.reveal, visible ? styles.visible : '', className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={classes} style={{ '--reveal-delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
