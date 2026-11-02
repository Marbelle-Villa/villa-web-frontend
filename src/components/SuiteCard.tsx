import type { Suite } from '../types'
import { useVillaStore } from '../store/useVillaStore'

interface SuiteCardProps {
  suite: Suite
  onReserve: (suiteId: string) => void
}

export default function SuiteCard({ suite, onReserve }: SuiteCardProps) {
  const currency = useVillaStore((state) => state.currency)
  const setActiveSuite = useVillaStore((state) => state.setActiveSuite)
  const price = currency === 'USD' ? suite.priceUsd : suite.priceLkr
  const priceLabel = currency === 'USD'
    ? `$${price.toLocaleString('en-US')}`
    : `Rs ${price.toLocaleString('en-US')}`

  return (
    <article className="suite-card">
      <div className="suite-card__image">
        <img alt={suite.alt} loading="lazy" src={suite.image} />
        <span className="image-badge">{suite.badge}</span>
        <span className="image-size">{suite.size}</span>
      </div>
      <div className="suite-card__content">
        <div>
          <h3>{suite.name}</h3>
          <p className="suite-card__description">{suite.description}</p>
          <div className="feature-tags">
            {suite.features.map((feature) => <span key={feature}>{feature}</span>)}
          </div>
        </div>
        <div className="suite-card__footer">
          <div>
            <span className="price-caption">NIGHTLY FROM</span>
            <span className="suite-price">{priceLabel}</span>
            <span className="price-net">/ net</span>
          </div>
          <div className="suite-actions">
            <button className="button button--outline button--small" onClick={() => setActiveSuite(suite)} type="button">
              DETAILS
            </button>
            <button className="button button--primary button--small" onClick={() => onReserve(suite.id)} type="button">
              RESERVE
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
