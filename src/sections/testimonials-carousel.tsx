"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { placeholderImages } from "@/lib/placeholder-images.json";
import type { SiteConfig } from "@/config/site";
import { useEffect, useRef, useState } from "react";

type Testimonial = SiteConfig["testimonials"][number] & { testimonial: string };

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {


  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<number | null>(null);

  // Auto slide every 500ms
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % total);
    }, 500);
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, [total]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);


  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => {
          const avatarImage = placeholderImages.find(p => p.id === testimonial.avatar);
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <Card className="flex flex-col h-full rounded-2xl">
                  <CardContent className="flex flex-col flex-1 items-center justify-center p-6 text-center">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarImage src={avatarImage?.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage?.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                     <p className="italic text-muted-foreground mb-4 flex-1">"{testimonial.testimonial}"</p>
                    <div className="mt-auto">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious onClick={goPrev} className="hidden sm:inline-flex" />
      <CarouselNext   onClick={goNext} className="hidden sm:inline-flex" />
    </Carousel>
  );
}
