import { useState } from 'react'
import { Send, Sparkles, FileText, CheckSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { cn } from '@/lib/utils'

const contextOptions = [
  { id: 'resort', label: 'Resort Bible' },
  { id: 'client', label: 'Client' },
  { id: 'booking', label: 'Booking' },
]

export function AIAssistantPage() {
  const [message, setMessage] = useState('')
  const [context, setContext] = useState<string[]>(['resort'])
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])

  const toggleContext = (id: string) => {
    setContext((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const handleSend = () => {
    if (!message.trim()) return
    setMessages((prev) => [...prev, { role: 'user', content: message }])
    setMessage('')
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Based on your Resort Bible and client preferences, I recommend Villa Serenity and Ocean View Resort. Both offer family-friendly amenities and transfer times under 30 minutes. Would you like me to draft a proposal?',
        },
      ])
    }, 1000)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="AI Assistant">
        <Badge variant="secondary">Usage: 42 / 100 requests</Badge>
      </DashboardHeader>

      <Card className="flex h-[calc(100vh-12rem)] flex-col">
        <CardHeader className="border-b border-border">
          <CardTitle className="font-serif text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            AI Assistant
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Get resort recommendations, draft itineraries, and create tasks from natural language.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-sm text-muted-foreground">Context:</span>
            {contextOptions.map((opt) => (
              <Badge
                key={opt.id}
                variant={context.includes(opt.id) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => toggleContext(opt.id)}
              >
                {opt.label}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col overflow-hidden p-0">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-12">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent/50" />
                <p className="font-medium">Ask me anything</p>
                <p className="text-sm mt-1">
                  e.g. &quot;Suggest 5 resorts for family with toddlers, &lt;30 min transfer&quot;
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setMessage('Suggest 5 resorts for family with toddlers, <30 min transfer')
                    }
                  >
                    Resort recommendations
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMessage('Draft a 1-page proposal summary')}
                  >
                    Draft proposal
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMessage('Create a pre-arrival task')}
                  >
                    Create task
                  </Button>
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'flex',
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg px-4 py-2',
                    msg.role === 'user'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted'
                  )}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about resorts, clients, or request a draft..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 flex gap-2">
              <Button variant="ghost" size="sm">
                <FileText className="mr-1 h-3 w-3" />
                Draft email
              </Button>
              <Button variant="ghost" size="sm">
                <CheckSquare className="mr-1 h-3 w-3" />
                Create task
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
