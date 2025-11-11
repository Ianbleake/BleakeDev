

type RootProps = {
  children: React.ReactNode;
}

type BodyProps = {
  children: React.ReactNode;
}

type PageCardHeaderData = {
  icon: IconType;
  actionIcon?: IconType;
  title: string;
  description: string;
  action?: () => void | React.ReactElement;
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
  first_name: string;
  last_name: string;
  username: string;
  email: string | null;
  avatarurl: string | null;
  created_at: string | null;
  color: string;
  banner: string | null;
  name: string;
  initials: string | null;
}

type Period = { from: Date; to: Date };

type Achievement = {
  id: string;
  grade_id: string; 
  grade_type: 'education' | 'certification';
  description: string;
}

type NewAchievement = Omit<Achievement, "id" | "grade_id" | "grade_type">;

type AddAchievementPayload = {
  grade_id: string; 
  grade_type: 'education' | 'certification';
  description: string;
}

type Degree = {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: Period;
  description: string;
  achievements: Achievement[];
  type: string;
  pageContent: undefined;
}

type NewDegree = Omit<Degree, "pageContent" | "id" | "achievements"> & {
  achievements: NewAchievement[];
};

type DegreeInfo = Omit<Degree, "achievements" | "pageContent" >

type Certification = {
  id: string,
  title: string,
  issuer: string,
  date: string,
  credential: string,
  achievements: Achievement[];
  description: string;
  pageContent: undefined;
}

type NewCertification = Omit<Certification, 'pageContent' | 'id' | "achievements"> & {
  achievements: NewAchievement[];
};

type CertificationInfo = Omit<Certification, "achievements" | "pageContent">

//TODO: Fix this types
type GradeInfo = Record<DegreeInfo | CertificationInfo>;

type Grade = Record<Degree | Certification>;

// type Grade = {
//   id: string;
//   description: string;
//   achievements: Achievement[];
//   pageContent: undefined;
//   degree?: string;
//   institution?: string;
//   location?: string;
//   period?: Period;
//   type?: string;
//   title?: string;
//   issuer?: string;
//   date?: string;
//   credential?: string;
// }

// type GradeInfo = {
//   id: string;
//   description: string;
//   degree?: string;
//   institution?: string;
//   location?: string;
//   period?: Period;
//   title?: string;
//   issuer?: string;
//   date?: string;
//   credential?: string;
// }

type AvatarData = {
  id: string;
  avatar: string | null;   
  newAvatar: string | File | null;
  color?: string | null;
}