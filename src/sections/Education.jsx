import { Award, GraduationCap } from 'lucide-react'
import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import styles from './Education.module.css'

export function Education({ index }) {
  const { education, ui } = useContent()
  const copy = ui.sections.education
  const hasCertificates = education.certifications.length > 0

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionTitle id="education-title" index={index} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className={`${styles.layout} ${hasCertificates ? '' : styles.single}`}>
          <div className={styles.main}>
            {education.degrees.map((degree) => (
              <Reveal key={`${degree.institution}-${degree.field}`}>
                <article className={styles.degree}>
                  <span className={styles.icon}>
                    <GraduationCap size={26} aria-hidden="true" />
                  </span>
                  <p className={styles.period}>{degree.period}</p>
                  <h3 className={styles.degreeTitle}>{degree.degree}</h3>
                  <p className={styles.field}>{degree.field}</p>
                  <p className={styles.institution}>{degree.institution}</p>
                </article>
              </Reveal>
            ))}

          </div>

          {hasCertificates && (
            <Reveal delay={140} className={styles.certs}>
              <h3 className={styles.subtitle}>{copy.certificationsTitle}</h3>
              <ul className={styles.certList}>
                {education.certifications.map((cert) => (
                  <li key={`${cert.title}-${cert.date}`} className={styles.cert}>
                    <span className={styles.certIcon}>
                      <Award size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className={styles.certTitle}>{cert.title}</p>
                      <p className={styles.certMeta}>
                        {cert.issuer} <span aria-hidden="true">·</span> <time>{cert.date}</time>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
