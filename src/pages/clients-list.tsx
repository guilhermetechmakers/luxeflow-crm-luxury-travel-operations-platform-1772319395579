import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'

const mockClients = [
  { id: '1', name: 'Sarah Mitchell', email: 'sarah@email.com', vip: true, tags: ['Family'] },
  { id: '2', name: 'James Chen', email: 'james@email.com', vip: false, tags: ['Corporate'] },
  { id: '3', name: 'Emma Laurent', email: 'emma@email.com', vip: true, tags: ['Honeymoon'] },
  { id: '4', name: 'Michael Brown', email: 'mb@email.com', vip: false, tags: ['Family'] },
  { id: '5', name: 'Olivia Rossi', email: 'olivia@email.com', vip: true, tags: ['VIP'] },
]

export function ClientsListPage() {
  const [search, setSearch] = useState('')
  const [filterChips, setFilterChips] = useState<string[]>([])

  const toggleFilter = (chip: string) => {
    setFilterChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Clients">
        <Link to="/dashboard/clients/new" className="ml-auto">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New client
          </Button>
        </Link>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-serif text-xl">All clients</CardTitle>
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['VIP', 'Family', 'Corporate', 'Honeymoon'].map((chip) => (
              <Badge
                key={chip}
                variant={filterChips.includes(chip) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => toggleFilter(chip)}
              >
                {chip}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground hidden md:table-cell">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground hidden lg:table-cell">
                    Tags
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockClients.map((client) => (
                  <tr
                    key={client.id}
                    className="border-t border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <Link
                        to={`/dashboard/clients/${client.id}`}
                        className="font-medium text-foreground hover:text-accent"
                      >
                        {client.name}
                      </Link>
                      {client.vip && (
                        <Badge variant="warning" className="ml-2 text-xs">
                          VIP
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {client.email}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <div className="flex gap-1">
                        {client.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link to={`/dashboard/clients/${client.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
