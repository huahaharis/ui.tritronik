"use client";

import * as React from "react";
import { ColorPicker } from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";

export function ColorPickerDemo() {
  const [color, setColor] = React.useState("#000000");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Label>Basic Picker</Label>
        <div className="flex items-center gap-4">
          <ColorPicker value={color} onChange={setColor} />
          <span className="text-muted-foreground text-sm font-mono">
            {color}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Label>Disabled</Label>
        <ColorPicker value="#cccccc" onChange={() => {}} disabled />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="theme-color">Theme Color</Label>
        <div className="flex w-full items-center gap-2">
          <ColorPicker
            id="theme-color"
            value={color}
            onChange={setColor}
            name="themeColor"
          />
          <div
            className="h-9 w-full rounded-md border p-2 text-sm"
            style={{ backgroundColor: color, color: getContrastColor(color) }}
          >
            Preview Text
          </div>
        </div>
      </div>
    </div>
  );
}

function getContrastColor(hexColor: string) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
