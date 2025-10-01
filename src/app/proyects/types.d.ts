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
  github: string | null;
  date: string;
  role: string;
  pageContent: ProyectPage;
};

type Screenshot = {
  id: number;
  title: string;
  color: string;
  url: string;
}
type ProyectPage = {
  galleryType: "slider" | "grid";
  images:Screenshot[];
  overview: string;
  features: {
    name: string;
    description: string;
    icon: IconType;
  }[];
  challenges: string[];
  lessons: string[];
  futurePlans: string[];
};