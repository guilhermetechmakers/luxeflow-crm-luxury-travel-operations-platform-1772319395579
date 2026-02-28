import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Plus, LayoutGrid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'

const statusVariants = {
  quote: 'secondary',
  confirmed: 'default',
  'pre-arrival': 'warning',
  'in-stay': 'default',
  'post-stay': 'secondary',
} as const

const mockBookings = [
  { id: '1', clientId: '1', client: 'Sarah Mitchell', resort: 'Villa Serenity', checkIn: '2025-03-15', status: 'confirmed' as keyof typeof statusVariants },
  { id: '2', clientId: '2', client: 'James Chen', resort: 'Ocean View Resort', checkIn: '2025-03-18', status: 'pre-arrival' as keyof typeof statusVariants },
  { id: '3', clientId: '3', client: 'Emma Laurent', resort: 'Mountain Lodge', checkIn: '2025-03-20', status: 'quote' as keyof typeof statusVariants },
  { id: '4', clientId: '4', client: 'Michael Brown', resort: 'Beach Paradise', checkIn: '2025-03-22', status: 'in-stay' as keyof typeof statusVariants },
]

export function BookingsListPage() {
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'table' | 'board'>('table')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Bookings">
        <Link to="/dashboard/bookings/new" className="ml-auto">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New booking
          </Button>
        </Link>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-serif text-xl">All bookings</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search bookings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                  size="icon-sm"
                  onClick={() => setViewMode('table')}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'board' ? 'secondary' : 'ghost'}
                  size="icon-sm"
                  onClick={() => setViewMode('board')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {(['quote', 'confirmed', 'pre-arrival', 'in-stay', 'post-stay'] as const).map((status) => (
              <Badge
                key={status}
                variant={statusFilter === status ? 'default' : 'outline'}
                className="cursor-pointer capitalize"
                onClick={() => setStatusFilter(statusFilter === status ? null : status)}
              >
                {status.replace('-', ' ')}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'table' ? (
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Client</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Resort</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Check-in</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Status</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium">
                        <Link to={`/dashboard/clients/${booking.clientId}`} className="hover:text-accent">
                          {booking.client}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{booking.resort}</td>
                      <td className="px-4 py-3">{booking.checkIn}</td>
                      <td className="px-4 py-3">
                        <Badge variant={statusVariants[booking.status]}>
                          {booking.status.replace('-', ' ')}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link to={`/dashboard/bookings/${booking.id}`}>
                          <Button variant="ghost" size="sm">View</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mockBookings.map((booking) => (
                <Link key={booking.id} to={`/dashboard/bookings/${booking.id}`}>
                  <Card className="h-full transition-all duration-200 hover:shadow-card-hover hover:border-accent/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{booking.client}</p>
                          <p className="text-sm text-muted-foreground">{booking.resort}</p>
                        </div>
                        <Badge variant={statusVariants[booking.status]}>
                          {booking.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Check-in: {booking.checkIn}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
