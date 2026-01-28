"use client"

import * as React from "react"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from "@/components/ui/stepper"

export function StepperDemo() {
  const [activeStep, setActiveStep] = React.useState(1)

  return (
    <div className="flex w-full flex-col gap-8 p-4">
      <Stepper value={activeStep} onValueChange={setActiveStep}>
        
        <StepperItem step={1} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <StepperIndicator />
                    <div className="flex flex-col items-start">
                        <StepperTitle>Account</StepperTitle>
                        <StepperDescription>Enter details</StepperDescription>
                    </div>
                </div>
            </StepperTrigger>
            <StepperSeparator className="mt-4" />
        </StepperItem>

        <StepperItem step={2} className="flex-1">
             <StepperTrigger className="w-full flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <StepperIndicator />
                    <div className="flex flex-col items-start">
                        <StepperTitle>Address</StepperTitle>
                        <StepperDescription>Shipping info</StepperDescription>
                    </div>
                </div>
            </StepperTrigger>
             <StepperSeparator className="mt-4" />
        </StepperItem>

        <StepperItem step={3} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                     <StepperIndicator />
                    <div className="flex flex-col items-start">
                        <StepperTitle>Confirm</StepperTitle>
                        <StepperDescription>Review order</StepperDescription>
                    </div>
                </div>
            </StepperTrigger>
        </StepperItem>


      </Stepper>

      <div className="flex w-full flex-col gap-4 rounded-lg border p-6">
        <div className="text-xl font-semibold">
           {activeStep === 1 && "Step 1: Account Details"}
           {activeStep === 2 && "Step 2: Shipping Address"}
           {activeStep === 3 && "Step 3: Confirmation"}
        </div>
        <div className="text-muted-foreground">
           {activeStep === 1 && "Please enter your account information below."}
           {activeStep === 2 && "Where should we send your package?"}
           {activeStep === 3 && "Please review your order before paying."}
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
            <Button 
                variant="outline" 
                onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
            >
                Back
            </Button>
            <Button 
                onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
                disabled={activeStep === 3}
            >
                Next
            </Button>
        </div>
      </div>
    </div>
  )
}
