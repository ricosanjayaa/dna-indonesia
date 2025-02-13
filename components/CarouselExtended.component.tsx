"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CarouselExtended({ children, className }: { children: React.ReactNode, className?: string }) {

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Carousel className="mb-12" plugins={[ Autoplay({ delay: 5000 }) ]}>
        <CarouselContent>
          {children}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}