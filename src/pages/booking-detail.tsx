import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import {
  ArrowLeft,
  Send,
  FileText,
  Mail,
  CheckCircle,
} from 'lucide-react'

const mockBooking = {
  id: '1',
  client: 'Sarah Mitchell',
  resort: 'Villa Serenity',
  checkIn: '2025-03-15',
  checkOut: '2025-03-22',
  status: 'confirmed',
  total: 12500,
  commission: 1250,
  payments: [
    { due: '2025-03-01', amount: 6250, status: 'paid' },
    { due: '2025-03-10', amount: 6250, status: 'pending' },
  ],
}

export function BookingDetailPage() {
  const { id } = useParams()

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Booking detail">
        <Link
          to="/dashboard/bookings"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to bookings
        </Link>
      </DashboardHeader>

      <div className="flex flex-wrap gap-4">
        <Button>
          <Send className="mr-2 h-4 w-4" />
          Send proposal
        </Button>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Generate invoice
        </Button>
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Request approval
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Client</span>
              <Link to={`/dashboard/clients/${id}`} className="text-accent hover:underline">
                {mockBooking.client}
              </Link>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Resort</span>
              <span>{mockBooking.resort}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Check-in</span>
              <span>{mockBooking.checkIn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Check-out</span>
              <span>{mockBooking.checkOut}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <Badge>{mockBooking.status}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Rates & Commission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-semibold">€{mockBooking.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Commission</span>
              <span className="font-semibold text-accent">€{mockBooking.commission.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Payment schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockBooking.payments.map((payment, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-medium">€{payment.amount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Due {payment.due}</p>
                </div>
                <Badge variant={payment.status === 'paid' ? 'success' : 'warning'}>
                  {payment.status === 'paid' ? (
                    <>
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Paid
                    </>
                  ) : (
                    'Pending'
                  )}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
