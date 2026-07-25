import { portfolio } from "@/data/portfolio";

const TechStack = () => {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-4
      "
    >
      {portfolio.hero.technologies.map((technology) => (
        <div
          key={technology}
          className="
            group
            rounded-full
            border
            border-border
            bg-card
            px-5
            py-3
            text-sm
            font-medium
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-primary
            hover:bg-primary
            hover:text-primary-foreground
            hover:shadow-lg
          "
        >
          {technology}
        </div>
      ))}
    </div>
  );
};

export default TechStack;