import { LucideIcon } from "lucide-react";

export interface SkillCardProps {
  title: string;

  icon: LucideIcon;

  skills: readonly string[];
}