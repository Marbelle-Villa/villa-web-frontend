import type { Experience } from '../types'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <img alt={experience.alt} loading="lazy" src={experience.image} />
      <div className="experience-card__shade" />
      <div className="experience-card__content">
        <span className="experience-card__category">{experience.category}</span>
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
        <a href="#location">{experience.linkText} <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
      </div>
    </article>
  )
}
