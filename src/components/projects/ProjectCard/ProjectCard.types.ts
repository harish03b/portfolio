import { portfolio } from "@/data/portfolio";

export type Project = (typeof portfolio.projects)[number];

export interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}