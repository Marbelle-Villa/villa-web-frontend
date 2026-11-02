import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Brand from './Brand'
import { useVillaStore } from '../store/useVillaStore'

const links = [
  ['HOME', '/'],
  ['ABOUT US', '/about'],
  ['CONTACT US', '/contact'],
]

export default function SiteHeader() {
  const menuOpen = useVillaStore((state) => state.mobileMenuOpen)
  const setMenuOpen = useVillaStore((state) => state.setMobileMenuOpen)
  const { pathname, hash } = useLocation()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (pathname === '/' && hash === '#booking-card') {
      window.requestAnimationFrame(() => {
        document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    }
  }, [hash, pathname])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              className={(href === '/' ? pathname === '/' : pathname === href) ? 'is-current' : ''}
              key={href}
              onClick={closeMenu}
              to={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-booking" onClick={closeMenu} to="/contact?tab=reservation">
          BOOK NOW <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link to={href} key={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <Link className="mobile-nav__book" to="/contact?tab=reservation" onClick={closeMenu}>BOOK NOW</Link>
        </nav>
      )}
    </header>
  )
}
