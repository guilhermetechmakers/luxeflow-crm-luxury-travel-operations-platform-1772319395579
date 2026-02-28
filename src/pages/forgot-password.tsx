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

const schema = z.object({
  email: z.string().email('Invalid email address'),
})

type FormData = z.infer<typeof schema>

export function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 500))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-8 inline-block font-serif text-2xl font-semibold text-foreground hover:text-accent transition-colors"
        >
          LuxeFlow
        </Link>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-2xl">Reset password</CardTitle>
            <CardDescription>
              Enter your email and we&apos;ll send you a reset link
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitSuccessful ? (
              <p className="text-center text-muted-foreground">
                Check your email for the reset link.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send reset link'}
                </Button>
              </form>
            )}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              <Link to="/login" className="text-accent hover:underline">
                Back to sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
