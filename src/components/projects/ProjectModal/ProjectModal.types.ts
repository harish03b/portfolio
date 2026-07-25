import type { Project } from "@/components/projects/ProjectCard";

export interface ProjectModalProps {
  project: Project | null;

  open: boolean;

  onClose: () => void;
}