type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: string;
  image: string;
  isExternal: boolean;
  link: string;
  github: string;
  pageContent?: {
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
};