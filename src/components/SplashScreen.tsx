import { useEffect, useState } from 'react'

const SPLASH_DURATION = 2200
const EXIT_DURATION = 500

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setExiting(true), SPLASH_DURATION)
    const removeTimer = window.setTimeout(
      () => setVisible(false),
      SPLASH_DURATION + EXIT_DURATION,
    )

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      aria-label="Welcome to Marbelle Villa"
      className={`splash-screen${exiting ? ' splash-screen--exiting' : ''}`}
      role="status"
    >
      <div className="splash-screen__brand">
        <span aria-hidden="true" className="splash-screen__seal">
          <span>M</span>
        </span>
        <span className="splash-screen__name">MARBELLE</span>
        <span className="splash-screen__descriptor">VILLA • SRI LANKA</span>
        <span aria-hidden="true" className="splash-screen__progress">
          <span />
        </span>
      </div>
    </div>
  )
}
