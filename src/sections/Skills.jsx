import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import { SkillCard } from '@/components/cards/SkillCard'
import { TechStack } from './TechStack'
import styles from './Skills.module.css'

export function Skills({ index }) {
  const { skillGroups, ui } = useContent()
  const copy = ui.sections.skills
  const levels = ui.skillLevels

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle id="skills-title" index={index} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <Reveal className={styles.legend} role="group" aria-label={copy.legendTitle}>
          <span className={styles.legendTitle}>{copy.legendTitle}</span>
          <ul className={styles.legendList}>
            {Object.entries(levels).map(([key, level]) => (
              <li key={key}>
                <span className={`${styles.chip} ${styles[key]}`}>{level.label}</span>
                <span className={styles.hint}>{level.hint}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={(index % 2) * 100}>
              <SkillCard group={group} levels={levels} />
            </Reveal>
          ))}
        </div>

        <TechStack />
      </div>
    </section>
  )
}
