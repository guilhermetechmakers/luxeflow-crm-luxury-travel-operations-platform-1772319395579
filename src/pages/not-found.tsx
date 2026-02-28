import { Link } from 'react-router-dom'
import { FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <FileQuestion className="h-24 w-24 text-muted-foreground mb-6" />
      <h1 className="font-serif text-4xl font-semibold text-foreground">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
      <Link to="/" className="mt-8">
        <Button>Go home</Button>
      </Link>
    </div>
  )
}
