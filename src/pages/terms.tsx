import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TermsPage() {
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
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p className="text-muted-foreground">
              By using LuxeFlow CRM, you agree to these terms. The service is provided as-is. 
              We reserve the right to modify these terms. Continued use constitutes acceptance.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
