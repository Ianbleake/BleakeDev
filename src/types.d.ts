

type RootProps = {
  children: React.ReactNode;
}

type BodyProps = {
  children: React.ReactNode;
}

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

type Skill = {
  name: string;
  icon: IconType;
  technologies: string[];
}

type SupabaseAuthError = {
  message: string;
  code: string;
}

type UserProfile = {
  id: string;
  color: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string | null;
  avatarurl: string | null;
  created_at: string | null;
  initials: string | null;
}

type Degree = {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  type: string;
  pageContent: undefined;
}  

type Certification = {
  id: string,
  title: string,
  issuer: string,
  date: string,
  credential: string,
  achievements: [];
  description: string;
  pageContent: undefined;
}