import { Link } from 'react-router-dom'
import {
  HeroSection,
  FeatureHighlights,
  IntegrationsStrip,
  PricingTeaser,
  TestimonialsCarousel,
  LogosCarousel,
  FooterLinks,
  LandingNav,
} from '@/components/landing'
import { Button } from '@/components/ui/button'
import { defaultLandingData } from '@/data/landing-data'

export function LandingPage() {
  const data = defaultLandingData ?? {}
  const hero = data?.hero ?? {}
  const features = Array.isArray(data?.features) ? data.features : []
  const integrations = Array.isArray(data?.integrations) ? data.integrations : []
  const pricingTeaser = data?.pricingTeaser ?? null
  const testimonials = Array.isArray(data?.testimonials) ? data.testimonials : []
  const logos = Array.isArray(data?.logos) ? data.logos : []

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      <LandingNav />

      <main id="main-content">
        <HeroSection data={hero} />

        <FeatureHighlights features={features} />

        <IntegrationsStrip logos={integrations} />

        <PricingTeaser priceData={pricingTeaser} />

        <TestimonialsCarousel testimonials={testimonials} autoRotate />

        <LogosCarousel logos={logos} />

        <section
          className="border-t border-border py-24"
          aria-labelledby="cta-heading"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2
              id="cta-heading"
              className="font-serif text-3xl font-semibold text-foreground"
            >
              Ready to streamline your operations?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join luxury travel agencies using LuxeFlow to deliver exceptional
              experiences.
            </p>
            <Link to="/signup" className="mt-8 inline-block">
              <Button size="lg" className="min-h-[44px] min-w-[44px]">
                Get started free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <FooterLinks />
    </div>
  )
}
