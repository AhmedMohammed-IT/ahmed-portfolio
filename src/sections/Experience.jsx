import { useContent } from '@/context/LocaleContext'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Reveal } from '@/components/ui/Reveal'
import { Timeline, TimelineItem } from '@/components/cards/TimelineItem'
import { ExperienceCard } from '@/components/cards/ExperienceCard'

export function Experience({ index }) {
  const { experience, ui } = useContent()
  const copy = ui.sections.experience

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle id="experience-title" index={index} {...copy} />
        <Timeline label={copy.title}>
          {experience.map((job) => (
            <TimelineItem key={job.id} marker={job.start.slice(-4)} state={job.end === 'Present' ? 'current' : 'done'} bare>
              <Reveal>
                <ExperienceCard job={job} />
              </Reveal>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
