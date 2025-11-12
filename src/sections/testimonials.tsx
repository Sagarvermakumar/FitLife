import { Heading } from "@/components/heading";
import { siteConfig } from "@/config/site";
import { generateTestimonial } from "@/ai/flows/generate-testimonials";
import { TestimonialsCarousel } from "./testimonials-carousel";

export async function Testimonials() {


  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <Heading
          title="What Our Members Say"
          subtitle="Real stories from real members of our community."
        />
   
            <TestimonialsCarousel testimonials={siteConfig.testimonials as any} />
      </div>
    </section>
  );
}
