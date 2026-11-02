import BookingCard from '../components/BookingCard'
import ExperienceCard from '../components/ExperienceCard'
import ModernCTA from '../components/ModernCTA'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SuiteCard from '../components/SuiteCard'
import SuiteModal from '../components/SuiteModal'
import { experiences, features, suites } from '../data/homepage'
import { useVillaStore } from '../store/useVillaStore'

const testimonials = [
  {
    quote: 'An architectural triumph. Having traveled across Sri Lanka for three weeks, Marbelle Villa was the pinnacle of peace. Waking up to the Indian Ocean breeze and our butler Saman’s genuine care—every moment etched in our memories forever.',
    name: 'Charlotte & Oliver Henderson',
    location: 'London, United Kingdom • Ocean Whisper Suite',
    initial: 'C',
  },
  {
    quote: 'The quiet luxury here is unmatched. The cinnamon trees, the saltwater lap pool, and the absolute discretion of the team. Booking directly gave us the private airport transfer which made our arrival from Zurich effortless.',
    name: 'Marc & Elena von Berg',
    location: 'Zurich, Switzerland • Royal Coconut Villa',
    initial: 'M',
  },
  {
    quote: 'The Ayurvedic treatments in the garden pavilion and the sunset catamaran safari to Mirissa were exceptional. This is how regenerative tropical slow living is done with immaculate refinement.',
    name: 'Dr. Stephanie Vance',
    location: 'Melbourne, Australia • Palm Garden Suite',
    initial: 'S',
  },
]

const directBenefits = [
  ['fa-van-shuttle', 'COMPLIMENTARY TRANSFER', 'Free Colombo BIA airport transfer for stays of 5 nights or more.'],
  ['fa-champagne-glasses', 'DAILY IN-VILLA EXTRAS', 'A welcome bottle of chilled sparkling wine and seasonal fruit.'],
  ['fa-clock', 'FLEXIBLE STAY MANAGEMENT', 'Priority early check-in and late check-out, subject to availability.'],
]

