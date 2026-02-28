import { Link } from 'react-router-dom'
import {
  Users,
  FileText,
  CheckSquare,
  CreditCard,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { cn } from '@/lib/utils'

const commandCenterItems = [
  { label: 'Check-ins (7 days)', count: 3, to: '/dashboard/bookings', variant: 'warning' as const },
  { label: 'Check-outs (7 days)', count: 5, to: '/dashboard/bookings', variant: 'default' as const },
  { label: 'Due payments', count: 2, to: '/dashboard/transactions', variant: 'destructive' as const },
  { label: 'Overdue tasks', count: 1, to: '/dashboard/tasks', variant: 'destructive' as const },
  { label: 'Pending approvals', count: 0, to: '/dashboard/bookings', variant: 'secondary' as const },
]

const revenueData = [
  { month: 'Jan', revenue: 42000 },
  { month: 'Feb', revenue: 51000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 62000 },
  { month: 'May', revenue: 58000 },
  { month: 'Jun', revenue: 71000 },
]

export function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <DashboardHeader title="Dashboard" />

      {/* Command Center */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Operations Command Center</CardTitle>
          <p className="text-sm text-muted-foreground">
            Time-critical items for the next 7 days
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {commandCenterItems.map((item) => (
              <Link key={item.label} to={item.to}>
                <div
                  className={cn(
                    'flex flex-col rounded-lg border border-border p-4 transition-all duration-200 hover:shadow-card-hover hover:border-accent/30'
                  )}
                >
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-serif text-2xl font-semibold">{item.count}</span>
                    <Badge variant={item.count > 0 ? item.variant : 'secondary'}>
                      {item.count > 0 ? 'Action' : 'Clear'}
                    </Badge>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* KPIs & Chart */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Revenue snapshot</CardTitle>
              <p className="text-sm text-muted-foreground">
                Last 6 months
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} />
                    <Tooltip
                      formatter={(value: number) => [`€${value.toLocaleString()}`, 'Revenue']}
                      contentStyle={{ borderRadius: '8px', border: '1px solid rgb(var(--border))' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="rgb(var(--accent))"
                      fill="url(#revenueGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-lg">Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/dashboard/bookings/new">
                <Button variant="outline" className="w-full justify-between">
                  New booking
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard/clients/new">
                <Button variant="outline" className="w-full justify-between">
                  New client
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard/ai-assistant">
                <Button variant="outline" className="w-full justify-between">
                  AI Assistant
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-lg">Tasks summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Due today</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">This week</span>
                  <span className="font-medium">8</span>
                </div>
                <Link to="/dashboard/tasks">
                  <Button variant="link" className="p-0 h-auto text-accent">
                    View all tasks →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Active clients"
          value="124"
          trend="+12%"
          icon={Users}
          to="/dashboard/clients"
        />
        <KpiCard
          title="Open bookings"
          value="47"
          trend="+5%"
          icon={FileText}
          to="/dashboard/bookings"
        />
        <KpiCard
          title="Tasks completed"
          value="89"
          trend="+18%"
          icon={CheckSquare}
          to="/dashboard/tasks"
        />
        <KpiCard
          title="Revenue (MTD)"
          value="€72.4k"
          trend="+8%"
          icon={CreditCard}
          to="/dashboard/reporting"
        />
      </div>
    </div>
  )
}

function KpiCard({
  title,
  value,
  trend,
  icon: Icon,
  to,
}: {
  title: string
  value: string
  trend: string
  icon: React.ComponentType<{ className?: string }>
  to: string
}) {
  return (
    <Link to={to}>
      <Card className="transition-all duration-200 hover:shadow-card-hover hover:border-accent/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <Icon className="h-8 w-8 text-accent" />
            <span className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              {trend}
            </span>
          </div>
          <p className="mt-2 font-serif text-2xl font-semibold">{value}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
