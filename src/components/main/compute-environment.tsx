import { Card } from "@/components/ui/card"

export function ComputeEnvironment() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">Compute Environment</h2>

      <div className="space-y-4">
        <div>
          <p className="mb-3 text-sm font-medium">Kubernetes</p>
          <p className="text-sm text-muted-foreground">
            Run GPU workloads on a Kubernetes configured cluster. This is the default.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Virtual Machine</p>
          <p className="text-sm text-muted-foreground">
            Access a VM configured cluster to run workloads. (Coming soon)
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Number of GPUs</span>
            <div className="flex items-center gap-2">
              <button className="rounded border border-input px-2 py-1 text-sm">-</button>
              <span>8</span>
              <button className="rounded border border-input px-2 py-1 text-sm">+</button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Wallpaper Tinting</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted">
              <span className="inline-block h-4 w-4 translate-x-5 transform rounded-full bg-primary transition" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
