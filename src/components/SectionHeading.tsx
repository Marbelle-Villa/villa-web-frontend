interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? ' section-heading--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-serif">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}
