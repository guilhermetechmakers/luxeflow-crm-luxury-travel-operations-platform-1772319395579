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

const signupSchema = z
  .object({
    orgName: z.string().min(2, 'Organization name is required'),
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    tos: z.boolean().refine((v) => v === true, 'You must accept the terms'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type SignupForm = z.infer<typeof signupSchema>

export function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (_data: SignupForm) => {
    // TODO: Integrate with Supabase Auth + create org
    await new Promise((r) => setTimeout(r, 500))
    window.location.href = '/dashboard'
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
              Create your organization
            </CardTitle>
            <CardDescription>
              Start your free trial. No credit card required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization name</Label>
                <Input
                  id="orgName"
                  placeholder="Your Agency"
                  {...register('orgName')}
                  className={cn(errors.orgName && 'border-red-500')}
                />
                {errors.orgName && (
                  <p className="text-sm text-red-600">{errors.orgName.message}</p>
                )}
              </div>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register('password')}
                  className={cn(errors.password && 'border-red-500')}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  {...register('confirmPassword')}
                  className={cn(errors.confirmPassword && 'border-red-500')}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  {...register('tos')}
                  className="mt-1 rounded border-input"
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="text-accent hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.tos && (
                <p className="text-sm text-red-600">{errors.tos.message}</p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account...' : 'Create account'}
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
