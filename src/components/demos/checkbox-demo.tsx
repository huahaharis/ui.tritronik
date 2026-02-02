"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckboxGroup,
  CheckboxGroupItem,
} from "@/components/ui/checkbox-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CheckboxDemo() {
  const [groupValue, setGroupValue] = useState(["recents"]);

  return (
    <div className="flex flex-col gap-8">
      {/* Basic Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      {/* Optional Checkbox */}
      <div className="flex flex-col gap-2">
        <Label className="text-base font-semibold">Optional Selection</Label>
        <div className="flex items-start space-x-2">
          <Checkbox id="marketing" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="marketing">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new products, features, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Checkbox Group */}
      <div className="flex flex-col gap-3">
        <Label className="text-base font-semibold">Sidebar Display</Label>
        <CheckboxGroup value={groupValue} onValueChange={setGroupValue}>
          <CheckboxGroupItem value="recents" label="Recents" />
          <CheckboxGroupItem value="home" label="Home" />
          <CheckboxGroupItem value="applications" label="Applications" />
          <CheckboxGroupItem value="desktop" label="Desktop" />
          <CheckboxGroupItem value="downloads" label="Downloads" />
          <CheckboxGroupItem value="documents" label="Documents" disabled />
        </CheckboxGroup>
        <div className="text-sm text-muted-foreground mt-2">
          Selected: {groupValue.join(", ")}
        </div>
      </div>
    </div>
  );
}
