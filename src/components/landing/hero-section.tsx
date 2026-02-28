import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { HeroSectionData } from '@/types/landing'

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  media?: HeroSectionData['media']
  align?: 'left' | 'right' | 'center'
  data?: HeroSectionData
}

export function HeroSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  media,
  align = 'left',
  data,
}: HeroSectionProps) {
  const hero = (data ?? {}) as Partial<HeroSectionData>
  const t = title ?? hero.title ?? ''
  const s = subtitle ?? hero.subtitle ?? ''
  const primary = ctaPrimary ?? hero.ctas?.primary ?? { label: 'Request Demo', href: '/demo' }
  const secondary = ctaSecondary ?? hero.ctas?.secondary ?? { label: 'Sign Up', href: '/signup' }
  const m = media ?? hero.media

  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
        ? 'text-right ml-auto'
        : ''

  return (
    <header className="relative overflow-hidden" role="banner">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-supporting/5 animate-[fadeIn_0.5s_ease-out]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-supporting/10 via-transparent to-transparent"
        aria-hidden
      />
      {/* Soft gold accent overlay */}
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-supporting/5 rounded-full blur-3xl -translate-y-1/2"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className={cn('max-w-3xl', alignClass)}>
          <h1
            className="font-serif text-5xl font-bold tracking-tight text-foreground lg:text-6xl animate-[fadeInUp_0.5s_ease-out]"
            style={{ animationDelay: '0.1s' }}
          >
            {t.includes('luxury travel') ? (
              <>
                {t.replace('luxury travel', '')}
                <span className="text-accent">luxury travel</span>
              </>
            ) : (
              t || (
                <>
                  The operations-first CRM for{' '}
                  <span className="text-accent">luxury travel</span>
                </>
              )
            )}
          </h1>
          <p
            className="mt-6 text-lg text-muted-foreground leading-relaxed animate-[fadeInUp_0.5s_ease-out]"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            {s}
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-[fadeInUp_0.5s_ease-out]"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <Link to={primary.href}>
              <Button
                size="lg"
                className="min-h-[44px] min-w-[44px] group focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={primary.label}
              >
                {primary.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to={secondary.href}>
              <Button
                size="lg"
                variant="outline"
                className="min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={secondary.label}
              >
                {secondary.label}
              </Button>
            </Link>
          </div>
        </div>

        {m?.src && (
          <div
            className="mt-16 rounded-xl overflow-hidden shadow-card animate-[fadeIn_0.5s_ease-out]"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            {m.type === 'video' ? (
              <video
                src={m.src}
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                aria-label={m.alt}
              />
            ) : (
              <img
                src={m.src}
                alt={m.alt ?? ''}
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1200}
                height={600}
              />
            )}
          </div>
        )}
      </div>
    </header>
  )
}
