"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export default function ExperienceTabs({ activeTab, onTabChange }) {
  return (
    <div className="sticky top-16 z-40 bg-base/90 backdrop-blur-md border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-12">
      <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3 max-w-wide mx-auto">
        {siteConfig.experienceTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium whitespace-nowrap rounded-sm transition-colors min-h-[44px]",
              activeTab === tab.id
                ? "text-foreground border-b-2 border-accent"
                : "text-muted hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function useExperienceTab(defaultTab = "engineering") {
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (["engineering", "teaching", "research"].includes(hash)) {
      setActiveTab(hash);
    }

    const onHashChange = () => {
      const h = window.location.hash.replace("#", "");
      if (["engineering", "teaching", "research"].includes(h)) {
        setActiveTab(h);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const changeTab = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  return [activeTab, changeTab];
}
