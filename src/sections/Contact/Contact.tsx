
import ContactContent from "@/components/contact/ContactContent";
import ContactLinks from "@/components/contact/ContactLinks";

import Container from "@/components/ui/Container";

import { portfolio } from "@/data/portfolio";

import type { ContactProps } from "./Contact.types";

const Contact = ({
  className,
}: ContactProps) => {
  return (
    <section
      id="contact"
      className={`py-24 ${className ?? ""}`}
    >
      <Container>
        {/* Top Section */}

        <div
          className="
            grid
            gap-16
            border-t
            border-border
            pt-20
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* About */}

          <ContactContent
            title={portfolio.contact.title}
            description={portfolio.contact.description}
            resume="/resume/Harish_Thakre_Resume.pdf"
          />

          {/* Contact Links */}

          <ContactLinks
            email={portfolio.contact.email}
            linkedin={portfolio.social.linkedin.url}
            github={portfolio.social.github.url}
            location={portfolio.contact.location}
          />
        </div>

        {/* Footer */}

        <div
          className="
            mt-20
            border-t
            border-border
            pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-sm
              text-foreground-muted
              md:flex-row
            "
          >
            <p>{portfolio.footer.copyright}</p>

            <p>{portfolio.footer.builtWith}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;