"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import {before1,after1} from "@/assets/index.js"

const transformations = [

  {
    before: before1,
    after: after1,
    name: "Amit Patel",
    rating: 4,
  },

];

export default function TransformationStories() {
  return (
    <section className="py-20 bg-black text-white" id="transformations">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">
          Transformation <span className="text-red-500">Stories</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          See what our members have accomplished with dedication, consistent training,
          and the support of the Radhe's Fitness community.
        </p>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {transformations.map((t, i) => (
              <CarouselItem key={i}>
                <Card className="bg-zinc-900 border border-zinc-800 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                      {/* Before Image */}
                      <div className="relative rounded-lg overflow-hidden w-36 sm:w-48 md:w-56">
                        <span className="absolute top-2 left-2 text-xs font-bold bg-gray-700 text-white px-2 py-1 rounded">
                          BEFORE
                        </span>
                        <Image
                          src={t.before}
                          alt="Before"
                          width={200}
                          height={300}
                          className="object-cover w-full h-auto"
                        />
                      </div>
                      {/* After Image */}
                      <div className="relative rounded-lg overflow-hidden w-36 sm:w-48 md:w-56">
                        <span className="absolute top-2 left-2 text-xs font-bold bg-red-600 text-white px-2 py-1 rounded">
                          AFTER
                        </span>
                        <Image
                          src={t.after}
                          alt="After"
                          width={200}
                          height={300}
                          className="object-cover w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-2">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="h-5 w-5 text-red-500 fill-red-500" />
                      ))}
                    </div>

                    <p className="text-lg font-semibold">{t.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center gap-4 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
