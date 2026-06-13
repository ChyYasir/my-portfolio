import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Button from "@/components/ui/Button";

export default function ContactStrip() {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-2">
            Get in touch
          </p>
          <p className="text-muted">
            Open to collaborations, research, and engineering opportunities.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button href={siteConfig.social.email} variant="outline" size="sm">
            <Mail className="w-4 h-4" />
            Email
          </Button>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-sm border border-border text-muted hover:text-foreground hover:bg-subtle transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-sm border border-border text-muted hover:text-foreground hover:bg-subtle transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <Button href={siteConfig.resume} variant="ghost" size="sm" external>
            Resume ↗
          </Button>
        </div>
      </div>
    </section>
  );
}
