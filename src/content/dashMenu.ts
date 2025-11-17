import { BriefcaseBusiness, Copy, GraduationCap, SquareCode, Medal, AppWindow, Home } from "lucide-react"

export const items = [
  {
    title: "Frontpage",
    url: "/",
    icon: Home,
  },
  {
    title: "Pages",
    url: "/admin",
    icon: AppWindow,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: Copy,
  },
  {
    title: "Education",
    url: "/admin/education",
    icon: GraduationCap,
  },
  {
    title: "Experience",
    url: "/admin/experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    url: "/admin/projects",
    icon: SquareCode,
  },
  {
    title: "Skills",
    url: "/admin/skills",
    icon: Medal,
  }
]
