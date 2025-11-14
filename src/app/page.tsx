import About from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Membership } from "@/sections/membership";
import { Services } from "@/sections/services";
import { Testimonials } from "@/sections/testimonials";
import { Trainers } from "@/sections/trainers";
import TransformationStories from "@/sections/transformation-history";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Trainers />
      <TransformationStories/>
      <Membership />
      <Testimonials />
      <Contact />
    </div>
  );
}
