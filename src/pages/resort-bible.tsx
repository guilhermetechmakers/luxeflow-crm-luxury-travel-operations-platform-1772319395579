import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'

const mockResorts = [
  { id: '1', name: 'Villa Serenity', location: 'Santorini, Greece', transferTime: 25, tags: ['Family', 'Beach', 'Luxury'] },
  { id: '2', name: 'Ocean View Resort', location: 'Amalfi Coast, Italy', transferTime: 45, tags: ['Honeymoon', 'Sea view'] },
  { id: '3', name: 'Mountain Lodge', location: 'Swiss Alps', transferTime: 60, tags: ['Ski', 'Family'] },
  { id: '4', name: 'Beach Paradise', location: 'Maldives', transferTime: 20, tags: ['Overwater', 'Luxury'] },
]

export function ResortBiblePage() {
  const [search, setSearch] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (f: string) => {
    setSelectedFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Resort Bible" />

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-serif text-xl">Resort directory</CardTitle>
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search resorts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-sm text-muted-foreground mr-2">Filters:</span>
            {['Family', 'Honeymoon', 'Beach', 'Ski', 'Luxury', 'Transfer <30min'].map((f) => (
              <Badge
                key={f}
                variant={selectedFilters.includes(f) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => toggleFilter(f)}
              >
                {f}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockResorts.map((resort) => (
              <Link key={resort.id} to={`/dashboard/resort-bible/${resort.id}`}>
                <Card className="h-full transition-all duration-200 hover:shadow-card-hover hover:border-accent/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif font-semibold">{resort.name}</h3>
                        <p className="text-sm text-muted-foreground">{resort.location}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Transfer: {resort.transferTime} min
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {resort.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