export default function HomePage() {
  const currency = useVillaStore((state) => state.currency)
  const setCurrency = useVillaStore((state) => state.setCurrency)
  const setSuiteId = useVillaStore((state) => state.setSuiteId)

  const reserveSuite = (suiteId: string) => {
    setSuiteId(suiteId)
    document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <img
            alt="Marbelle Villa's tropical coastal grounds at twilight"
            className="hero__image"
            fetchPriority="high"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHOWSy_1A2_C-tcs5EtVHuDX9ns4UOkWhmaB4MpDvwnKNb_7wL82WN3w3FffEmTDAWQZ3_c4m74SPqcrqkKZptwTz7XgzZay8zdAzhlWcnyhfaC1EI5StWTzOD15M3XQiYTrpE_OhgTXakFO4loPe_kPONOR3vjADg2XkylsLQNd97mtKZtLOjyuBQgvNEkKEvgEQT8jgINoWoa9HA4eDsA_rG5U6oP-HoM-s6Y7BqCTz84Yqz4yCEUg"
          />
          <div className="hero__overlay" />
          <div className="hero__content container">
            <span className="hero__eyebrow"><span /> PRIVATE COASTAL SANCTUARY</span>
            <h1>Serenity Redefined on Sri Lanka’s Southern Coast</h1>
            <p>
              An intimate architectural sanctuary of slow living, private plunge pools, and bespoke coastal dining nestled between ancient cinnamon groves and the Indian Ocean.
            </p>
            <div className="hero__actions">
              <a className="button button--gold" href="#suites">DISCOVER SUITES <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
              <a className="button button--glass" href="#philosophy">OUR HERITAGE <i className="fa-solid fa-landmark" aria-hidden="true" /></a>
            </div>
          </div>
          <BookingCard />
        </section>

        <section className="philosophy section container" id="philosophy">
          <div className="philosophy__copy">
            <span className="eyebrow"><i className="fa-solid fa-spa" aria-hidden="true" /> AYUBOWAN — THE PHILOSOPHY</span>
            <h2 className="heading-serif">An Intimate 4-Suite Haven Where Time Dissolves into Palm Canopies</h2>
            <p>
              Conceived as an architectural homage to Geoffrey Bawa’s tropical modernism, Marbelle Villa occupies a historic half-century cinnamon grove merely minutes south of the 17th-century UNESCO Galle Dutch Fort. We eschew monolithic resort anonymity in favor of radical intimacy.
            </p>
            <p>
              Here, four individually sculpted residences are tended to by private butlers, while our executive chef sources morning catch directly from artisanal catamarans at Weligama and organic greens from our raised heirloom beds. Awaken to peacock calls, indulge in fragrant Ceylon spice oils, and drift into twilight over hand-pressed arrack infusions.
            </p>
            <div className="metrics">
              <div><strong>4</strong><span>EXCLUSIVE SUITES</span></div>
              <div><strong>100%</strong><span>SOLAR ASSISTED</span></div>
            </div>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-card__icon"><i className={`fa-solid ${feature.icon}`} aria-hidden="true" /></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section suites-section container" id="suites">
          <div className="suites-heading">
            <SectionHeading
              description="Each sculpted suite features high-vaulted teak ceilings, natural terrazzo floors, organic linen sheets, and open-to-sky monsoon showers."
              eyebrow="ARCHITECTURAL LIVING"
              title="Curated Suites & Private Residences"
            />
            <div aria-label="Choose currency" className="currency-toggle">
              <button
                aria-pressed={currency === 'USD'}
                className={currency === 'USD' ? 'is-selected' : ''}
                onClick={() => setCurrency('USD')}
                type="button"
              >
                USD ($)
              </button>
              <button
                aria-pressed={currency === 'LKR'}
                className={currency === 'LKR' ? 'is-selected' : ''}
                onClick={() => setCurrency('LKR')}
                type="button"
              >
                LKR (Rs)
              </button>
            </div>
          </div> 
          <div className="suite-grid">
            {suites.map((suite) => <SuiteCard key={suite.id} onReserve={reserveSuite} suite={suite} />)}
          </div>
          <div className="buyout-banner">
            <span className="buyout-banner__icon"><i className="fa-solid fa-house-chimney-window" aria-hidden="true" /></span>
            <div>
              <h3>Exclusive Private Villa Buyout</h3>
              <p>Reserve all 4 suites for family reunions, weddings, or bespoke wellness retreats. Up to 10 guests with full estate seclusion.</p>
            </div>
            <button className="button button--primary" onClick={() => reserveSuite('estate-buyout')} type="button">INQUIRE FULL ESTATE</button>
          </div>
        </section>   

        <section className="experiences-section section" id="experiences">
          <div className="container">
            <SectionHeading
              description="Immersive Sri Lankan traditions curated exclusively by our concierge, avoiding crowds and unhurried by schedules."
              eyebrow="SLOW LIVING & DISCOVERY"
              title="Curated Coastal & Heritage Journeys"
            />
            <div className="experience-grid">
              {experiences.map((experience) => <ExperienceCard experience={experience} key={experience.title} />)}
            </div>
          </div>
        </section>

        <section className="direct-section">
          <div className="container direct-section__inner">
            <div className="direct-section__intro">
              <span className="eyebrow">MARBELLE DIRECT ADVANTAGE</span>
              <h2 className="heading-serif">Reserve Direct for Unrivaled Inclusions</h2>
              <p>Book seamlessly on our official portal to bypass booking platform surcharges and enjoy tailored hospitality perks.</p>
            </div>
            <div className="direct-benefits">
              {directBenefits.map(([icon, title, description]) => (
                <article key={title}>
                  <span><i className={`fa-solid ${icon}`} aria-hidden="true" /> {title}</span>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section container">
          <div className="testimonial-heading">
            <SectionHeading eyebrow="GUEST REFLECTIONS" title="Unforgettable Escapes on the Southern Coast" centered />
            <div className="rating"><span aria-label="5 out of 5 stars">★★★★★</span> 5.0 Star Rating</div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div>
                  <span className="quote-mark">“</span>
                  <p>“{testimonial.quote}”</p>
                </div>
                <div className="guest-profile">
                  <span>{testimonial.initial}</span>
                  <div><strong>{testimonial.name}</strong><small>{testimonial.location}</small></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="location-section section container" id="location">
          <div className="location-copy">
            <span className="eyebrow"><i className="fa-solid fa-location-dot" aria-hidden="true" /> GETTING HERE</span>
            <h2 className="heading-serif">Secluded Seashore, Moments from Galle</h2>
            <p>
              Nestled along the golden southern coastal curve, Marbelle Villa offers secluded serenity shielded from highway noise while keeping the cultural treasures of the Galle Dutch Fort and world-class surf breaks within effortless reach.
            </p>
            <div className="distance-grid">
              <div><strong>90 min</strong><b>COLOMBO BIA</b><span>Via Southern Expressway</span></div>
              <div><strong>15 min</strong><b>GALLE DUTCH FORT</b><span>UNESCO Heritage site</span></div>
              <div><strong>5 min</strong><b>SURF BREAKS</b><span>Ahangama & Weligama Bay</span></div>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              aria-label="Map of Ahangama on Sri Lanka's southern coast, near Marbelle Villa"
              className="location-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Ahangama%2C%20Sri%20Lanka&z=14&output=embed"
              title="Ahangama, Sri Lanka — approximate Marbelle Villa area"
            />
            <div className="map-caption">
              <span><i className="fa-solid fa-location-dot" aria-hidden="true" /> Approximate villa area · Ahangama, Sri Lanka</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Ahangama%2C%20Sri%20Lanka" rel="noreferrer" target="_blank">
                OPEN MAP <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <ModernCTA
          description="Enjoy a private four-suite sanctuary, thoughtful local hospitality, and the freedom to discover Sri Lanka’s southern coast at your own pace."
          emphasis="your escape."
          title="Make room for"
        />
      </main>
      <SiteFooter />
      <SuiteModal />
    </>
  )
}
