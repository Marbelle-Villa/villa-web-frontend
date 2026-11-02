import Brand from './Brand'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand footer />
            <p>
              An intimate tropical sanctuary on the southern shores of Galle. Architecture sculpted in harmony with cinnamon groves, towering coconut palms, and the endless horizon of the Indian Ocean.
            </p>
            <span><i className="fa-solid fa-location-dot" aria-hidden="true" /> Galle Coast, Southern Province, Sri Lanka</span>
          </div>
          <div>
            <h3>EXPLORE</h3>
            <a href="#home">Home</a>
            <a href="#suites">Suites & Villas</a>
            <a href="#experiences">Private Dining & Spa</a>
            <a href="#philosophy">The Heritage</a>
            <a href="#location">Getting Here</a>
          </div>
          <div>
            <h3>GUEST CARE & BOOKING</h3>
            <a href="tel:+94912238490"><i className="fa-solid fa-phone" aria-hidden="true" /> +94 91 223 8490</a>
            <a href="mailto:reservations@marbellevilla.lk"><i className="fa-regular fa-envelope" aria-hidden="true" /> reservations@marbellevilla.lk</a>
            <span><i className="fa-regular fa-clock" aria-hidden="true" /> Concierge: 24 Hours Daily</span>
            <a className="footer-direct-link" href="#booking-card">DIRECT RESERVATION PORTAL ↗</a>
          </div>
          <div>
            <h3>VERIFIED PAYMENT GATEWAY</h3>
            <p>Secured 256-bit encrypted transactions via PayHere Sri Lanka merchant gateway.</p>
            <div className="payment-badges"><span>VISA</span><span>Mastercard</span><span>PayHere</span><span>SSL SECURE</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Marbelle Villa. All rights reserved.</span>
          <div><a href="#location">Terms & Conditions</a><a href="#location">Privacy Policy</a><a href="#location">Cancellation Policy</a></div>
        </div>
      </div>
    </footer>
  )
}
