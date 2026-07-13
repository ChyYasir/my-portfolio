"use client";

import Tag from "@/components/ui/Tag";

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-[4px] top-3 bottom-3 w-px bg-border" />
      <ul className="space-y-14">
        {items.map((item) => (
          <li key={item.id} className="relative pl-9">
            <span className="absolute left-0 top-2.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-canvas" />
            <div className="space-y-2">
              <p className="text-sm font-mono text-tertiary">{item.duration}</p>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground">
                {item.company || item.institution}
              </h3>
              <p className="text-lg text-foreground font-medium">{item.role}</p>
              {item.subtitle && (
                <p className="text-base text-tertiary">{item.subtitle}</p>
              )}
              {(item.location || item.subject) && (
                <p className="text-base text-tertiary">
                  {[item.location, item.subject].filter(Boolean).join(" · ")}
                </p>
              )}
              <ul className="mt-5 space-y-2.5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-base text-muted leading-relaxed flex gap-3">
                    <span className="text-accent mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {item.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
