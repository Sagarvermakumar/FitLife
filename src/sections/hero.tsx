"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { BookTrialModal } from "@/components/book-trial-modal";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { Crown, Calendar, Dumbbell, Users, Award } from "lucide-react";
import { metadata } from "@/app/layout";


export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      id="hero"
      className="relative flex items-center justify-center h-[calc(100vh-64px)] w-full overflow-hidden bg-transparent px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.div
          style={{ rotateX, rotateY, transition: "transform 0.1s ease-out" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="mb-3 text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase text-purple-300 font-semibold">
            Transform Your Body & Mind
          </p>

          <h1 className="lg:max-w-screen-lg line-height-2 text-3xl lg:mx-48 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold tracking-tight font-headline text-black-400 [text-shadow:0_0_10px_rgba(255,255,255,0.1)]">
            {siteConfig.tagline}
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg text-neutral-200">
            {siteConfig.description}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
              <Crown className="mr-2 h-5 w-5" />
              Join Now
            </Button>

            <BookTrialModal>
              <Button
                size="lg"
                variant="secondary"
                className="border-2 border-black-400/40 bg-black-500/20 backdrop-blur-sm hover:bg-black-500/30 transition-all w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Trial
              </Button>
            </BookTrialModal>
          </div>

          {/* Gym Stats Section */}
          <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-8 sm:gap-12 text-sm sm:text-base text-gray-300">
            {[
              { icon: Users, number: "500+", label: "Active Members" },
              { icon: Dumbbell, number: "20+", label: "Expert Trainers" },
              { icon: Award, number: "10+", label: "Years of Excellence" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-28 sm:w-auto"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-2 sm:mb-3">
                  <item.icon className="h-6 w-6 text-gray-200" />
                </div>
                <p className="font-extrabold text-xl sm:text-2xl text-white leading-none">{item.number}</p>
                <p className="mt-1 text-gray-400 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
