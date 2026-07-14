import Link from "next/link";
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
        </div>

        <p className="mt-8 text-sm text-tertiary">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
