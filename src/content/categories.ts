import { projects } from "./proyects";

const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));

export const categories = ["All", ...uniqueCategories];
