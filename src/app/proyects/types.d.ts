type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: "Completed" | "In Progress" | "Planned";
  image: string;
  isExternal: boolean;
  link: string;
  github: string;
  date: string;
  role: string;
  pageContent: ProyectPage;
};

type ProyectPage = {
  images: string[];
  overview: string;
  features: {
    name: string;
    description: string;
    icon: string;
  }[];
  challenges: string[];
  lessons: string[];
  futurePlans: string[];
};