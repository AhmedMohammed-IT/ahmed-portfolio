import { Quote } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import { FeatureCard } from '@/components/cards/FeatureCard'
import styles from './About.module.css'

export function About({ index }) {
  const { about, ui } = useContent()
  const copy = ui.sections.about

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle id="about-title" index={index} {...copy} />

        <div className={styles.layout}>
          <Reveal className={styles.story}>
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="aside" delay={120} className={styles.facts} aria-label={ui.common.ariaQuickFacts}>
            <dl>
              {about.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <h3 className={styles.subhead}>{about.whatIDoTitle}</h3>
        <ul className={styles.cards}>
          {about.whatIDo.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 80}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </ul>

        <Reveal as="figure" className={styles.quote}>
          <Quote className={styles.quoteIcon} size={30} aria-hidden="true" />
          <blockquote>
            <p>{about.philosophy.quote}</p>
          </blockquote>
          <figcaption>{about.philosophy.label}</figcaption>
        </Reveal>
      </div>
    </section>
  )
}
