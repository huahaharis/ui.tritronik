"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CheckboxGroupContextValue {
  value: string[];
  onValueChange: (value: string[]) => void;
}

const CheckboxGroupContext = React.createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

function useCheckboxGroup() {
  const context = React.useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error("useCheckboxGroup must be used within a CheckboxGroup");
  }
  return context;
}

interface CheckboxGroupProps extends React.ComponentProps<"div"> {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

function CheckboxGroup({
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue || [],
  );

  const finalValue = value !== undefined ? value : internalValue;
  const finalOnValueChange = (newValue: string[]) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <CheckboxGroupContext.Provider
      value={{ value: finalValue, onValueChange: finalOnValueChange }}
    >
      <div className={cn("grid gap-2", className)} {...props}>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
}

interface CheckboxGroupItemProps extends React.ComponentProps<typeof Checkbox> {
  value: string;
  label?: React.ReactNode;
}

function CheckboxGroupItem({
  value,
  label,
  className,
  ...props
}: CheckboxGroupItemProps) {
  const { value: groupValue, onValueChange } = useCheckboxGroup();
  const checked = groupValue.includes(value);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={value}
        value={value}
        checked={checked}
        onCheckedChange={(checked) => {
          if (checked) {
            onValueChange([...groupValue, value]);
          } else {
            onValueChange(groupValue.filter((v) => v !== value));
          }
        }}
        className={className}
        {...props}
      />
      {label && (
        <Label
          htmlFor={value}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      )}
    </div>
  );
}

export { CheckboxGroup, CheckboxGroupItem };
