import { createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { SidebarProvider } from '@/contexts/sidebar-context'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { ForgotPasswordPage } from '@/pages/forgot-password'
import { DashboardPage } from '@/pages/dashboard'
import { ClientsListPage } from '@/pages/clients-list'
import { ClientDetailPage } from '@/pages/client-detail'
import { ClientCreatePage } from '@/pages/client-create'
import { BookingsListPage } from '@/pages/bookings-list'
import { BookingDetailPage } from '@/pages/booking-detail'
import { BookingWizardPage } from '@/pages/booking-wizard'
import { ResortBiblePage } from '@/pages/resort-bible'
import { ResortDetailPage } from '@/pages/resort-detail'
import { TasksPage } from '@/pages/tasks'
import { CalendarPage } from '@/pages/calendar'
import { ReportingPage } from '@/pages/reporting'
import { ChatPage } from '@/pages/chat'
import { AIAssistantPage } from '@/pages/ai-assistant'
import { AdminPage } from '@/pages/admin'
import { TransactionsPage } from '@/pages/transactions'
import { DocumentsPage } from '@/pages/documents'
import { HelpPage } from '@/pages/help'
import { PrivacyPage } from '@/pages/privacy'
import { TermsPage } from '@/pages/terms'
import { NotFoundPage } from '@/pages/not-found'
import { ErrorPage } from '@/pages/error'

const DashboardWrapper = () => (
  <SidebarProvider>
    <DashboardLayout />
  </SidebarProvider>
)

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/help', element: <HelpPage /> },
  {
    path: '/dashboard',
    element: <DashboardWrapper />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'clients', element: <ClientsListPage /> },
      { path: 'clients/new', element: <ClientCreatePage /> },
      { path: 'clients/:id', element: <ClientDetailPage /> },
      { path: 'bookings', element: <BookingsListPage /> },
      { path: 'bookings/new', element: <BookingWizardPage /> },
      { path: 'bookings/:id', element: <BookingDetailPage /> },
      { path: 'resort-bible', element: <ResortBiblePage /> },
      { path: 'resort-bible/:id', element: <ResortDetailPage /> },
      { path: 'tasks', element: <TasksPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'reporting', element: <ReportingPage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'ai-assistant', element: <AIAssistantPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'transactions', element: <TransactionsPage /> },
      { path: 'documents', element: <DocumentsPage /> },
    ],
  },
  { path: '/404', element: <NotFoundPage /> },
  { path: '/500', element: <ErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
])
