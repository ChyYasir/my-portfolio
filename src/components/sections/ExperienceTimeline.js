"use client";

import { ArrowUpRight } from "lucide-react";
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
              {item.highlights?.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((h, i) => {
                    const text = typeof h === "string" ? h : h.text;
                    return (
                      <li key={i} className="text-base text-muted leading-relaxed flex gap-3">
                        <span className="text-accent mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>
                          {text}
                          {h.href && (
                            <>
                              {" "}
                              <a
                                href={h.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-0.5 font-medium text-accent hover:underline"
                              >
                                {h.linkLabel || h.href}
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {item.courses && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Courses taught
                    {item.courses.term && (
                      <span className="text-tertiary font-normal">
                        {" "}· {item.courses.term}
                      </span>
                    )}
                  </p>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border bg-subtle/50">
                          <th className="py-2.5 px-4 font-medium text-tertiary whitespace-nowrap">
                            Code
                          </th>
                          <th className="py-2.5 px-4 font-medium text-tertiary">
                            Course
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.courses.items.map((c) => (
                          <tr
                            key={c.code}
                            className="border-b border-border last:border-0"
                          >
                            <td className="py-2.5 px-4 font-mono text-muted whitespace-nowrap">
                              {c.code}
                            </td>
                            <td className="py-2.5 px-4 text-foreground">
                              {c.name}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
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
