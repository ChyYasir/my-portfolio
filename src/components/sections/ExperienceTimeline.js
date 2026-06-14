"use client";

import Tag from "@/components/ui/Tag";

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />
      <ul className="space-y-12">
        {items.map((item) => (
          <li key={item.id} className="relative pl-8">
            <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-canvas" />
            <div className="space-y-2">
              <p className="text-xs font-mono text-tertiary">{item.duration}</p>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                {item.company || item.institution}
              </h3>
              <p className="text-muted">{item.role}</p>
              {item.subtitle && (
                <p className="text-sm text-tertiary italic">{item.subtitle}</p>
              )}
              {(item.location || item.subject) && (
                <p className="text-sm text-tertiary">
                  {[item.location, item.subject].filter(Boolean).join(" · ")}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">·</span>
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
