import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Instagram, Twitter } from "lucide-react";
import { placeholderImages } from "@/lib/placeholder-images.json";

export function Trainers() {
  return (
    <section id="trainers" className="py-16 md:py-24">
      <div className="container">
        <Heading
          title="Meet Our Expert Trainers"
          subtitle="Our trainers are certified professionals dedicated to your success."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.trainers.map((trainer) => {
            const trainerImage = placeholderImages.find(p => p.id === trainer.imageUrl);
            return (
              <Card key={trainer.id} className="overflow-hidden text-center transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-2">
                <div className="relative h-64 w-full">
                  <Image
                    src={trainerImage?.imageUrl || `https://picsum.photos/seed/${trainer.id}/400/400`}
                    alt={`Photo of ${trainer.name}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={trainerImage?.imageHint}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{trainer.name}</h3>
                  <p className="text-sm text-gray-600">{trainer.role}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <Link href={trainer.social.twitter} aria-label={`${trainer.name}'s Twitter`}><Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-gray-300" /></Link>
                    <Link href={trainer.social.instagram} aria-label={`${trainer.name}'s Instagram`}><Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-gray-300" /></Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
