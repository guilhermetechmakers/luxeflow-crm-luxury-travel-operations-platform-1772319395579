import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  MapPin,
  MessageSquare,
  Sparkles,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  CheckSquare,
  CreditCard,
  FolderOpen,
  HelpCircle,
  Menu,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSidebar } from '@/contexts/sidebar-context'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/clients', icon: Users, label: 'Clients' },
  { to: '/dashboard/bookings', icon: FileText, label: 'Bookings' },
  { to: '/dashboard/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/dashboard/tasks', icon: CheckSquare, label: 'Tasks' },
  { to: '/dashboard/resort-bible', icon: MapPin, label: 'Resort Bible' },
  { to: '/dashboard/reporting', icon: BarChart3, label: 'Reporting' },
  { to: '/dashboard/chat', icon: MessageSquare, label: 'Team Chat' },
  { to: '/dashboard/ai-assistant', icon: Sparkles, label: 'AI Assistant' },
]

const bottomItems = [
  { to: '/dashboard/transactions', icon: CreditCard, label: 'Transactions' },
  { to: '/dashboard/documents', icon: FolderOpen, label: 'Documents' },
  { to: '/dashboard/admin', icon: Settings, label: 'Admin' },
  { to: '/help', icon: HelpCircle, label: 'Help' },
]

export function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard'
    }
    return location.pathname.startsWith(path)
  }

  const NavLink = ({
    to,
    icon: Icon,
    label,
  }: {
    to: string
    icon: React.ComponentType<{ className?: string }>
    label: string
  }) => (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200',
        isActive(to)
          ? 'bg-accent/10 text-accent border-l-2 border-accent'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {!collapsed && <span>{label}</span>}
    </Link>
  )

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-border bg-card shadow-card transition-all duration-300 lg:translate-x-0',
          collapsed ? 'w-[72px]' : 'w-64',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Link
            to="/dashboard"
            className={cn(
              'font-serif font-semibold text-foreground',
              collapsed ? 'text-lg' : 'text-xl'
            )}
          >
            {collapsed ? 'L' : 'LuxeFlow'}
          </Link>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              className="hidden lg:flex"
              onClick={() => setCollapsed(!collapsed)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} icon={item.icon} label={item.label} />
              </li>
            ))}
          </ul>
          <Separator className="my-4" />
          <ul className="space-y-1">
            {bottomItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} icon={item.icon} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-30 lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </>
  )
}
