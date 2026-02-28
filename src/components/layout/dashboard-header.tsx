import { useState } from 'react'
import { Search, Bell } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface DashboardHeaderProps {
  title?: string
  className?: string
  children?: React.ReactNode
}

export function DashboardHeader({ title, className, children }: DashboardHeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-border bg-card/95 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-card/80',
        className
      )}
    >
      <div className="flex flex-1 items-center gap-4">
        <h1 className="font-serif text-xl font-semibold text-foreground">
          {title ?? 'Dashboard'}
        </h1>
        {children}
      </div>

      <div className="flex items-center gap-4">
        {/* Global search */}
        <div
          className={cn(
            'relative hidden md:block transition-all duration-200',
            searchFocused && 'w-72'
          )}
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search clients, bookings..."
            className="pl-9 w-48 focus:w-72 transition-all duration-200"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>

        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
