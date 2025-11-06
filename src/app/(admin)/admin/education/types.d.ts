
type educationData = {
  isLoading: boolean;
  icon: IconType;
  actionIcon: IconType;
  title: string;
  description: string;
  action: () => void;
  grades: gradeCardData[] | undefined;
}

type GradeHeaderData = Omit<educationData, "isLoading" | "grades" >

type GradeCardData = {
  id: string;
  icon: IconType;
  name: string;
  institution: string;
  date: string;
  type: string;
}