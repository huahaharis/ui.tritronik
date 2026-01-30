import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Search, Mail, Copy, Send, Key } from "lucide-react";

export function InputGroupDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium">Website URL</label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="google.com" />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Amount</label>
        <InputGroup>
          <InputGroupInput placeholder="0.00" type="number" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Search</label>
        <InputGroup>
          <InputGroupAddon>
            <Search className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Type to search..." />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Copy Link</label>
        <InputGroup>
          <InputGroupInput defaultValue="https://ui.shadcn.com" readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="ghost" size="icon-sm">
              <Copy />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email Subscription</label>
        <InputGroup>
          <InputGroupAddon>
            <Mail className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Enter your email" type="email" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="sm">
              <span className="sr-only">Subscribe</span>
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Command Search</label>
        <InputGroup>
          <InputGroupAddon>
            <Search className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search commands..." />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
