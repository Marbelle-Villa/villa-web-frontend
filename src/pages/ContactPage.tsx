import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import DateRangePicker from '../components/DateRangePicker'
import DropdownSelect, { type DropdownOption } from '../components/DropdownSelect'
import ModernCTA from '../components/ModernCTA'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { suites } from '../data/homepage'
import { useVillaStore } from '../store/useVillaStore'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') === 'reservation' ? 'reservation' : 'contact'
  const {
    checkIn,
    checkOut,
    suiteId,
    adults,
    children,
    setCheckIn,
    setCheckOut,
    setSuiteId,
    setAdults,
    setChildren,
  } = useVillaStore()
  const selectedSuite = suites.find((suite) => suite.id === suiteId)
  const suiteName = suiteId === 'estate-buyout' ? 'Full Estate Buyout (4 Suites)' : selectedSuite?.name ?? suites[0].name
  const suiteOptions: DropdownOption[] = [
    ...suites.map((suite) => ({ label: suite.name, value: suite.id })),
    { label: 'Full Estate Buyout (4 Suites)', value: 'estate-buyout' },
  ]
  const adultOptions: DropdownOption[] = Array.from({ length: 10 }, (_, index) => {
    const count = index + 1
    return { label: `${count} adult${count === 1 ? '' : 's'}`, value: count }
  })
  const childOptions: DropdownOption[] = Array.from({ length: 6 }, (_, count) => ({
    label: `${count} ${count === 1 ? 'child' : 'children'}`,
    value: count,
  }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (activeTab === 'reservation' && (!checkIn || !checkOut || checkOut <= checkIn)) {
      window.alert('Please choose a valid arrival and departure date before sending your reservation request.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const subject = encodeURIComponent(`Villa ${activeTab === 'reservation' ? 'reservation request' : 'enquiry'} from ${name}`)
    const reservationDetails = activeTab === 'reservation'
      ? `\nArrival: ${checkIn}\nDeparture: ${checkOut}\nSuite: ${suiteName}\nAdults: ${adults}\nChildren: ${children}\nPhone: ${phone}\n`
      : ''
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}${reservationDetails}\nMessage: ${message}`)

    window.location.href = `mailto:reservations@marbellevilla.lk?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const switchTab = (tab: 'contact' | 'reservation') => {
    setSubmitted(false)
    setSearchParams(tab === 'contact' ? {} : { tab: 'reservation' })
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero contact-hero">
          <div className="inner-hero__image" />
          <div className="inner-hero__shade" />
          <div className="inner-hero__content container">
            <span className="eyebrow">WE’RE HERE TO HELP</span>
            <h1>Let’s plan something unforgettable</h1>
            <p>Our villa team is happy to help with your stay, a special occasion, or ideas for discovering the southern coast.</p>
          </div>
        </section>

        <section className="contact-content section container">
          <div className="contact-panel">
            <div aria-label="Contact options" className="contact-tabs" role="tablist">
              <button
                aria-selected={activeTab === 'contact'}
                className={activeTab === 'contact' ? 'is-active' : ''}
                onClick={() => switchTab('contact')}
                role="tab"
                type="button"
              >
                CONTACT US
              </button>
              <button
                aria-selected={activeTab === 'reservation'}
                className={activeTab === 'reservation' ? 'is-active' : ''}
                onClick={() => switchTab('reservation')}
                role="tab"
                type="button"
              >
                RESERVATION FORM
              </button>
            </div>
            {activeTab === 'contact' ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us an enquiry</h2>
                <p>Share a few details and your email app will open with a message addressed to our reservations team.</p>
                <label>
                  Your name
                  <input autoComplete="name" name="name" placeholder="Name" required />
                </label>
                <label>
                  Email address
                  <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
                </label>
                <label>
                  How can we help?
                  <textarea name="message" placeholder="Tell us about your plans..." required rows={5} />
                </label>
                <button className="button button--primary" type="submit">PREPARE ENQUIRY <i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
                {submitted && (
                  <p className="contact-form__status" role="status">
                    Your email app should open with the enquiry. If it doesn’t, email reservations@marbellevilla.lk directly.
                  </p>
                )}
              </form>
            ) : (
              <form className="contact-form reservation-form" onSubmit={handleSubmit}>
                <span className="eyebrow">YOUR STAY DETAILS</span>
                <h2>Complete your reservation request</h2>
                <p>Your selected stay is included below. Add your contact details and our reservations team will follow up to confirm availability.</p>
                <div className="reservation-summary">
                  <div className="reservation-summary__dates">
                    <DateRangePicker
                      checkIn={checkIn}
                      checkOut={checkOut}
                      label="STAY DATES"
                      onCheckInChange={setCheckIn}
                      onCheckOutChange={setCheckOut}
                    />
                  </div>
                  <div className="reservation-summary__field">
                    <small>SUITE / VILLA</small>
                    <DropdownSelect ariaLabel="Reservation suite" onChange={(value) => setSuiteId(String(value))} options={suiteOptions} value={suiteId} />
                  </div>
                  <div className="reservation-guests">
                    <small>GUESTS</small>
                    <div className="reservation-form__row">
                      <DropdownSelect ariaLabel="Reservation adults" onChange={(value) => setAdults(Number(value))} options={adultOptions} value={adults} />
                      <DropdownSelect ariaLabel="Reservation children" onChange={(value) => setChildren(Number(value))} options={childOptions} value={children} />
                    </div>
                  </div>
                </div>
                <label>
                  Your name
                  <input autoComplete="name" name="name" placeholder="Full name" required />
                </label>
                <div className="reservation-form__row">
                  <label>
                    Email address
                    <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
                  </label>
                  <label>
                    Phone number
                    <input autoComplete="tel" name="phone" placeholder="+ country code" required type="tel" />
                  </label>
                </div>
                <label>
                  Special requests
                  <textarea name="message" placeholder="Dietary requirements, arrival time, or anything else we should know..." rows={3} />
                </label>
                <button className="button button--primary" type="submit">SEND RESERVATION REQUEST <i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
                {submitted && (
                  <p className="contact-form__status" role="status">
                    Your email app should open with the reservation details. If it doesn’t, email reservations@marbellevilla.lk directly.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="contact-details">
            <span className="eyebrow">CONTACT MARBELLE VILLA</span>
            <h2 className="heading-serif">A warm welcome starts here.</h2>
            <p>Reach our concierge directly or send us a note. We’ll be glad to help you find the right suite and plan the details of your visit.</p>
            <a className="contact-detail" href="tel:+94912238490">
              <span><i className="fa-solid fa-phone" aria-hidden="true" /></span>
              <span><small>CALL OUR TEAM</small><strong>+94 91 223 8490</strong></span>
            </a>
            <a className="contact-detail" href="mailto:reservations@marbellevilla.lk">
              <span><i className="fa-regular fa-envelope" aria-hidden="true" /></span>
              <span><small>EMAIL RESERVATIONS</small><strong>reservations@marbellevilla.lk</strong></span>
            </a>
            <div className="contact-detail">
              <span><i className="fa-solid fa-location-dot" aria-hidden="true" /></span>
              <span><small>FIND US</small><strong>Galle Coast, Southern Province, Sri Lanka</strong></span>
            </div>
            <p className="contact-hours"><i className="fa-regular fa-clock" aria-hidden="true" /> Concierge available 24 hours daily</p>
          </div>
        </section>

        <ModernCTA
          description="Tell us what you have in mind. Our concierge will help shape a relaxed stay along Sri Lanka’s southern coast."
          emphasis="begins here."
          title="Your next escape"
          buttonLabel="START YOUR ENQUIRY"
        />
      </main>
      <SiteFooter />
    </>
  )
}
