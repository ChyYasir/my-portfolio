import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function ContactStrip() {
  return (
    <section className="py-14 md:py-20 border-t border-border">
      <div className="rounded-xl border border-border bg-elevated p-8 md:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-4">
          Get in touch
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Let&apos;s build something
        </h2>
        <p className="text-lg text-muted max-w-xl mx-auto mb-8">
          Open to engineering roles, research collaborations, and teaching
          opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.social.email}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-on-accent font-semibold hover:bg-accent-hover transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-subtle transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-subtle transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
