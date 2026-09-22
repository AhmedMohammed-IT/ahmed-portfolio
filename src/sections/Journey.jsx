import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'
import { Timeline, TimelineItem } from '@/components/cards/TimelineItem'
import styles from './Journey.module.css'

export function Journey({ index: sectionIndex }) {
  const { journey, pillars, ui } = useContent()
  const copy = ui.sections.journey

  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.aside}>
          <SectionTitle id="journey-title" index={sectionIndex} {...copy} />
          <Reveal>
            <ul className={styles.pillars} aria-label={ui.common.ariaGuidingIdeas}>
              {pillars.map((pillar) => (
                <li key={pillar}>
                  <Tag tone="accent">{pillar}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Timeline label={copy.title}>
          {journey.map((step, index) => (
            <TimelineItem key={step.id} marker={String(index + 1).padStart(2, '0')} state={step.state}>
              <Reveal delay={(index % 3) * 60}>
                <div className={styles.meta}>
                  <Tag>{step.pillar}</Tag>
                  {step.period && <span className={styles.period}>{step.period}</span>}
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
                {copy.states[step.state] && <p className={styles.state}>{copy.states[step.state]}</p>}
              </Reveal>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
