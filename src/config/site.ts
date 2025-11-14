export const siteConfig = {
  name: "FitLife Hub",
  description: "A modern gym to achieve your fitness goals. Join us and transform your life.",
  tagline: "Your Fitness Journey Starts Today, Transform Your Life.",
  navLinks: [
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Trainers", href: "#trainers" },
    { title: "Plans", href: "#membership" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ],
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  contact: {
    address: "123 Fitness St, Workout City, 12345",
    phone: "+1 (234) 567-890",
    whatsapp: "+916207360959",
    email: "sksagarkumarverma@gmail.com",
  },
  trainers: [
    {
      id: 1,
      name: "Jessica Miles",
      role: "Lead Trainer",
      imageUrl: "1",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Mike Anderson",
      role: "Strength Coach",
      imageUrl: "2",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Yoga & Flexibility",
      imageUrl: "3",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "David Lee",
      role: "Cardio Specialist",
      imageUrl: "4",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
  ],
  services: [
    {
      title: "Gym Training",
      description: "Access to our state-of-the-art gym equipment with a supportive community.",
      icon: "Dumbbell",
    },
    {
      title: "Personal Coaching",
      description: "One-on-one sessions with our expert trainers to fast-track your results.",
      icon: "Users",
    },
    {
      title: "Nutrition Plan",
      description: "Customized meal plans designed by our nutritionists to complement your workouts.",
      icon: "Salad",
    },
    {
      title: "Group Classes",
      description: "Join our energetic group classes like Zumba, HIIT, and Yoga.",
      icon: "Zap",
    },
  ],
  membershipPlans: [
    {
      title: "Basic",
      price: "₹399",
      period: "/month",
      features: ["Gym Access", "Locker Room", "1 Group Class/week"],
      isFeatured: false,
    },
    {
      title: "Premium",
      price: "₹999",
      period: "/month",
      features: ["All Basic Features", "Unlimited Group Classes", "Personal Trainer Access"],
      isFeatured: true,
    },
    {
      title: "Elite",
      price: "₹1499",
      period: "/month",
      features: ["All Premium Features", "Nutrition Plan", "Sauna & Spa Access"],
      isFeatured: false,
    },
  ],
  testimonials:  [
  {
    name: "Emily R.",
    role: "Member",
    testimonial: "FitLife Hub has completely changed my perspective on fitness. The trainers are so supportive and the community is amazing!",
    avatar: "5",
  },
  {
    name: "James K.",
    role: "Member",
    testimonial: "The personalized workout plans at FitLife Hub helped me reach my fitness goals faster than I imagined. Highly recommend!",
    avatar: "3",
  },
  {
    name: "Sophia L.",
    role: "Member",
    testimonial: "I love the nutrition guidance here! It’s practical, easy to follow, and has improved my overall lifestyle significantly.",
    avatar: "7",
  },
  {
    name: "Michael B.",
    role: "Trainer",
    testimonial: "Working at FitLife Hub has been a rewarding experience. The members are motivated, and the environment encourages growth for everyone.",
    avatar: "2",
  },
  {
    name: "Olivia T.",
    role: "Member",
    testimonial: "The group classes are so fun and energizing! FitLife Hub makes staying fit enjoyable rather than a chore.",
    avatar: "4",
  },
  {
    name: "Daniel S.",
    role: "Member",
    testimonial: "The progress tracking and personalized coaching helped me stay consistent. FitLife Hub truly cares about its members.",
    avatar: "6",
  },
]
};

export type SiteConfig = typeof siteConfig;
