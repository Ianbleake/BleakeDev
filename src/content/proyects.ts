export const projects: Project[] = [
  {
    id: 1,
    title: "Link Me Up",
    description: "Link Me Up is a PWA that allows bulk importing of contacts from Excel or CSV files, with the ability to review and edit the data before saving them to the device.",
    tech: ["React", "Vite", "TailwindCSS", "Zustand","TypeScript"],
    category: "Web Apps",
    status: "Completed",
    image: "/images/linkmeup.png",
    isExternal: true,
    link: "https://link-me-up-zeta.vercel.app",
    github: "#",
    date: "August 2023",
    role: "Full Stack Developer",
    pageContent: {
      images: ["/images/savySS1-landscape.png", "/images/savySS1-left.png", "/images/savySS1-portrait.png"],
      overview: "Savy is a mobile application aimed at simplifying personal finance management. It allows users to easily track their income and expenses, set budgets, and gain insights into their spending habits. The app is designed with a user-friendly interface to make financial management accessible to everyone.",
      features: [
        {
          name: "User Authentication",
          description: "Secure sign-up and login functionality using Supabase authentication.",
          icon: "UserIcon",
        }
      ],
      challenges: [
        "Implementing real-time data synchronization with Supabase.",
        "Designing an intuitive user interface for mobile devices.",
        "Ensuring data security and privacy for users."
      ],
      lessons: [
        "Gained experience with React Native and mobile app development.",
        "Learned how to integrate Supabase for backend services.",
        "Improved skills in designing user-friendly interfaces."
      ],
      futurePlans: [
        "Add more advanced budgeting features.",
        "Implement data visualization for better financial insights.",
        "Expand to support multiple currencies and internationalization."
      ],
    }
  },
  {
    id: 2,
    title: "Savy - Budget App",
    description: "Savy is a mobile app designed to help users manage their personal finances by tracking income, expenses, and budgets in an intuitive way, without the complexity of traditional financial software.",
    tech: ["React Native", "Supabase", "React Query", "Zustand"],
    category: "Mobile Apps",
    status: "In Progress",
    image: "/images/savySS1.png",
    isExternal: false,
    link: "#",
    github: "#",
    date: "June 2024",
    role: "Full Stack Developer",
    pageContent: {
      images: ["/images/savySS1-landscape.png", "/images/savySS1-left.png", "/images/savySS1-portrait.png"],
      overview: "Savy is a mobile application aimed at simplifying personal finance management. It allows users to easily track their income and expenses, set budgets, and gain insights into their spending habits. The app is designed with a user-friendly interface to make financial management accessible to everyone.",
      features: [
        {
          name: "User Authentication",
          description: "Secure sign-up and login functionality using Supabase authentication.",
          icon: "UserIcon",
        }
      ],
      challenges: [
        "Implementing real-time data synchronization with Supabase.",
        "Designing an intuitive user interface for mobile devices.",
        "Ensuring data security and privacy for users."
      ],
      lessons: [
        "Gained experience with React Native and mobile app development.",
        "Learned how to integrate Supabase for backend services.",
        "Improved skills in designing user-friendly interfaces."
      ],
      futurePlans: [
        "Add more advanced budgeting features.",
        "Implement data visualization for better financial insights.",
        "Expand to support multiple currencies and internationalization."
      ],
    }
  }
];
