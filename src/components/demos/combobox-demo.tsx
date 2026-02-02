"use client";

import * as React from "react";
import { Combobox, ComboboxOption } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";

const frameworks: ComboboxOption[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo() {
  const [value, setValue] = React.useState("");
  const [multiValue, setMultiValue] = React.useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <Label>Framework</Label>
        <Combobox
          options={frameworks}
          value={value}
          onChange={(val) => setValue(val as string)}
          placeholder="Select framework..."
        />
        <div className="text-sm text-muted-foreground">
          Selected: {value || "None"}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Label>Multi-select</Label>
        <Combobox
          options={frameworks}
          value={multiValue}
          onChange={(val) => setMultiValue(val as string[])}
          placeholder="Select frameworks..."
          multiple
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Disabled</Label>
        <Combobox
          options={frameworks}
          value={value}
          onChange={(val) => setValue(val as string)}
          disabled
        />
      </div>
    </div>
  );
}
