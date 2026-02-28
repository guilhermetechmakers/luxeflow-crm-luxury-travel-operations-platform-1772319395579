import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 42000 },
  { month: 'Feb', revenue: 51000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 62000 },
  { month: 'May', revenue: 58000 },
  { month: 'Jun', revenue: 71000 },
]

const pipelineData = [
  { name: 'Quote', value: 12, color: 'rgb(var(--muted-foreground))' },
  { name: 'Confirmed', value: 28, color: 'rgb(var(--accent))' },
  { name: 'Pre-arrival', value: 15, color: '#f59e0b' },
  { name: 'In-stay', value: 8, color: '#10b981' },
  { name: 'Post-stay', value: 5, color: '#6b7280' },
]

export function ReportingPage() {
  const [dateRange, setDateRange] = useState('6m')

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Reporting & Performance">
        <div className="flex gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="rounded-md border border-input bg-card px-3 py-2 text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="6m">Last 6 months</option>
            <option value="1y">Last year</option>
          </select>
          <Button variant="outline">Export</Button>
          <Button variant="outline" disabled>Schedule report</Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl">Revenue trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    formatter={(value: number) => [`€${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Bar dataKey="revenue" fill="rgb(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl">Pipeline funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pipelineData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {pipelineData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number, name: string) => [value, name]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">KPI summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Total revenue</p>
              <p className="font-serif text-2xl font-semibold">€332,000</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Conversion rate</p>
              <p className="font-serif text-2xl font-semibold">34%</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Avg. booking value</p>
              <p className="font-serif text-2xl font-semibold">€4,850</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Commission earned</p>
              <p className="font-serif text-2xl font-semibold text-accent">€33,200</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
