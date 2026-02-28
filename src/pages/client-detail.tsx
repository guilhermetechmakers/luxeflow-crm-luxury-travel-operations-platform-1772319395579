import { useParams, Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import {
  Mail,
  Phone,
  MapPin,
  Plus,
  ArrowLeft,
} from 'lucide-react'

const mockClient = {
  id: '1',
  name: 'Sarah Mitchell',
  email: 'sarah@email.com',
  phone: '+1 555 123 4567',
  vip: true,
  address: '123 Luxury Lane, Beverly Hills, CA',
  tags: ['Family', 'Repeat'],
}

export function ClientDetailPage() {
  const { id } = useParams()

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Client detail">
        <Link to="/dashboard/clients" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to clients
        </Link>
      </DashboardHeader>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl">
                {mockClient.name.split(' ').map((n) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-serif text-2xl font-semibold">{mockClient.name}</h2>
                {mockClient.vip && (
                  <Badge variant="warning">VIP</Badge>
                )}
                {mockClient.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {mockClient.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {mockClient.phone}
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="h-4 w-4" />
                  {mockClient.address}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Link to={`/dashboard/bookings/new?client=${id}`}>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    New booking
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Client profile overview. Total bookings, preferences, and recent activity will appear here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bookings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Bookings</CardTitle>
              <Link to={`/dashboard/bookings/new?client=${id}`}>
                <Button size="sm">New booking</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No bookings yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No documents uploaded.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="preferences" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No preferences set.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="communication" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No communication history.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No billing information.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
