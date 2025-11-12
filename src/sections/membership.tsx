import { Heading } from "@/components/heading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Membership() {
  return (
    <section id="membership" className="py-16 md:py-24 bg-transparent">
      <div className="container">
        <Heading
          title="Membership Plans"
          subtitle="Choose the plan that fits your needs and start your journey with us."
        />
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-3 lg:gap-12">
          {siteConfig.membershipPlans.map((plan) => (
            <Card
              key={plan.title}
              className={cn(
                "flex flex-col transition-all duration-300 rounded-2xl",
                plan.isFeatured ? "border-primary shadow-soft-lg scale-105" : "hover:shadow-soft-lg hover:-translate-y-2"
              )}
            >
{plan.isFeatured && (
  <div className="py-2 text-center text-sm font-semibold text-purple-100 
                  bg-purple-600/30 border border-purple-400/50 
                  rounded-t-2xl backdrop-blur-md shadow-md">
    ⭐ Most Popular
  </div>
)}

              <CardHeader className="items-center text-center pt-8">
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button className="w-full" variant={plan.isFeatured ? "default" : "outline"}>
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
