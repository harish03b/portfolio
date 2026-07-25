import {
  Brain,
  Cloud,
  Code2,
  Database,
  Laptop,
  Server,
} from "lucide-react";

import SkillCard from "@/components/skills/SkillCard";
import { portfolio } from "@/data/portfolio";

const iconMap = {
  "Programming Languages": Code2,
  Frontend: Laptop,
  Backend: Server,
  "AI / Machine Learning": Brain,
  Databases: Database,
  "Cloud & DevOps": Cloud,
};

const SkillsGrid = () => {
  return (
    <div
      className="
        mt-16
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {portfolio.skills.categories.map((category) => {
        const Icon =
          iconMap[
            category.title as keyof typeof iconMap
          ];

        return (
          <SkillCard
            key={category.title}
            title={category.title}
            icon={Icon}
            skills={category.items}
          />
        );
      })}
    </div>
  );
};

export default SkillsGrid;