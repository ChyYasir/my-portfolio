"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const SECTION_IDS = ["engineering", "teaching", "research"];

export default function ExperienceSubNav() {
  const [activeSection, setActiveSection] = useState("engineering");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const hash = window.location.hash.replace("#", "");
    if (SECTION_IDS.includes(hash)) {
      setActiveSection(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    }

    const onHashChange = () => {
      const h = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(h)) setActiveSection(h);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-canvas/95 backdrop-blur-md border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-10 md:mb-14 py-4">
      <div className="w-full max-w-wide mx-auto">
        <div className="grid grid-cols-3 gap-2 md:gap-3 p-1.5 rounded-md bg-elevated border border-border">
          {siteConfig.experienceTabs.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={cn(
                  "w-full py-3 md:py-4 px-2 text-sm md:text-base font-medium text-center rounded-sm border transition-colors min-h-[48px]",
                  isActive
                    ? "bg-accent-muted border-accent/30 text-accent"
                    : "border-border text-muted hover:text-foreground hover:bg-subtle"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
