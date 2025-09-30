import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { GoZap } from "react-icons/go";

export const skills = [
  { 
    name: "Frontend", 
    icon: FaCode, 
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand","React Query"] 
  },
  { 
    name: "Mobile", 
    icon: FaMobileAlt, 
    technologies: ["React Native", "Expo", "Navigation", "State Management"] 
  },
  { 
    name: "E-commerce", 
    icon: SiShopify, 
    technologies: ["Shopify","Mercado Libre","Tienda Nube", "Liquid", "SEO", "Custom Themes"] 
  },
  { 
    name: "Backend & Databases", 
    icon: FaServer, 
    technologies: ["Node.js", "Express", "Supabase", "Firebase", "MongoDB"] 
  },
  { 
    name: "Tools", 
    icon: GoZap, 
    technologies: ["Git", "CI/CD", "Testing", "Postman"] 
  }
];
