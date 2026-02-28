import { CreditCard, Calendar, Search, Sparkles, Mail } from 'lucide-react'
import type { IntegrationLogo } from '@/types/landing'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stripe: CreditCard,
  'Google Calendar': Calendar,
  Algolia: Search,
  OpenAI: Sparkles,
  SendGrid: Mail,
}

export interface IntegrationsStripProps {
  logos?: IntegrationLogo[]
}

export function IntegrationsStrip({ logos = [] }: IntegrationsStripProps) {
  const safeLogos = Array.isArray(logos) ? logos : []

  if (safeLogos.length === 0) {
    return (
      <section
        className="border-t border-border py-12"
        aria-label="Integrations"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Integrations coming soon
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      className="border-t border-border py-12"
      aria-label="Integrations"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs uppercase tracking-wider text-muted-foreground">
          Works with your ecosystem
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {(safeLogos ?? []).map((item, index) => {
            const Icon = iconMap[item?.name ?? ''] ?? CreditCard
            const name = item?.name ?? ''
            const href = item?.href
            const content = (
              <span className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-accent">
                {item?.src ? (
                  <img
                    src={item.src}
                    alt={name}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Icon className="h-8 w-8" aria-hidden />
                )}
                <span className="font-medium">{name}</span>
              </span>
            )

            return (
              <a
                key={item?.name ?? index}
                href={href ?? '#'}
                target={href ? '_blank' : undefined}
                rel={href ? 'noopener noreferrer' : undefined}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-4 py-2 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`${name} integration`}
              >
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
