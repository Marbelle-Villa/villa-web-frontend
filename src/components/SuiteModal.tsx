import { useVillaStore } from '../store/useVillaStore'

export default function SuiteModal() {
  const suite = useVillaStore((state) => state.activeSuite)
  const setActiveSuite = useVillaStore((state) => state.setActiveSuite)
  const currency = useVillaStore((state) => state.currency)

  if (!suite) return null

  const price = currency === 'USD' ? `$${suite.priceUsd}` : `Rs ${suite.priceLkr.toLocaleString('en-US')}`

  return (
    <div
      className="modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) setActiveSuite(null)
      }}
      role="presentation"
    >
      <section aria-labelledby="suite-modal-title" aria-modal="true" className="suite-modal" role="dialog">
        <button aria-label="Close suite details" className="modal-close" onClick={() => setActiveSuite(null)} type="button">
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        <img alt={suite.alt} src={suite.image} />
        <div className="suite-modal__body">
          <span className="eyebrow">{suite.badge}</span>
          <h2 id="suite-modal-title">{suite.name}</h2>
          <p>{suite.description}</p>
          <div className="feature-tags">{suite.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
          <div className="suite-modal__footer">
            <span><span className="price-caption">NIGHTLY FROM</span><strong>{price}</strong></span>
            <a className="button button--primary" href="#booking-card" onClick={() => setActiveSuite(null)}>CHECK DATES</a>
          </div>
        </div>
      </section>
    </div>
  )
}
