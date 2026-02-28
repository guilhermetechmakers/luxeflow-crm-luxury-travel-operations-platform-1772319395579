import { useState } from 'react'
import { LayoutGrid, List, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'

const mockTasks = [
  { id: '1', title: 'Prepare handover for Villa Serenity', status: 'todo', dueDate: '2025-03-10', assignee: 'Ops' },
  { id: '2', title: 'Send final itinerary to Sarah', status: 'in-progress', dueDate: '2025-03-12', assignee: 'Agent' },
  { id: '3', title: 'Confirm transfer booking', status: 'done', dueDate: '2025-03-08', assignee: 'Ops' },
]

const columns = [
  { id: 'todo', title: 'To do', color: 'bg-muted' },
  { id: 'in-progress', title: 'In progress', color: 'bg-amber-100' },
  { id: 'done', title: 'Done', color: 'bg-green-100' },
]

export function TasksPage() {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban')

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Tasks">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New task
        </Button>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-serif text-xl">Tasks</CardTitle>
            <div className="flex border border-border rounded-md">
              <Button
                variant={viewMode === 'kanban' ? 'secondary' : 'ghost'}
                size="icon-sm"
                onClick={() => setViewMode('kanban')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size="icon-sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'kanban' ? (
            <div className="grid gap-4 md:grid-cols-3">
              {columns.map((col) => (
                <div key={col.id} className="rounded-lg border border-border p-4">
                  <h3 className="font-medium mb-4">{col.title}</h3>
                  <div className="space-y-2">
                    {mockTasks
                      .filter((t) => t.status === col.id)
                      .map((task) => (
                        <div
                          key={task.id}
                          className="rounded-lg border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover"
                        >
                          <p className="font-medium">{task.title}</p>
                          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                            <span>Due {task.dueDate}</span>
                            <Badge variant="secondary">{task.assignee}</Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {mockTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/30 transition-colors"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">Due {task.dueDate}</p>
                  </div>
                  <Badge
                    variant={
                      task.status === 'done'
                        ? 'success'
                        : task.status === 'in-progress'
                        ? 'warning'
                        : 'secondary'
                    }
                  >
                    {task.status.replace('-', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
