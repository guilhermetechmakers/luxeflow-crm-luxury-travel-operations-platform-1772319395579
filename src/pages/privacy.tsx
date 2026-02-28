import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivacyPage() {
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
            <CardTitle className="font-serif text-2xl">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p className="text-muted-foreground">
              LuxeFlow CRM respects your privacy. We collect and process data in accordance with GDPR and applicable regulations. 
              Personal data is encrypted at rest and in transit. We do not sell your data to third parties.
            </p>
            <p className="text-muted-foreground mt-4">
              For data deletion requests or questions, contact privacy@luxeflow.com.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
