import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const notificationBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-white dark:border-gray-900 text-xs font-medium transition-all opacity-100",
  {
    variants: {
      status: {
        success: "bg-green-500 text-white",
        processing: "bg-blue-500 text-white",
        error: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
        default:
          "bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100",
      },
      size: {
        default: "h-5 min-w-5 px-1.5",
        small: "h-1.5 min-w-1.5 p-0",
      },
    },
    defaultVariants: {
      status: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  count?: number | React.ReactNode;
  showZero?: boolean;
  overflowCount?: number;
  dot?: boolean;
  status?: "success" | "processing" | "error" | "warning" | "default";
  text?: React.ReactNode;
  color?: string;
  offset?: [number, number];
}

function Badge({
  className,
  variant,
  asChild = false,
  count,
  showZero = false,
  overflowCount = 99,
  dot = false,
  status,
  text,
  color,
  offset,
  children,
  style,
  title,
  ...props
}: BadgeProps) {
  const isAntFeature = count !== undefined || dot || status || text;

  if (!isAntFeature) {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        style={style}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  const isStatusMode = !!status || (!!color && !children && !count && !dot);

  if (isStatusMode) {
    const statusColorClass =
      !color && status
        ? {
            success: "bg-green-500",
            processing: "bg-blue-500",
            error: "bg-red-500",
            warning: "bg-yellow-500",
            default: "bg-gray-300 dark:bg-gray-600",
          }[status]
        : "";

    const pingColorClass =
      !color && status
        ? {
            success: "bg-green-500",
            processing: "bg-blue-500",
            error: "bg-red-500",
            warning: "bg-yellow-500",
            default: "bg-gray-300 dark:bg-gray-600",
          }[status]
        : "";

    return (
      <span
        className={cn("inline-flex items-center gap-2", className)}
        style={style}
        {...props}
      >
        <span className="relative flex h-2 w-2">
          {status === "processing" && (
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                pingColorClass,
              )}
              style={{ backgroundColor: color }}
            ></span>
          )}
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              statusColorClass,
            )}
            style={{ backgroundColor: color }}
          ></span>
        </span>
        {text && <span className="text-sm">{text}</span>}
      </span>
    );
  }

  const displayCount =
    typeof count === "number" && count > overflowCount
      ? `${overflowCount}+`
      : count;

  const isHidden =
    !dot && !showZero && (count === 0 || count === null || count === undefined);

  if (children) {
    return (
      <span
        className={cn("relative inline-flex shrink-0", className)}
        style={style}
        {...props}
      >
        {children}
        {!isHidden && (
          <sup
            className={cn(
              "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 transform",
              dot
                ? "h-2 w-2 rounded-full z-auto bg-red-500 border border-white dark:border-gray-900" // Simple dot
                : notificationBadgeVariants({ status: "error" }), // Count badge (red by default)
              "shadow-sm",
            )}
            style={{
              backgroundColor: color,
              right: offset ? -offset[0] : undefined,
              marginTop: offset ? offset[1] : undefined,
            }}
            title={
              title ||
              (typeof count === "string" || typeof count === "number"
                ? String(count)
                : undefined)
            }
          >
            {!dot && displayCount}
          </sup>
        )}
      </span>
    );
  }

  if (!isHidden) {
    return (
      <span
        className={cn(
          notificationBadgeVariants({ status: "default" }),
          className,
        )}
        style={{ backgroundColor: color, ...style }}
        {...props}
      >
        {displayCount}
      </span>
    );
  }

  return null;
}

export { Badge, badgeVariants };
