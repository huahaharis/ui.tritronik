import React, { useEffect, useState, useId } from "react";
import { cn } from "@/lib/utils";

interface MasonryProps {
  children: React.ReactNode;
  columns?: number | { [key: number]: number };
  gap?: number;
  className?: string;
  columnClassName?: string;
}

export function Masonry({
  children,
  columns = 3,
  gap = 4,
  className,
  columnClassName,
}: MasonryProps) {
  const [columnCount, setColumnCount] = useState<number>(3);

  useEffect(() => {
    const updateColumns = () => {
      if (typeof columns === "number") {
        setColumnCount(columns);
      } else {
        const breakpoints = Object.keys(columns)
          .map(Number)
          .sort((a, b) => b - a);
        const width = window.innerWidth;
        let count = columns[breakpoints[breakpoints.length - 1]];

        for (const point of breakpoints) {
          if (width >= point) {
            count = columns[point];
            break;
          }
        }
        setColumnCount(count || 3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [columns]);

  const childrenArray = React.Children.toArray(children);
  const columnItems: React.ReactNode[][] = Array.from(
    { length: columnCount },
    () => [],
  );

  childrenArray.forEach((child, index) => {
    columnItems[index % columnCount].push(child);
  });

  return (
    <div
      className={cn("flex w-full", className)}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {columnItems.map((col, index) => (
        <div
          key={index}
          className={cn("flex flex-col flex-1", columnClassName)}
          style={{ gap: `${gap * 0.25}rem` }}
        >
          {col}
        </div>
      ))}
    </div>
  );
}
