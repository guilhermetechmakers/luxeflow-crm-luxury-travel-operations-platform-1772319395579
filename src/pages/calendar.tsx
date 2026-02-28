import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { cn } from '@/lib/utils'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const weekDates = ['10', '11', '12', '13', '14', '15', '16']
const mockEvents = [
  { id: '1', title: 'Check-in: Villa Serenity', date: '12', type: 'checkin' },
  { id: '2', title: 'Check-out: Ocean View', date: '12', type: 'checkout' },
  { id: '3', title: 'Payment due: Sarah M.', date: '14', type: 'payment' },
]

export function CalendarPage() {

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Calendar" />

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-serif text-xl">Week view</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon-sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">Mar 10 – 16, 2025</span>
              <Button variant="outline" size="icon-sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" disabled>
                Google Calendar sync
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-8 border-b border-border">
                <div className="p-2" />
                {days.map((day, i) => (
                  <div key={day} className="border-l border-border p-2 text-center text-sm font-medium">
                    {day}
                    <br />
                    <span className="text-muted-foreground">{weekDates[i]}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-8 min-h-[400px]">
                <div className="border-r border-border p-2 text-xs text-muted-foreground">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="h-12">
                      {i}:00
                    </div>
                  ))}
                </div>
                {weekDates.map((date) => (
                  <div key={date} className="border-l border-border">
                    {mockEvents
                      .filter((e) => e.date === date)
                      .map((event) => (
                        <div
                          key={event.id}
                          className={cn(
                            'm-1 rounded px-2 py-1 text-xs',
                            event.type === 'checkin' && 'bg-green-100 text-green-800',
                            event.type === 'checkout' && 'bg-amber-100 text-amber-800',
                            event.type === 'payment' && 'bg-blue-100 text-blue-800'
                          )}
                        >
                          {event.title}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
