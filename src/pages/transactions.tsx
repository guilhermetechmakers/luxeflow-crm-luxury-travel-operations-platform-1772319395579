import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { Search, Download } from 'lucide-react'

const mockTransactions = [
  { id: '1', date: '2025-03-10', client: 'Sarah Mitchell', amount: 6250, status: 'paid', type: 'Payment' },
  { id: '2', date: '2025-03-12', client: 'James Chen', amount: 3200, status: 'pending', type: 'Invoice' },
  { id: '3', date: '2025-03-08', client: 'Emma Laurent', amount: 4500, status: 'paid', type: 'Payment' },
]

export function TransactionsPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Transactions">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-serif text-xl">Payment & transaction history</CardTitle>
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Client</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx) => (
                  <tr key={tx.id} className="border-t border-border hover:bg-muted/30">
                    <td className="px-4 py-3">{tx.date}</td>
                    <td className="px-4 py-3 font-medium">{tx.client}</td>
                    <td className="px-4 py-3 text-muted-foreground">{tx.type}</td>
                    <td className="px-4 py-3">€{tx.amount.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <Badge variant={tx.status === 'paid' ? 'success' : 'warning'}>
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
