import { Download, Github, Menu } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/cn";

import type { NavbarProps } from "./Navbar.types";

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl",
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

          {/* Desktop Navigation */}

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary"
          >
            {portfolio.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
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
            </a>

            <a
              href={portfolio.profile.resume}
              download
              className="hidden md:block"
            >
              <Button variant="outline">
                <Download className="h-4 w-4" />

                Resume
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;