
type EducationData = GradeCardData[];


type GradeHeaderData = Omit<educationData, "isLoading" | "grades" >

type GradeCardData = {
  id: string;
  icon: IconType;
  name: string;
  institution: string;
  date: string;
  type: string;
}