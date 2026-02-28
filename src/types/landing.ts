/** Landing page data models - LuxeFlow CRM */

export interface HeroCta {
  label: string
  href: string
}

export interface HeroMedia {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface HeroSectionData {
  id?: string
  title: string
  subtitle: string
  ctas: {
    primary: HeroCta
    secondary?: HeroCta
  }
  media?: HeroMedia
}

export interface FeatureCard {
  id: string
  title: string
  description: string
  icon: string
}

export interface IntegrationLogo {
  name: string
  src: string
  href?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  company?: string
}

export interface PricingTeaserData {
  title: string
  perSeat?: string
  highlights?: string[]
}

export interface BrandLogo {
  name: string
  src?: string
  alt?: string
}

export interface LandingData {
  hero: HeroSectionData
  features: FeatureCard[]
  integrations: IntegrationLogo[]
  pricingTeaser: PricingTeaserData
  testimonials: Testimonial[]
  logos: BrandLogo[]
}
