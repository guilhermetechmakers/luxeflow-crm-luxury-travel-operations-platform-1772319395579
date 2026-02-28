import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { ArrowLeft, MapPin, Phone, Mail } from 'lucide-react'

const mockResort = {
  id: '1',
  name: 'Villa Serenity',
  location: 'Santorini, Greece',
  transferTime: 25,
  tags: ['Family', 'Beach', 'Luxury'],
  rooms: [
    { type: 'Ocean Suite', capacity: 2, rate: 850 },
    { type: 'Family Villa', capacity: 6, rate: 1200 },
  ],
  contact: { phone: '+30 22860 12345', email: 'reservations@villaserenity.com' },
}

export function ResortDetailPage() {

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Resort detail">
        <Link
          to="/dashboard/resort-bible"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resort Bible
        </Link>
      </DashboardHeader>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold">{mockResort.name}</h2>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {mockResort.location}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Transfer time: {mockResort.transferTime} min
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {mockResort.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {mockResort.contact.phone}
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {mockResort.contact.email}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rooms">Rooms</TabsTrigger>
          <TabsTrigger value="perks">Perks</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="notes">Internal Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Resort overview and key information for proposals.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rooms" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Room types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Capacity</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Rate (€/night)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockResort.rooms.map((room, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="px-4 py-3">{room.type}</td>
                        <td className="px-4 py-3">{room.capacity}</td>
                        <td className="px-4 py-3">{room.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="perks" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No perks defined.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="media" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Media</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No media uploaded.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contacts" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {mockResort.contact.phone} / {mockResort.contact.email}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notes" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Internal Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No internal notes.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
