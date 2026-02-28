import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface FooterLinksProps {
  className?: string
}

export function FooterLinks({ className }: FooterLinksProps) {
  return (
    <footer
      className={cn('border-t border-border py-12', className)}
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Link
          to="/"
          className="font-serif text-lg font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="LuxeFlow home"
        >
          LuxeFlow
        </Link>
        <nav
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          aria-label="Footer navigation"
        >
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Terms
          </Link>
          <Link
            to="/help"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Help
          </Link>
        </nav>
      </div>
    </footer>
  )
}
