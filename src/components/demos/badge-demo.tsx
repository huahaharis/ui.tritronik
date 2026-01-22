import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex h-40 items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon className="mr-1 h-3 w-3" />
            Verified
          </Badge>

          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            8
          </Badge>

          <Badge
            variant="destructive"
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          >
            99
          </Badge>

          <Badge
            variant="outline"
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          >
            20+
          </Badge>
        </div>
      </div>
    </div>
  )
}
