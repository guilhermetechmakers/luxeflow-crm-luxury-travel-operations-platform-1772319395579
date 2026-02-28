import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types/landing'

export interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  autoRotate?: boolean
  intervalMs?: number
}

export function TestimonialsCarousel({
  testimonials = [],
  autoRotate = true,
  intervalMs = 6000,
}: TestimonialsCarouselProps) {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : []
  const [activeIndex, setActiveIndex] = useState(0)

  const goNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev >= safeTestimonials.length - 1 ? 0 : prev + 1
    )
  }, [safeTestimonials.length])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev <= 0 ? safeTestimonials.length - 1 : prev - 1
    )
  }, [safeTestimonials.length])

  useEffect(() => {
    if (!autoRotate || safeTestimonials.length <= 1) return
    const id = setInterval(goNext, intervalMs)
    return () => clearInterval(id)
  }, [autoRotate, intervalMs, safeTestimonials.length, goNext])

  if (safeTestimonials.length === 0) {
    return (
      <section
        className="border-t border-border bg-muted/30 py-24"
        aria-label="Testimonials"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto h-12 w-12 text-muted-foreground/50" aria-hidden />
          <p className="mt-4 text-muted-foreground italic">
            Customer testimonials coming soon.
          </p>
        </div>
      </section>
    )
  }

  const current = safeTestimonials[activeIndex] ?? safeTestimonials[0]

  return (
    <section
      className="border-t border-border bg-muted/30 py-24"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="rounded-xl border border-border bg-card p-8 shadow-card md:p-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <Quote
            className="h-10 w-10 text-accent/50"
            aria-hidden
          />
          <blockquote className="mt-6">
            <p className="font-serif text-xl italic text-foreground md:text-2xl">
              &ldquo;{current?.quote ?? ''}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="font-semibold text-foreground">
                  {current?.author ?? ''}
                </span>
                {(current?.role ?? current?.company) && (
                  <span className="text-muted-foreground">
                    {' '}
                    — {[current?.role, current?.company].filter(Boolean).join(', ')}
                  </span>
                )}
              </cite>
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card transition-all duration-200 hover:bg-muted hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {(safeTestimonials ?? []).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-all duration-200',
                    index === activeIndex
                      ? 'bg-accent w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card transition-all duration-200 hover:bg-muted hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
