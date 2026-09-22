import { ArrowRight, Download } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SocialLink } from '@/components/ui/SocialLink'
import { TerminalCard } from '@/components/cards/TerminalCard'
import styles from './Hero.module.css'

export function Hero() {
  const { profile, socialLinks, ui, projects } = useContent()
  // With no published projects, the main call to action points to the About section instead.
  const hasProjects = projects.length > 0

  // Each piece rises in one after the other; --d sets its delay.
  const rise = (delay) => ({ className: styles.rise, style: { '--d': `${delay}ms` } })

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p {...rise(0)}>
            <span className={styles.kicker}>
              <span className={styles.dot} aria-hidden="true" />
              {profile.field}
            </span>
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span {...rise(80)} className={`${styles.rise} ${styles.name}`}>
              {profile.name}
            </span>
            <span {...rise(180)} className={`${styles.rise} ${styles.field}`}>
              {profile.field}
            </span>
          </h1>

          <p {...rise(300)} className={`${styles.rise} ${styles.tagline}`}>
            {profile.tagline}
          </p>

          <div {...rise(420)} className={`${styles.rise} ${styles.actions}`}>
            <Button
              href={hasProjects ? '#projects' : '#about'}
              icon={<ArrowRight size={18} aria-hidden="true" />}
              iconPosition="end"
            >
              {hasProjects ? ui.common.viewWork : ui.common.aboutMe}
            </Button>
            <Button
              href={profile.cvUrl}
              download={profile.cvDownloadName}
              variant="secondary"
              icon={<Download size={18} aria-hidden="true" />}
            >
              {ui.common.downloadCv}
            </Button>
          </div>

          <ul {...rise(540)} className={`${styles.rise} ${styles.facts}`}>
            {profile.heroFacts.map((fact) => (
              <li key={fact.text}>
                <Icon name={fact.icon} size={16} />
                <span>{fact.text}</span>
              </li>
            ))}
          </ul>

          <ul {...rise(640)} className={`${styles.rise} ${styles.social}`}>
            {socialLinks
              .filter((link) => link.id !== 'email')
              .map((link) => (
                <li key={link.id}>
                  <SocialLink link={link} />
                </li>
              ))}
          </ul>
        </div>

        <div {...rise(360)} className={`${styles.rise} ${styles.visual}`}>
          <TerminalCard
            title={`${profile.shortName.toLowerCase()}@portfolio — profile`}
            lines={profile.terminal}
            label={`Profile summary: ${profile.terminal.map((l) => `${l.command}: ${l.output}`).join('; ')}`}
          />
        </div>
      </div>
    </section>
  )
}
