import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { PricingTeaserData } from '@/types/landing'

export interface PricingTeaserProps {
  priceData?: PricingTeaserData | null
}

export function PricingTeaser({ priceData }: PricingTeaserProps) {
  const data = (priceData ?? {}) as Partial<PricingTeaserData>
  const title = data?.title ?? 'Simple per-seat pricing'
  const perSeat = data?.perSeat ?? 'Starting at $49/seat/month'
  const highlights = Array.isArray(data?.highlights) ? data.highlights : []

  return (
    <section
      className="border-t border-border py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          id="pricing-heading"
          className="font-serif text-3xl font-semibold text-foreground"
        >
          {title}
        </h2>
        {perSeat && (
          <p className="mt-4 text-lg text-muted-foreground">{perSeat}</p>
        )}
        {(highlights ?? []).length > 0 && (
          <ul className="mt-8 flex flex-wrap justify-center gap-6" role="list">
            {(highlights ?? []).map((item: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Check className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        <Link to="/signup" className="mt-10 inline-block">
          <Button
            size="lg"
            variant="outline"
            className="min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="See full pricing"
          >
            See pricing
          </Button>
        </Link>
      </div>
    </section>
  )
}
