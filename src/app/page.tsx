import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Services } from "@/sections/services";
import { Trainers } from "@/sections/trainers";
import { Membership } from "@/sections/membership";
import { Testimonials } from "@/sections/testimonials";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Membership />
      <Testimonials />
      <Contact />
    </div>
  );
}
