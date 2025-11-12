// import Image from "next/image";
// import { Heading } from "@/components/heading";
// import { placeholderImages } from "@/lib/placeholder-images.json";

// export function About() {
//   const aboutImage = placeholderImages.find(p => p.id === 'about');

//   return (
//     <div id="about" className="py-16 md:py-24">
//       <div className="container">
//         <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
//           <div className="flex flex-col justify-center">
//             <Heading title="About FitLife Hub" className="text-left mb-6 items-start" />
//             <p className="text-muted-foreground mb-4 leading-relaxed">
//               Welcome to FitLife Hub, where your fitness journey begins. We are more than just a gym; we are a community dedicated to helping you achieve your health and wellness goals in a supportive and motivating environment.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               Our state-of-the-art facilities are equipped with the latest fitness technology, and our team of expert trainers is passionate about providing personalized guidance. Whether you're a beginner or a seasoned athlete, FitLife Hub is your partner in transformation.
//             </p>
//           </div>
//           <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft-lg">
//             <Image
//               src={aboutImage?.imageUrl || "https://picsum.photos/seed/about/800/600"}
//               alt={aboutImage?.description || "Image of gym facilities"}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               data-ai-hint={aboutImage?.imageHint || "fitness equipment"}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import { Dumbbell, Trophy, Heart, Wallet, Users } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/heading";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Gym Equipment",
    desc: "State-of-the-art facilities with premium equipment for all your fitness needs.",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    desc: "Expert guidance from certified personal trainers in Indore, including former champions.",
  },
  {
    icon: Heart,
    title: "Weight Loss Programs",
    desc: "Specialized programs for effective fat loss and body transformation.",
  },
  {
    icon: Wallet,
    title: "Affordable Membership",
    desc: "Flexible monthly and yearly packages at competitive rates in Indore.",
  },
  {
    icon: Trophy,
    title: "Air-Conditioned Facility",
    desc: "Comfortable workout environment with modern amenities in Navlakha, Indore.",
  },
];

const images = [
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
       
          <Heading title="FitLife-Best Gym in Navlakha, Indore" subtitle="" />
          <p className="text-gray-300 mb-8">
            Welcome to <span style={{color:"purple", fontWeight:600}} >FitLife</span>, the premier fitness destination in Navlakha, Indore.
            We combine certified personal training, modern equipment, and a supportive
            environment to help you achieve your fitness goals naturally.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <Card
                key={i}
                className="bg-zinc-900 border border-zinc-800 hover:border-purple-500/60 transition-colors"
              >
                <CardContent className="flex items-start gap-3 p-4">
                  <f.icon className="text-purple-600 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-gray-300">
            Join FitLife Fitness today and experience why we’re considered the best gym
            in Indore. Start your fitness journey with our expert trainers and supportive community.
          </p>
        </div>

        {/* RIGHT IMAGES */}
     <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* 1st - Large */}
          <div className="relative col-span-1 row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
              alt="Gym Equipment"
              width={400}
              height={300}
              className="rounded-2xl w-full h-full object-cover scale-105"
            />
          </div>

          {/* 2nd - Small */}
          <div className="relative col-span-1 row-span-1">
            <Image
              src=  "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww"
              alt="Boxing"
              width={400}
              height={300}
              
              className="rounded-2xl w-[90%] h-[90%] object-cover mx-auto mt-4 "
            />
          </div>

          {/* 3rd - Small */}
          <div className="relative col-span-1 row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
              alt="Weights"
              width={400}
              height={300}
              className="rounded-2xl w-[90%] h-[90%] object-cover mx-auto mt-4"
            />
          </div>

          {/* 4th - Large */}
          <div className="relative col-span-1 row-span-1">
            <Image
              src= "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80"
              alt="Fitness Woman"
              width={400}
              height={300}
              className="rounded-2xl w-full h-full object-cover scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
