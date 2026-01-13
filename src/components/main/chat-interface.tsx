import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ChatInterface() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Processing your request</h2>
        <div className="h-2 w-2 rounded-full bg-green-500" />
      </div>

      <div className="space-y-4">
        <div className="rounded-md bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            Please wait while we process your request. Do not refresh the page.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <button
              key={i}
              className="rounded border border-input py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {i}
            </button>
          ))}
        </div>

        <div className="space-y-2 pt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border border-input" />
            <span className="text-sm">I agree to the terms and conditions</span>
          </label>
        </div>

        <div className="space-y-3 pt-4">
          <p className="text-sm font-medium">How did you hear about us?</p>
          <div className="space-y-2">
            {["Social Media", "Search Engine"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border border-input" />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>Referral</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          Cancel
        </Button>
      </div>
    </Card>
  )
}
