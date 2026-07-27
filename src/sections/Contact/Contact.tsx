import { motion } from "framer-motion";

import {
  fadeUp,
  slideLeft,
  slideRight,
  viewport,
} from "@/animations";

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
      className={`pt-24 ${className ?? ""}`}
    >
      {/* Contact Section */}

      <Container>
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left Column */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ContactContent
              title={portfolio.contact.title}
              description={portfolio.contact.description}
              resume="/resume/Harish_Thakre_Resume.pdf"
            />
          </motion.div>

          {/* Right Column */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ContactLinks
              email={portfolio.contact.email}
              linkedin={portfolio.social.linkedin.url}
              github={portfolio.social.github.url}
              location={portfolio.contact.location}
            />
          </motion.div>
        </div>
      </Container>

      {/* Full Width Divider */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="
          mt-24
          border-t
          border-border
        "
      />

      {/* Footer */}

      <Container>
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            py-8
            text-sm
            text-foreground-muted
            md:flex-row
          "
        >
          <p>{portfolio.footer.copyright}</p>

          <p>{portfolio.footer.builtWith}</p>
        </motion.footer>
      </Container>
    </section>
  );
};

export default Contact;