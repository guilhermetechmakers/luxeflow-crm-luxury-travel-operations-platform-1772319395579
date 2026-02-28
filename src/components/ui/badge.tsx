import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'destructive'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        {
          default: 'bg-accent text-accent-foreground',
          secondary: 'bg-muted text-muted-foreground',
          outline: 'border border-border',
          success: 'bg-green-100 text-green-800',
          warning: 'bg-amber-100 text-amber-800',
          destructive: 'bg-red-100 text-red-800',
        }[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
