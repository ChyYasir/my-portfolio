import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 md:mt-32">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-base text-muted hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.social.email}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-tertiary">
          © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js
        </p>
      </Container>
    </footer>
  );
}
