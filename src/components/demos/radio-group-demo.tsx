"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <div className="w-full">
      <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
        <div>
          <RadioGroupItem value="card" id="card" className="peer sr-only" />
          <Label
            htmlFor="card"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Card
          </Label>
        </div>
        <div>
          <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
          <Label
            htmlFor="paypal"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Paypal
          </Label>
        </div>
        <div>
          <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
          <Label
            htmlFor="apple"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-8s-3-2.66-3-5.5C19 5.38 21 3.5 21 3.5c-1.92.42-3.48 1.5-4.5 2.05-1.02-.56-2.58-1.63-4.5-2.05L12 3.5C21 3.5 12 20.94 12 20.94z" />
            </svg>
            Apple
          </Label>
        </div>
      </RadioGroup>
      <div className="mt-6 space-y-4">
        <h4 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Select a plan
        </h4>
        <RadioGroup defaultValue="starter" className="grid gap-2">
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="starter" id="r1" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="r1" className="font-semibold cursor-pointer">
                  Starter
                </Label>
                <p className="text-sm text-muted-foreground">
                  Perfect for small teams and individuals.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium">$0</div>
          </div>
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pro" id="r2" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="r2" className="font-semibold cursor-pointer">
                  Pro
                </Label>
                <p className="text-sm text-muted-foreground">
                  Unlock mostly used features for growing business.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium">$29</div>
          </div>
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enterprise" id="r3" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="r3" className="font-semibold cursor-pointer">
                  Enterprise
                </Label>
                <p className="text-sm text-muted-foreground">
                  For large scale organizations and enterprise needs.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium">Custom</div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export function RadioGroupDisabledDemo() {
  return (
    <div className="flex items-center justify-center">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="r_option_1" />
          <Label htmlFor="r_option_1">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="r_disabled_1" disabled />
          <Label htmlFor="r_disabled_1">Option Two</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
