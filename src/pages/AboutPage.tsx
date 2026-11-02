import ModernCTA from '../components/ModernCTA'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { features } from '../data/homepage'

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero about-hero">
          <div className="inner-hero__image" />
          <div className="inner-hero__shade" />
          <div className="inner-hero__content container">
            <span className="eyebrow">OUR STORY • GALLE, SRI LANKA</span>
            <h1>A more personal kind of coastal escape</h1>
            <p>A private four-suite sanctuary shaped by the rhythms, landscapes, and generous spirit of Sri Lanka’s southern coast.</p>
          </div>
        </section>

        <section className="about-story section container">
          <div className="about-story__image">
            <img
              alt="A tranquil tropical garden at Marbelle Villa"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxUC4A_xS0Atbi_vZJpe7Plfvxat15jZJ0HMceR39_0myrF7PT9zfVOTuSE5VBmaGEixmlw8hj1GKgulUupPZlsGsR2iAtTz_3XkVtm9cb41nLbaCStFckCfic8sDjzPzgea_iF_ucItEbuZdm5KMgZdllG_Tv50hYMMRkY3snbJXyEA6-jv_sIaTvbADiTpHC_QKeY0pgxtFzKxLF6QDNNcQfZvcPFwUih1x-6W5rDTIb5vw2p7HCBw"
            />
          </div>
          <div className="about-story__copy">
            <span className="eyebrow">A PLACE WITH A SENSE OF BELONGING</span>
            <h2 className="heading-serif">Rooted in the coast. Made for slowing down.</h2>
            <p>
              Marbelle Villa began with a simple idea: the most memorable stays feel less like a resort and more like being welcomed into a home. Set among palms and an old cinnamon grove near Galle, our small collection of residences makes room for privacy, thoughtful detail, and unhurried days.
            </p>
            <p>
              Tropical modernist architecture opens each space to garden light and ocean air. Local materials, seasonal cooking, and the knowledge of our community shape the experience—from a quiet morning by the pool to an evening discovering the stories of the southern coast.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">THE MARBELLE WAY</span>
              <h2 className="heading-serif">Thoughtful by nature</h2>
              <p className="section-heading__description">Quiet hospitality, a deep sense of place, and care for the environment are part of every stay.</p>
            </div>
            <div className="feature-grid about-values__grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <span className="feature-card__icon"><i className={`fa-solid ${feature.icon}`} aria-hidden="true" /></span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ModernCTA
          description="Discover an intimate four-suite retreat where tropical modernism, attentive hospitality, and the southern coast come together."
          emphasis="Marbelle Villa."
          title="Experience"
        />
      </main>
      <SiteFooter />
    </>
  )
}
