import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PaymentForm() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">Payment Method</h2>

      <form className="space-y-6">
        <div>
          <p className="mb-4 text-sm text-muted-foreground">All transactions are secure and encrypted</p>
        </div>

        <div>
          <Label className="mb-2 block text-sm font-medium">Name on Card</Label>
          <Input placeholder="John Doe" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="mb-2 block text-sm font-medium">Card Number</Label>
            <Input placeholder="1234 5678 9012 3456" />
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium">CVV</Label>
            <Input placeholder="123" maxLength={3} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="mb-2 block text-sm font-medium">Month</Label>
            <Input placeholder="MM" />
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium">Year</Label>
            <Input placeholder="YYYY" />
          </div>
        </div>

        <div>
          <Label className="mb-4 block text-sm font-medium">Billing Address</Label>
          <p className="mb-4 text-sm text-muted-foreground">The billing address associated with your payment method</p>
          <Input placeholder="Street address" className="mb-3" />
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border border-input" />
            <span className="text-sm">Same as shipping address</span>
          </label>
        </div>

        <div className="flex gap-3 pt-4">
          <Button className="flex-1">Submit</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}
