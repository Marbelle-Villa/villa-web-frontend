export interface Suite {
  id: string
  name: string
  subtitle: string
  image: string
  alt: string
  badge: string
  size: string
  description: string
  features: string[]
  priceUsd: number
  priceLkr: number
}

export interface Experience {
  category: string
  title: string
  description: string
  image: string
  alt: string
  linkText: string
}
