import { Badge } from "@/components/ui/badge";
import { Clock, Mail } from "lucide-react";
import React from "react";
import { Switch } from "@/components/ui/switch";

export function BadgeDemo() {
  const [show, setShow] = React.useState(true);

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Basic</h3>
          <div className="flex gap-6 items-center">
            <Badge count={5}>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
            <Badge count={0} showZero>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
            <Badge count={<Clock className="h-3 w-3 text-white" />}>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Standalone</h3>
          <div className="flex gap-4 items-center">
            <Badge count={25} />
            <Badge
              count={4}
              className="bg-white text-slate-500 border-slate-200 shadow-sm"
            />
            <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Overflow Count</h3>
          <div className="flex gap-6 items-center">
            <Badge count={99}>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
            <Badge count={100}>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
            <Badge count={1000} overflowCount={999}>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Red Badge / Dot</h3>
          <div className="flex gap-6 items-center">
            <Badge dot>
              <Mail className="h-6 w-6 text-muted-foreground" />
            </Badge>
            <Badge dot>
              <a href="#">Link something</a>
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Status</h3>
          <div className="flex flex-col gap-2">
            <Badge status="success" text="Success" />
            <Badge status="error" text="Error" />
            <Badge status="default" text="Default" />
            <Badge status="processing" text="Processing" />
            <Badge status="warning" text="Warning" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">
            Classic Variants (Backward Compatibility)
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Dynamic</h3>
          <div className="flex gap-6 items-start">
            <Badge dot={show}>
              <div className="h-10 w-10 bg-muted rounded-md" />
            </Badge>
            <Switch checked={show} onCheckedChange={setShow} />
          </div>
        </div>
      </div>
    </div>
  );
}
