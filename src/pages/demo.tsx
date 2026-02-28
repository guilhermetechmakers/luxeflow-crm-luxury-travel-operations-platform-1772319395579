import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

const demoSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().optional(),
})

type DemoForm = z.infer<typeof demoSchema>

export function DemoPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoForm>({
    resolver: zodResolver(demoSchema),
  })

  const onSubmit = async (_data: DemoForm) => {
    // TODO: Integrate with Supabase Edge Function or API
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md text-center">
          <Link
            to="/"
            className="mb-8 inline-block font-serif text-2xl font-semibold text-foreground hover:text-accent transition-colors"
          >
            LuxeFlow
          </Link>
          <Card className="shadow-card-hover">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                Thank you for your interest
              </CardTitle>
              <CardDescription>
                We&apos;ll be in touch within 24 hours to schedule your demo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Return to home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-8 inline-block font-serif text-2xl font-semibold text-foreground hover:text-accent transition-colors"
        >
          LuxeFlow
        </Link>
        <Card className="shadow-card-hover">
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-2xl">
              Request a demo
            </CardTitle>
            <CardDescription>
              See how LuxeFlow can transform your luxury travel operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  placeholder="Jane Smith"
                  {...register('name')}
                  className={cn(errors.name && 'border-red-500')}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@agency.com"
                  {...register('email')}
                  className={cn(errors.email && 'border-red-500')}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Your Agency"
                  {...register('company')}
                  className={cn(errors.company && 'border-red-500')}
                />
                {errors.company && (
                  <p className="text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (optional)</Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                  {...register('message')}
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request demo'}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-accent hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
