/**
 * Centralized business configuration for Izzy Digital Studio.
 * 
 * Whenever you add a new editable business value in the future, put it here first.
 * Never hardcode business information directly into components.
 */

export const config = {
  brand: {
    name: "Izzy Digital Studio",
    tagline: "Engineering Digital Growth.",
    mission: "We build websites, AI automations, and digital systems that help businesses grow faster, operate smarter, and scale with confidence.",
    description: "Izzy Digital Studio is a digital growth agency specializing in high-converting websites, AI automation, and business systems. We engineer digital experiences that help startups and businesses attract customers, streamline operations, and scale efficiently.",
    logoPath: "/logo.png",
    faviconPath: "/favicon.ico",
  },
  website: {
    url: "https://izzydigitalstudio.com",
  },
  contact: {
    email: "izzywebsolutions26@gmail.com",
    phone: "2348102713507",
    whatsapp: {
      number: "2348102713507",
      prefilledMessage: "Hi Izzy Digital Studio, I found your website and I'm interested in working with you. I'd like to discuss my project.",
    },
    address: "Lagos, Nigeria",
  },
  social: {
    instagram: "https://www.instagram.com/izzystudios526?igsh=MjlydGxkemdrd2ky",
    tiktok: "https://www.tiktok.com/@izzystudios526?_r=1&_t=ZS-96Nj40UJlhP",
    x: "https://x.com/izzystudios526",
    threads: "",
    linkedin: "",
    github: "",
    youtube: "",
    facebook: "",
  },
  theme: {
    colors: {
      background: "#080C10",
      surface: "#0D1117",
      primary: "#4F8EF7",
      secondary: "#7AA2FF",
      text: "#F0F4FF",
      muted: "#8892AA",
      border: "#1B2430",
      surfaceAlt: "#11161F",
      accentGlow: "#00D4FF",
    },
  },
  seo: {
    defaultTitle: "Izzy Digital Studio | Websites. AI Automation. SaaS Development. Business Systems. Digital Systems.",
    titleTemplate: "%s | Izzy Digital Studio",
    defaultDescription: "We engineer digital growth through premium websites, AI automation, and scalable business systems designed to help startups and businesses grow faster.",
    ogImage: "/og-image.jpg",
    twitterHandle: "@izzystudios526",
  },
} as const;

export type Config = typeof config;
