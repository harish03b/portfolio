import { SkillCardProps } from "./SkillCard.types";

const SkillCard = ({
  title,
  icon: Icon,
  skills,
}: SkillCardProps) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-card/80
        backdrop-blur-sm
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary
        hover:shadow-2xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
          "
        >
          <Icon
            className="
              h-7
              w-7
              text-primary
            "
          />
        </div>

        <h3
          className="
            text-3xl
            font-bold
            leading-tight
          "
        >
          {title}
        </h3>
      </div>

      {/* Skill Pills */}

      <div
        className="
          mt-10
          flex
          flex-wrap
          gap-4
        "
      >  
              {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-2
              text-sm
              font-medium
              text-primary
              transition-all
              duration-300
              hover:scale-105
              hover:bg-primary
              hover:text-primary-foreground
              hover:shadow-md
            "
          >
            {skill}
          </span>
        ))}
      </div>

         {/* Bottom Accent */}

      <div
        className="
          mt-8
          h-px
          bg-gradient-to-r
          from-transparent
          via-border
          to-transparent
        "
      />  
        </div>
  );
};

export default SkillCard; 