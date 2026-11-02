import { Link } from 'react-router-dom'

interface ModernCTAProps {
  eyebrow?: string
  title: string
  emphasis: string
  description: string
  buttonLabel?: string
}

export default function ModernCTA({
  eyebrow = 'MARBELLE VILLA • SRI LANKA',
  title,
  emphasis,
  description,
  buttonLabel = 'PLAN YOUR STAY',
}: ModernCTAProps) {
  return (
    <section className="modern-cta-section">
      <div className="modern-cta container">
        <div className="modern-cta__copy">
          <span className="modern-cta__eyebrow"><span /> {eyebrow}</span>
          <h2>{title} <em>{emphasis}</em></h2>
          <p>{description}</p>
        </div>
        <Link className="modern-cta__button" to="/contact?tab=reservation">
          {buttonLabel}
          <span aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
        </Link>
        <span aria-hidden="true" className="modern-cta__watermark">M</span>
        <span aria-hidden="true" className="modern-cta__corner" />
      </div>
    </section>
  )
}
