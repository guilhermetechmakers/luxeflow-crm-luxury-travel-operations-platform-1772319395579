import { Building2 } from 'lucide-react'
import type { BrandLogo } from '@/types/landing'

export interface LogosCarouselProps {
  logos?: BrandLogo[]
}

export function LogosCarousel({ logos = [] }: LogosCarouselProps) {
  const safeLogos = Array.isArray(logos) ? logos : []

  if (safeLogos.length === 0) {
    return (
      <section
        className="border-t border-border py-16"
        aria-label="Trusted by"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Trusted by luxury travel agencies worldwide
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      className="border-t border-border py-16"
      aria-label="Trusted by"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-wider text-muted-foreground">
          Trusted by luxury travel leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {(safeLogos ?? []).map((logo, index) => (
            <div
              key={logo?.name ?? index}
              className="flex min-h-[44px] min-w-[120px] items-center justify-center grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
            >
              {logo?.src ? (
                <img
                  src={logo.src}
                  alt={logo?.alt ?? logo?.name ?? ''}
                  className="h-8 w-auto max-w-[140px] object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="flex items-center gap-2 font-serif text-lg font-medium text-muted-foreground">
                  <Building2 className="h-5 w-5" aria-hidden />
                  {logo?.name ?? ''}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
