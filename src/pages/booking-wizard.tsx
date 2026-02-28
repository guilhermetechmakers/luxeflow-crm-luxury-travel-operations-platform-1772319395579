import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { cn } from '@/lib/utils'

const steps = [
  'Client',
  'Resort & room',
  'Rates & commission',
  'Payment schedule',
  'Itinerary',
  'Attachments',
  'Review',
]

export function BookingWizardPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="New booking">
        <Link
          to="/dashboard/bookings"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Cancel
        </Link>
      </DashboardHeader>

      {/* Stepper */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center shrink-0">
            <button
              onClick={() => setCurrentStep(i)}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                currentStep === i
                  ? 'bg-accent text-accent-foreground'
                  : currentStep > i
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {step}
            </button>
            {i < steps.length - 1 && (
              <div className="mx-1 h-px w-4 bg-border" />
            )}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif">{steps[currentStep]}</CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 0 && (
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="client">Select client</Label>
                <Input id="client" placeholder="Search or create client..." />
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <p className="text-muted-foreground">
              Use Resort Bible search to find resort and room. Transfer time shown from Resort record.
            </p>
          )}
          {currentStep > 1 && currentStep < steps.length - 1 && (
            <p className="text-muted-foreground">
              Configure {steps[currentStep].toLowerCase()}.
            </p>
          )}
          {currentStep === steps.length - 1 && (
            <p className="text-muted-foreground">
              Review and save as Quote or Confirmed.
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button onClick={() => setCurrentStep(currentStep + 1)}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={() => navigate('/dashboard/bookings')}>
            <Check className="mr-2 h-4 w-4" />
            Save booking
          </Button>
        )}
      </div>
    </div>
  )
}
