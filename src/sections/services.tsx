import { Heading } from "@/components/heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Dumbbell, Users, Salad, Zap } from "lucide-react";
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  Dumbbell,
  Users,
  Salad,
  Zap,
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-transparent">
      <div className="container">
        <Heading
          title="Our Services"
          subtitle="We offer a wide range of services to help you achieve your fitness goals."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.title} className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-soft-lg">
                <CardHeader className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-white">
                    {Icon && <Icon className="h-8 w-8" />}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="pt-2">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
