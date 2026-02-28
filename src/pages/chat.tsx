import { useState } from 'react'
import { Send, Paperclip, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { cn } from '@/lib/utils'

const mockChannels = [
  { id: '1', name: 'General', unread: 2 },
  { id: '2', name: 'Operations', unread: 0 },
  { id: '3', name: 'Sales', unread: 1 },
]

const mockMessages = [
  { id: '1', user: 'Jane', text: 'Handover for Villa Serenity is ready for review.', time: '10:30' },
  { id: '2', user: 'Mike', text: 'Thanks! I\'ll check the itinerary and confirm with the client.', time: '10:32' },
  { id: '3', user: 'Jane', text: 'Payment link sent to Sarah Mitchell.', time: '10:45' },
]

export function ChatPage() {
  const [message, setMessage] = useState('')
  const [selectedChannel, setSelectedChannel] = useState('1')

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Team Chat" />

      <Card className="flex h-[600px] overflow-hidden">
        <div className="w-64 border-r border-border flex flex-col">
          <div className="p-4 border-b border-border">
            <h3 className="font-medium">Channels</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {mockChannels.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChannel(ch.id)}
                className={cn(
                  'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                  selectedChannel === ch.id
                    ? 'bg-accent/10 text-accent font-medium'
                    : 'hover:bg-muted'
                )}
              >
                <span className="flex items-center justify-between">
                  {ch.name}
                  {ch.unread > 0 && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                      {ch.unread}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <CardHeader className="border-b border-border py-4">
            <CardTitle className="font-serif text-lg">
              {mockChannels.find((c) => c.id === selectedChannel)?.name}
            </CardTitle>
          </CardHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockMessages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {msg.user[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm text-foreground mt-0.5">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" aria-label="Attach">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Link to booking">
                <Link2 className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
