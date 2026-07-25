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
        <SectionHeading
          badge="Professional Journey"
          title="My Professional Journey"
          description="Internships, education and important milestones."
        />

        <div className="mt-20 space-y-16"> 
                      {/* Row 1 */}

          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[1fr_90px_1fr]
            "
          >
            <JourneyItem item={journey[0]} />

            <div
              className="
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <div className="h-1 w-full bg-primary rounded-full" />

              <svg
                className="-ml-1"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-primary"
                />
              </svg>
            </div>

            <JourneyItem item={journey[1]} />
          </div>
                    {/* Vertical Connector */}

          <div
            className="
              hidden
              lg:flex
              justify-center
              py-2
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
              "
            >
              <div className="h-10 w-1 rounded-full bg-primary" />

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M6 13L12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-primary"
                />
              </svg>
            </div>
          </div>

          {/* Row 2 */}

          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[1fr_90px_1fr]
            "
          >
            <JourneyItem item={journey[2]} />

            <div
              className="
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <div className="h-1 w-full bg-primary rounded-full" />

              <svg
                className="-ml-1"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-primary"
                />
              </svg>
            </div>

            <JourneyItem item={journey[3]} />
          </div>
                    {/* Vertical Connector */}

          <div
            className="
              hidden
              lg:flex
              justify-center
              py-2
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
              "
            >
              <div className="h-10 w-1 rounded-full bg-primary" />

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M6 13L12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-primary"
                />
              </svg>
            </div>
          </div>

          {/* Row 3 */}

          {journey[4] && (
            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_90px_1fr]
              "
            >
              <JourneyItem item={journey[4]} />

              <div />

              <div />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default JourneyTimeline;