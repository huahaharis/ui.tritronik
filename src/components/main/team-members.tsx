import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function TeamMembers() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">No Team Members</h2>
      <p className="mb-6 text-sm text-muted-foreground">Invite your team to collaborate on this project</p>

      <div className="mb-6 flex gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
          A
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-red-600 text-white text-sm font-semibold">
          J
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-teal-600 text-white text-sm font-semibold">
          M
        </div>
      </div>

      <Button className="w-full">+ Invite Members</Button>
    </Card>
  )
}
