import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/animations";

import JourneyItem from "@/components/journey/JourneyItem";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { portfolio } from "@/data/portfolio";

const JourneyTimeline = () => {
  const journey = portfolio.professionalJourney.map((item) => {
    if ("company" in item) {
      return {
        type: "experience" as const,
        title: item.role,
        subtitle: item.company,
        duration: item.duration,
        location: item.location,
        description: item.achievements,
        tags: item.technologies,
        score: "",
      };
    }

    return {
      type: "education" as const,
      title: item.degree,
      subtitle: item.institute,
      duration: item.duration,

      location:
        "university" in item
          ? item.university
          : "board" in item
          ? item.board
          : "",

      description:
        "specialization" in item
          ? [item.specialization]
          : [],

      tags: [],

      score:
        "cgpa" in item
          ? item.cgpa
          : "percentage" in item
          ? item.percentage
          : "",
    };
  });

  return (
    <section
      id="journey"
      className="py-28"
    >
      <Container>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeading
            overline="Professional Journey"
            title="My Professional Journey"
            description="Internships, education and important milestones."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20 space-y-24"
        >

          {/* Row 1 */}

          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[1fr_120px_1fr]
            "
          >

            <motion.div variants={fadeUp}>
              <JourneyItem item={journey[0]} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <div
                className="
                  h-1.5
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-primary
                  to-cyan-400
                "
              />

              <svg
                className="-ml-1"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                />
              </svg>
            </motion.div>

            <motion.div variants={fadeUp}>
              <JourneyItem item={journey[1]} />
            </motion.div>

          </div>

          {/* Vertical Connector */}

          <motion.div
            variants={fadeUp}
            className="
              hidden
              justify-center
              py-2
              lg:flex
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  h-14
                  w-1.5
                  rounded-full
                  bg-gradient-to-b
                  from-primary
                  to-cyan-400
                "
              />

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M6 13L12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                />
              </svg>
            </div>
          </motion.div>
                    {/* Row 2 */}

          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[1fr_120px_1fr]
            "
          >
            <motion.div variants={fadeUp}>
              <JourneyItem item={journey[2]} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <div
                className="
                  h-1.5
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-primary
                  to-cyan-400
                "
              />

              <svg
                className="-ml-1"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                />
              </svg>
            </motion.div>

            <motion.div variants={fadeUp}>
              <JourneyItem item={journey[3]} />
            </motion.div>
          </div>

          {/* Vertical Connector */}

          <motion.div
            variants={fadeUp}
            className="
              hidden
              justify-center
              py-2
              lg:flex
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  h-14
                  w-1.5
                  rounded-full
                  bg-gradient-to-b
                  from-primary
                  to-cyan-400
                "
              />

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M6 13L12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                />
              </svg>
            </div>
          </motion.div>

          {/* Row 3 */}

          {journey[4] && (
            <div
              className="
                grid
                gap-14
                lg:grid-cols-[1fr_120px_1fr]
              "
            >
              <motion.div variants={fadeUp}>
                <JourneyItem item={journey[4]} />
              </motion.div>

              <div />

              <div />
            </div>
          )}

        </motion.div>

      </Container>
    </section>
  );
};

export default JourneyTimeline;