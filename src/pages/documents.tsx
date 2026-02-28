import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { FolderOpen, Upload } from 'lucide-react'

export function DocumentsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader title="Documents & Media">
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Media library</CardTitle>
          <p className="text-sm text-muted-foreground">
            Folder/tag navigation, drag & drop upload, OCR status, secure share links
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-16 text-center">
            <FolderOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-2">No documents yet</p>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop files here or click to upload. Store passports, contracts, and media securely.
            </p>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload files
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
