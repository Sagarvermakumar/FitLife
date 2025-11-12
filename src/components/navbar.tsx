"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Dumbbell } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookTrialModal } from "./book-trial-modal";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="FitLife Hub Home">
    <Dumbbell className="h-8 w-8 text-white" />
    <span className="text-xl font-bold">{siteConfig.name}</span>
  </Link>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-background/50 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="ml-6 hidden items-center gap-2 md:flex">
          <BookTrialModal>
            <Button size="sm">Book a Trial</Button>
          </BookTrialModal>
        </div>
        <div className="ml-auto flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/80 backdrop-blur-xl">
              <div className="p-4">
                <Logo />
                <div className="mt-8 flex flex-col gap-4">
                  {siteConfig.navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <BookTrialModal>
                    <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Book a Trial</Button>
                  </BookTrialModal>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
