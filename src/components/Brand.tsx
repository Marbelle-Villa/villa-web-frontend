import { Link } from 'react-router-dom'

interface BrandProps {
  footer?: boolean
}

export default function Brand({ footer = false }: BrandProps) {
  return (
    <Link className={`brand${footer ? ' brand--footer' : ''}`} to="/" aria-label="Marbelle Villa home">
      <span className="brand__monogram">M</span>
      <span className="brand__wordmark">
        <span className="brand__name">{footer ? 'MARBELLE VILLA' : 'MARBELLE'}</span>
        <span className="brand__descriptor">VILLA • SRI LANKA</span>
      </span>
    </Link>
  )
}
