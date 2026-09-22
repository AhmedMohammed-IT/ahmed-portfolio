import { useContent } from '@/context/LocaleContext'
import { Reveal } from '@/components/ui/Reveal'
import { TechIcon } from '@/components/ui/TechIcon'
import styles from './TechStack.module.css'

export function TechStack() {
  const { techStack, ui } = useContent()
  const copy = ui.sections.skills

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h3 id="stack-title" className={styles.title}>
          {copy.stackTitle}
        </h3>
        <p className={styles.description}>{copy.stackDescription}</p>
      </div>
      <ul className={styles.grid} aria-labelledby="stack-title">
        {techStack.map((tech, index) => (
          <Reveal as="li" key={tech.name} delay={index * 40}>
            <div className={styles.tile}>
              <TechIcon icon={tech.icon} lucide={tech.lucide} />
              <span className={styles.name}>{tech.name}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
