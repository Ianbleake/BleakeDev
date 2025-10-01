import { GoPasskeyFill } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

export const projects: Project[] = [
  {
    id: 1,
    title: "Link Me Up",
    description:
      "Link Me Up is a PWA that allows bulk importing of contacts from Excel or CSV files, with the ability to review and edit the data before saving them to the device.",
    tech: ["React", "Vite", "TailwindCSS", "Zustand", "TypeScript",],
    category: "Web Apps",
    status: "Completed",
    image: "/images/linkmeup.png",
    isExternal: true,
    link: "https://link-me-up-zeta.vercel.app",
    github: null,
    date: "September 2025",
    role: "Front End Developer",
    pageContent: {
      galleryType: "grid",
      images: [
        {
          id: 1,
          title: "Upload Contacts",
          color: "from-emerald-400 to-green-500",
          url: "/images/linkmeup.png",
        },
        {
          id: 2,
          title: "Contacts Table",
          color: "from-green-500 to-emerald-600",
          url: "/images/contactos.png",
        },
        {
          id: 3,
          title: "Edit Contacts",
          color: "from-emerald-600 to-green-700",
          url: "/images/editar.png",
        },
        {
          id: 4,
          title: "Import Preview",
          color: "from-green-700 to-emerald-800",
          url: "/images/importar.png",
        },
      ],
      overview:
        "Link Me Up is a progressive web application designed to simplify bulk contact management. Users can upload Excel or CSV files, preview the data in a structured table, edit or remove contacts, and finally import them directly to their device in just a few steps.",
      features: [
        {
          name: "Excel & CSV Upload",
          description:
            "Easily upload contacts from Excel (.xlsx) or CSV files and parse them into a structured format.",
          icon: LuFileSpreadsheet,
        },
        {
          name: "Contact Editing",
          description:
            "Edit, update, or remove contacts before finalizing the import, ensuring data accuracy.",
          icon: FaRegEdit,
        },
        {
          name: "Bulk Import",
          description:
            "Quickly import multiple contacts at once into the device's contact list with a single action.",
          icon: MdCloudUpload,
        },
      ],
      challenges: [
        "Parsing and validating Excel and CSV files with different structures.",
        "Building a clean and responsive UI to handle large sets of data.",
        "Ensuring compatibility across browsers and mobile devices as a PWA.",
      ],
      lessons: [
        "Improved knowledge of handling file uploads and parsing with libraries like SheetJS (XLSX).",
        "Learned state management patterns with Zustand for managing contact data.",
        "Gained experience building a polished, responsive PWA using React and TailwindCSS.",
      ],
      futurePlans: [
        "Add support for Google Contacts synchronization.",
        "Implement drag-and-drop file upload.",
        "Allow exporting edited contacts back into Excel/CSV format.",
      ],
    },
  },
  {
    id: 2,
    title: "Savy - Budget App",
    description:
      "Savy is a mobile app designed to help users manage their personal finances by tracking income, expenses, and budgets in an intuitive way, without the complexity of traditional financial software.",
    tech: ["React Native", "Supabase", "React Query", "Zustand","Nativewind"],
    category: "Mobile Apps",
    status: "In Progress",
    image: "/images/savySS1.png",
    isExternal: false,
    link: "#",
    github: null,
    date: "June 2024",
    role: "Full Stack Developer",
    pageContent: {
      galleryType: "slider",
      images: [
        {
          id: 1,
          title: "Product Page",
          color: "from-green-500 to-emerald-600",
          url: "/images/savySS1-left.png",
        },
        {
          id: 2,
          title: "Analytics",
          color: "from-emerald-600 to-green-700",
          url: "/images/savySS1-portrait.png",
        },
      ],
      overview:
        "Savy is a mobile application aimed at simplifying personal finance management. It allows users to easily track their income and expenses, set budgets, and gain insights into their spending habits. The app is designed with a user-friendly interface to make financial management accessible to everyone.",
      features: [
        {
          name: "User Authentication",
          description:
            "Secure sign-up and login functionality using Supabase authentication.",
          icon: GoPasskeyFill,
        },
        {
          name: "Expense Tracking",
          description:
            "Log income and expenses with categories, dates, and notes for better organization.",
          icon: MdCloudUpload,
        },
        {
          name: "Budgeting",
          description:
            "Set monthly budgets and monitor progress with real-time feedback on spending.",
          icon: FaRegEdit,
        },
      ],
      challenges: [
        "Implementing real-time data synchronization with Supabase.",
        "Designing an intuitive and responsive mobile UI in React Native.",
        "Ensuring data security and privacy for users.",
      ],
      lessons: [
        "Gained experience with React Native and mobile app development.",
        "Learned how to integrate Supabase for backend services.",
        "Improved skills in designing user-friendly interfaces and state management with Zustand.",
      ],
      futurePlans: [
        "Add advanced analytics with charts and spending insights.",
        "Implement recurring transactions and reminders.",
        "Expand to support multiple currencies and internationalization.",
        "Release to App Store and Google Play.",
      ],
    },
  },
];
