
type GradeData = {
  icon: IconType;
  name: string;
  description: string;
  institution: string;
  date: string;
  period?: Period | string;
  location?: string;
  credential?: string;
  type: string;
}

type Period = { from: Date; to: Date };