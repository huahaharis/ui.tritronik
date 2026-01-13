import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AuthenticationForm() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Two-factor authentication</h2>
        <p className="text-sm text-muted-foreground">Verify via email or phone number</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="https" className="mb-2 block text-sm font-medium">
            URL
          </Label>
          <Input id="https" placeholder="https://" />
        </div>

        <div>
          <Label htmlFor="add-context" className="mb-2 block text-sm font-medium">
            Add context
          </Label>
          <textarea
            id="add-context"
            placeholder="Ask, search, or share anything..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
            rows={4}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="auto" className="rounded border border-input" />
            <label htmlFor="auto" className="text-sm">
              Auto
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="sources" className="rounded border border-input" />
            <label htmlFor="sources" className="text-sm">
              All Sources
            </label>
          </div>
        </div>

        <Button className="w-full">Enable</Button>
      </div>
    </Card>
  )
}
