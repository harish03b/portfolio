import JourneyTimeline from "@/components/journey/JourneyTimeline";

import type { ExperienceProps } from "./Experience.types";

const Experience = ({ className }: ExperienceProps) => {
  return (
    <section className={className}>
      <JourneyTimeline />
    </section>
  );
};

export default Experience;