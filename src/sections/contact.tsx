import { Heading } from "@/components/heading";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images.json";
import Link from 'next/link';

export function Contact() {
  const mapImage = placeholderImages.find(p => p.id === 'map');

  return (
    <section id="contact" className="bg-transparent py-16 md:py-24">
      <div className="container">
        <Heading
          title="Get In Touch"
          subtitle="We're here to help you. Reach out to us with any questions."
        />
        <Card className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                  <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="font-semibold">Address</h4>
                          <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="font-semibold">Email</h4>
                          <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground transition-colors hover:text-primary">{siteConfig.contact.email}</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="font-semibold">Phone</h4>
                          <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground transition-colors hover:text-primary">{siteConfig.contact.phone}</a>
                      </div>
                  </div>
                  <Link href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mt-4" size="lg" variant={'outline'} >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </Link>
              </div>
            </div>
            <div className="relative w-full h-80 md:h-full min-h-[300px]">
              <Image
                  src={mapImage?.imageUrl || "https://picsum.photos/seed/map/1200/800"}
                  alt="Map showing gym location"
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage?.imageHint || "city map"}
                />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
