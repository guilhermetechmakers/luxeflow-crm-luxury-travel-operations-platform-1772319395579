import {
  LayoutDashboard,
  MapPin,
  CalendarCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FeatureCard } from '@/types/landing'

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  MapPin,
  CalendarCheck,
  Sparkles,
}

export interface FeatureHighlightsProps {
  features?: FeatureCard[]
}

export function FeatureHighlights({ features = [] }: FeatureHighlightsProps) {
  const safeFeatures = Array.isArray(features) ? features : []

  if (safeFeatures.length === 0) {
    return (
      <section
        className="border-t border-border bg-card/50 py-24"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2
            id="features-heading"
            className="font-serif text-3xl font-semibold text-foreground"
          >
            Built for luxury travel operations
          </h2>
          <p className="mt-4 text-muted-foreground">
            Command Center, Resort Bible, Bookings lifecycle, and AI Assistant — all in one platform.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      className="border-t border-border bg-card/50 py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="features-heading"
          className="font-serif text-center text-3xl font-semibold text-foreground lg:text-4xl"
        >
          Built for luxury travel operations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Command Center, Resort Bible, Bookings lifecycle, and AI Assistant — all in one platform.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {(safeFeatures ?? []).map((feature, index) => {
            const Icon = iconMap[feature?.icon ?? ''] ?? LayoutDashboard
            return (
              <div
                key={feature?.id ?? index}
                className={cn(
                  'rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-accent/30 hover:-translate-y-0.5',
                  'animate-[fadeInUp_0.5s_ease-out]'
                )}
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {feature?.title ?? ''}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature?.description ?? ''}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
