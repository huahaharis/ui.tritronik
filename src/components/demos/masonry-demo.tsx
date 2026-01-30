"use client";

import { Masonry } from "@/components/ui/masonry";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo } from "react";

export function MasonryDemo() {
  const items = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const height = 200 + ((i * 75 + 10) % 301);

      return {
        id: i,
        title: `Gallery Item ${i + 1}`,
        description: `A random description for item ${i + 1} with varying height.`,
        height: height,
        image: `https://picsum.photos/600/${height}?random=${i}`,
      };
    });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Masonry
        columns={{
          640: 1,
          768: 2,
          1024: 3,
        }}
        gap={6}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-full overflow-hidden rounded-t-lg bg-muted">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
                style={{ height: "auto", minHeight: item.height }}
                loading="lazy"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-medium tracking-tight">
                {item.title}
              </CardTitle>
              <CardDescription className="text-sm line-clamp-2">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Masonry>
    </div>
  );
}
