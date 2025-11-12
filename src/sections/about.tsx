import Image from "next/image";
import { Heading } from "@/components/heading";
import { placeholderImages } from "@/lib/placeholder-images.json";

export function About() {
  const aboutImage = placeholderImages.find(p => p.id === 'about');

  return (
    <div id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <Heading title="About FitLife Hub" className="text-left mb-6 items-start" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Welcome to FitLife Hub, where your fitness journey begins. We are more than just a gym; we are a community dedicated to helping you achieve your health and wellness goals in a supportive and motivating environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our state-of-the-art facilities are equipped with the latest fitness technology, and our team of expert trainers is passionate about providing personalized guidance. Whether you're a beginner or a seasoned athlete, FitLife Hub is your partner in transformation.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft-lg">
            <Image
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/about/800/600"}
              alt={aboutImage?.description || "Image of gym facilities"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={aboutImage?.imageHint || "fitness equipment"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
