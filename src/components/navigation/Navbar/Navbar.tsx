import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Download,
  Github,
  Menu,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";

import { portfolio } from "@/data/portfolio";

import { cn } from "@/lib/cn";

import type { NavbarProps } from "./Navbar.types";

const Navbar = ({
  className,
}: NavbarProps) => {
  const [activeSection, setActiveSection] =
    useState("home");

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  useEffect(() => {
    const sections =
      portfolio.navigation
        .map((item) =>
          document.getElementById(item.id),
        )
        .filter(Boolean);

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(
                entry.target.id,
              );
            }
          });
        },
        {
          threshold: 0.35,
          rootMargin:
            "-100px 0px -40% 0px",
        },
      );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); 
    return (
    <header
      className={cn(
        `
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
        `,
        isScrolled
          ? `
              border-b
              border-border/70
              bg-background/85
              shadow-lg
              backdrop-blur-xl
            `
          : `
              bg-background/60
              backdrop-blur-md
            `,
        className,
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="flex flex-col leading-none"
          >
            <span className="text-lg font-bold tracking-tight text-foreground">
              {portfolio.profile.fullName}
            </span>

            <span className="mt-1 text-xs text-muted-foreground">
              {portfolio.profile.role}
            </span>
          </a>

          {/* Navigation */}

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {portfolio.navigation.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    `
                      relative
                      py-2
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                    `,
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}

                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="
                          absolute
                          inset-x-0
                          -bottom-1
                          h-0.5
                          rounded-full
                          bg-primary
                        "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </nav>

          {/* Actions */}

          <div className="flex items-center gap-2">

            <ThemeToggle />

            <motion.a
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href={portfolio.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button
                variant="ghost"
                size="icon"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={portfolio.profile.resume}
              download
              className="hidden md:block"
            >
              <Button variant="outline">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </motion.a>

            <motion.div
              whileTap={{
                scale: 0.92,
              }}
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>

          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;