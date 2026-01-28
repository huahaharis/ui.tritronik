"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface StepperProps {
  children: React.ReactNode
  defaultValue?: number
  value?: number
  onValueChange?: (value: number) => void
  orientation?: "horizontal" | "vertical"
  className?: string
}

interface StepperContextValue {
  activeStep: number
  setActiveStep: (step: number) => void
  orientation: "horizontal" | "vertical"
  totalSteps: number
  setTotalSteps: React.Dispatch<React.SetStateAction<number>>
}

const StepperContext = React.createContext<StepperContextValue | undefined>(undefined)

function useStepper() {
  const context = React.useContext(StepperContext)
  if (!context) {
    throw new Error("useStepper must be used within a Stepper")
  }
  return context
}

export function Stepper({
  children,
  defaultValue = 0,
  value,
  onValueChange,
  orientation = "horizontal",
  className,
}: StepperProps) {
  const [activeStep, setActiveStepInternal] = React.useState(defaultValue)
  const [totalSteps, setTotalSteps] = React.useState(0)

  const isControlled = value !== undefined
  const currentStep = isControlled ? value : activeStep

  const handleStepChange = React.useCallback(
    (step: number) => {
      if (!isControlled) {
        setActiveStepInternal(step)
      }
      onValueChange?.(step)
    },
    [isControlled, onValueChange]
  )

  return (
    <StepperContext.Provider
      value={{
        activeStep: currentStep,
        setActiveStep: handleStepChange,
        orientation,
        totalSteps,
        setTotalSteps,
      }}
    >
      <div
        className={cn(
          "flex w-full gap-4",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className
        )}
      >
        {children}
      </div>
    </StepperContext.Provider>
  )
}

interface StepperItemContextValue {
  step: number
  isActive: boolean
  isCompleted: boolean
  isDisabled: boolean
}

const StepperItemContext = React.createContext<StepperItemContextValue | undefined>(undefined)

function useStepperItem() {
  const context = React.useContext(StepperItemContext)
  if (!context) {
    throw new Error("useStepperItem must be used within a StepperItem")
  }
  return context
}

interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number
  children: React.ReactNode
}

export function StepperItem({ step, children, className, ...props }: StepperItemProps) {
  const { activeStep, orientation } = useStepper()
  const isActive = step === activeStep
  const isCompleted = step < activeStep
  const isDisabled = step > activeStep

  return (
    <StepperItemContext.Provider value={{ step, isActive, isCompleted, isDisabled }}>
        <div
        className={cn(
            "group flex flex-1 gap-2",
            orientation === "vertical" ? "flex-col" : "flex-col sm:flex-row sm:items-center",
            isActive ? "pointer-events-auto" : "pointer-events-none opacity-50",
            (isActive || isCompleted) && "opacity-100 pointer-events-auto",
            className
        )}
        {...props}
        >
        {children}
        </div>
    </StepperItemContext.Provider>
  )
}

interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  asChild?: boolean
}

export function StepperTrigger({ children, className, ...props }: StepperTriggerProps) {
  const { setActiveStep } = useStepper()
  const { step, isDisabled } = useStepperItem()

  return (
    <button
      onClick={() => !isDisabled && setActiveStep(step)}
      className={cn(
        "flex items-center gap-3 rounded-md px-2 py-1 text-left text-sm font-medium transition-colors hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    asChild?: boolean
}

export function StepperIndicator({ children, className, ...props }: StepperIndicatorProps) {
    const { step, isActive, isCompleted } = useStepperItem();
    
    return (
        <div 
            data-state={isActive ? "active" : isCompleted ? "completed" : "inactive"}
            className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary transition-colors",
                "data-[state=completed]:bg-primary data-[state=completed]:text-primary-foreground",
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                className
            )}
            {...props}
        >
            {/* Default content if no children provided: Check icon if completed, step number otherwise */}
            {children || (isCompleted ? <CheckIcon className="h-4 w-4" /> : step)}
        </div>
    )
}

export function StepperTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-sm font-semibold whitespace-nowrap", className)} {...props}>
      {children}
    </h3>
  )
}

export function StepperDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

export function StepperSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const { orientation } = useStepper()
    return (
        <div
            className={cn(
                "flex-1 bg-muted",
                orientation === "horizontal" ? "h-[2px] w-full min-w-[2rem]" : "w-[2px] h-full min-h-[2rem]",
                className
            )}
            {...props}
        />
    )
}
