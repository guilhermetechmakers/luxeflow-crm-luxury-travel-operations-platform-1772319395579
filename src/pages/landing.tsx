import { Link } from 'react-router-dom'
import { LayoutDashboard, MapPin, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-supporting/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-supporting/10 via-transparent to-transparent" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <span className="font-serif text-2xl font-semibold text-foreground">
            LuxeFlow
          </span>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button>Get started</Button>
            </Link>
          </div>
        </nav>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
              The operations-first CRM for{' '}
              <span className="text-accent">luxury travel</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Centralize clients, bookings, resort knowledge, and operations.
              Reduce missed actions, shorten handoffs, and increase conversion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="group">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="border-t border-border bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-center text-3xl font-semibold text-foreground lg:text-4xl">
            Built for luxury travel operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Command Center, Resort Bible, and AI Assistant — all in one platform.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={LayoutDashboard}
              title="Operations Command Center"
              description="7-day check-ins/outs, due payments, overdue tasks, and approvals — never miss a deadline."
              className="animate-in"
            />
            <FeatureCard
              icon={MapPin}
              title="Resort Bible"
              description="Faceted search, standardized records, and filters tailored for advisor queries."
              className="animate-in animation-delay-100"
            />
            <FeatureCard
              icon={Sparkles}
              title="AI Assistant"
              description="Recommend resorts, draft itineraries, and create tasks from natural language."
              className="animate-in animation-delay-200"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Ready to streamline your operations?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join luxury travel agencies using LuxeFlow to deliver exceptional experiences.
          </p>
          <Link to="/signup" className="mt-8 inline-block">
            <Button size="lg">Get started free</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg text-foreground">LuxeFlow</span>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/help" className="hover:text-foreground transition-colors">
              Help
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-accent/30',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}
