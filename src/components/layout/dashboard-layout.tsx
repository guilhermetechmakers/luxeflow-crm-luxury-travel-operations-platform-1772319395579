import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'
import { useSidebar } from '@/contexts/sidebar-context'
import { cn } from '@/lib/utils'

export function DashboardLayout() {
  const { collapsed } = useSidebar()
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main
        className={cn(
          'min-h-screen transition-all duration-300',
          'pl-0 pt-16 lg:pt-0',
          collapsed ? 'lg:pl-[72px]' : 'lg:pl-64'
        )}
      >
        <div className="container mx-auto p-4 lg:p-6 lg:pl-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
