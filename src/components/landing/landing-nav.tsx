import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LandingNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-serif text-2xl font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="LuxeFlow home"
        >
          LuxeFlow
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/demo">
            <Button
              variant="outline"
              className="min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Request demo"
            >
              Request Demo
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="ghost"
              className="min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Sign in"
            >
              Sign in
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              className="min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Sign up"
            >
              Sign up
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/demo"
              className="rounded-lg px-4 py-3 text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Request Demo
            </Link>
            <Link
              to="/login"
              className="rounded-lg px-4 py-3 text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="rounded-lg px-4 py-3 font-medium text-accent hover:bg-accent/10"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
