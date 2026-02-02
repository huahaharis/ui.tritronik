"use client";

import { forwardRef, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
import { useForwardedRef } from "@/lib/use-forwarded-ref";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const ColorPicker = forwardRef<
  HTMLInputElement,
  Omit<ButtonProps, "value" | "onChange" | "onBlur"> & ColorPickerProps
>(
  (
    { disabled, value, onChange, onBlur, name, className, ...props },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [open, setOpen] = useState(false);

    const parsedValue = useMemo(() => {
      return value || "#FFFFFF";
    }, [value]);

    return (
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
          <Button
            {...props}
            className={cn("block", className)}
            name={name}
            onClick={() => {
              setOpen(true);
            }}
            size="icon"
            style={{
              background: parsedValue,
            }}
            variant="outline"
          >
            <div />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <Tabs defaultValue="solid" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger className="flex-1" value="solid">
                Solid
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="gradient">
                Gradient
              </TabsTrigger>
            </TabsList>

            <TabsContent value="solid" className="flex flex-wrap gap-1 mt-0">
              <HexColorPicker color={parsedValue} onChange={onChange} />
              <Input
                maxLength={7}
                onChange={(e) => {
                  onChange(e?.currentTarget?.value);
                }}
                ref={ref}
                value={parsedValue}
              />
            </TabsContent>

            <TabsContent value="gradient" className="mt-0">
              <div className="flex flex-wrap gap-1 mb-2">
                <div
                  className="h-6 w-full rounded-md border text-sm font-medium flex items-center justify-center cursor-pointer"
                  style={{ background: parsedValue }}
                  onClick={() => {
                    void navigator.clipboard.writeText(parsedValue);
                    toast.success("Copied to clipboard");
                  }}
                >
                  Copy
                </div>
              </div>

              <GradientPicker onChange={onChange} value={parsedValue} />

              <Input
                maxLength={255}
                onChange={(e) => {
                  onChange(e?.currentTarget?.value);
                }}
                value={parsedValue}
              />
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    );
  },
);
ColorPicker.displayName = "ColorPicker";

function GradientPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [color1, setColor1] = useState("#FFFFFF");
  const [color2, setColor2] = useState("#000000");

  const handleColorChange = (c1: string, c2: string) => {
    setColor1(c1);
    setColor2(c2);
    onChange(`linear-gradient(to right, ${c1}, ${c2})`);
  };

  return (
    <div className="space-y-4 mb-4">
      <div className="flex gap-2 items-center justify-between">
        <div className="text-xs text-muted-foreground">Start</div>
        <Popover>
          <PopoverTrigger asChild>
            <div
              className="size-6 rounded border cursor-pointer"
              style={{ backgroundColor: color1 }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-none">
            <HexColorPicker
              color={color1}
              onChange={(c) => handleColorChange(c, color2)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className="text-xs text-muted-foreground">End</div>
        <Popover>
          <PopoverTrigger asChild>
            <div
              className="size-6 rounded border cursor-pointer"
              style={{ backgroundColor: color2 }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-none">
            <HexColorPicker
              color={color2}
              onChange={(c) => handleColorChange(color1, c)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export { ColorPicker };
