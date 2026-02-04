"use client";

import * as React from "react";
import { Check, Copy, Search } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function IconsDemo() {
  const [query, setQuery] = React.useState("");
  const [copied, setCopied] = React.useState<string | null>(null);

  const icons = React.useMemo(() => {
    const iconEntries = Object.entries(LucideIcons).filter(
      ([name]) =>
        name !== "createLucideIcon" && name !== "icons" && name !== "default",
    );

    const filtered = iconEntries.filter(([name]) =>
      name.toLowerCase().includes(query.toLowerCase()),
    );

    return filtered.slice(0, 72);
  }, [query]);

  const copyToClipboard = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(name);
      toast.success(`Copied ${name} to clipboard`);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search icons..."
          className="pl-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {icons.length > 0 &&
          icons?.map(([name, Icon]) => {
            if (!Icon) return null;

            const LucideIcon = Icon as React.ElementType;

            return (
              <div
                key={name}
                className="group flex flex-col items-center justify-center gap-2 rounded-md border bg-card p-4 text-center shadow-sm transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer"
                onClick={() => copyToClipboard(name)}
              >
                <LucideIcon className="h-8 w-8" />
                <span className="text-xs text-muted-foreground group-hover:text-accent-foreground truncate w-full">
                  {name}
                </span>
              </div>
            );
          })}
      </div>
      {icons.length === 0 && (
        <div className="py-12 text-center text-sm text-muted-foreground">
          No icons found.
        </div>
      )}
    </div>
  );
}
