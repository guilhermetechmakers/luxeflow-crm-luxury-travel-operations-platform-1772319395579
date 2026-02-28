import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HelpCircle, Book, Mail } from 'lucide-react'

export function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link to="/" className="font-serif text-2xl font-semibold text-foreground">
            LuxeFlow
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 mx-auto text-accent mb-4" />
          <h1 className="font-serif text-4xl font-semibold">Help & Support</h1>
          <p className="mt-4 text-muted-foreground">
            Find answers and get support for LuxeFlow CRM
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Book className="h-5 w-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse our guides and API documentation.
              </p>
              <Button variant="outline">View docs</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Reach out to our team for assistance.
              </p>
              <Button variant="outline">Contact us</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
