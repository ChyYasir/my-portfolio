"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site";

const accentLink =
  "text-accent hover:text-accent-hover underline-offset-2 hover:underline transition-colors";

export default function Hero() {
  const { engineering, teaching, research } = siteConfig.roles;

  return (
    <section className="pt-20 pb-8 md:pt-24 md:pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-10 items-start">
        <aside className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative w-44 h-44 lg:w-48 lg:h-48 shrink-0 overflow-hidden border border-border rounded-sm">
            <Image
              src="/images/profile/yasir-2.png"
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="font-display text-3xl md:text-4xl text-foreground mt-5">
            {siteConfig.name}
          </h1>

          <p className="text-accent font-semibold text-sm mt-3">
            {engineering.title}
          </p>
          <p className="text-muted text-sm">{engineering.org}</p>
          <p className="text-muted text-sm">{engineering.location}</p>

          <p className="text-accent font-semibold text-sm mt-4">
            {teaching.title}
          </p>
          <p className="text-muted text-sm">{teaching.org}</p>

          <a
            href={siteConfig.social.email}
            className="text-muted text-sm mt-5 hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>

          <div className="flex flex-col items-center lg:items-start gap-2 mt-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4 shrink-0" />
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              LinkedIn
            </a>
          </div>
        </aside>

        <div className="lg:pt-1 min-w-0">
          <p className="font-display italic text-muted text-base md:text-lg mb-5">
            Software engineer, adjunct lecturer, and published researcher.
          </p>

          <div className="space-y-4 text-sm md:text-base text-foreground leading-relaxed">
            <p>
              I build software and data systems at{" "}
              <Link href="/experience#engineering" className={accentLink}>
                {engineering.org}
              </Link>
              , working on production pipelines, platform integrations, and
              scalable backend services. I also teach as an{" "}
              <Link href="/experience#teaching" className={accentLink}>
                Adjunct Lecturer
              </Link>{" "}
              at{" "}
              <Link href="/experience#teaching" className={accentLink}>
                {teaching.org}
              </Link>
              , guiding students in algorithms, problem-solving, and software
              engineering fundamentals.
            </p>
            <p>
              My research contributions include peer-reviewed work{" "}
              <span className="text-accent">{research.status.toLowerCase()}</span>{" "}
              in a{" "}
              <Link href="/experience#research" className={accentLink}>
                {research.badge} journal
              </Link>
              . Outside of work, I&apos;m a competitive programmer with multiple{" "}
              <Link href="/achievements#icpc" className={accentLink}>
                ICPC regional
              </Link>{" "}
              appearances and an inter-university programming contest win.
            </p>
          </div>

          <p className="text-sm text-muted mt-5">
            A PDF version of my CV is available{" "}
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={accentLink}
            >
              here
            </a>
            .
          </p>

          <div className="mt-6 p-4 md:p-5 rounded-sm border border-accent/30 bg-accent-muted">
            <p className="font-display text-accent font-semibold text-sm md:text-base mb-1">
              Research · {research.badge} journal ({research.status})
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Peer-reviewed publication accepted in a top-quartile journal.{" "}
              <Link href="/experience#research" className={accentLink}>
                View publication →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
