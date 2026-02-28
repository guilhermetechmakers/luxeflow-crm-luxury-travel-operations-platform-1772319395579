import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { Users, Settings, CreditCard, Shield, Plug } from 'lucide-react'

export function AdminPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Admin Dashboard" />

      <Tabs defaultValue="org" className="w-full">
        <TabsList className="flex-wrap">
          <TabsTrigger value="org">Organization</TabsTrigger>
          <TabsTrigger value="users">Users & Roles</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="audit">Audit logs</TabsTrigger>
        </TabsList>
        <TabsContent value="org" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Organization settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization name</Label>
                <Input id="orgName" defaultValue="Luxe Travel Agency" />
              </div>
              <Button>Save changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Users className="h-5 w-5" />
                User management
              </CardTitle>
              <Button>Invite user</Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Invite users and assign roles (Admin, Agent, Ops, Finance). Configure SSO and 2FA.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Plug className="h-5 w-5" />
                Integrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Configure Stripe, Google Calendar, SendGrid, Algolia, OpenAI. View integration health and logs.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Billing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage subscription, payment methods, and invoices.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audit" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Audit logs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View CRUD audit logs with user metadata. Export for compliance.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
