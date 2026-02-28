import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <AlertTriangle className="h-24 w-24 text-amber-500 mb-6" />
      <h1 className="font-serif text-4xl font-semibold text-foreground">500</h1>
      <p className="mt-2 text-muted-foreground">Something went wrong</p>
      <Link to="/" className="mt-8">
        <Button>Go home</Button>
      </Link>
    </div>
  )
}
