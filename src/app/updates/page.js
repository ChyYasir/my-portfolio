"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import UpdateCard from "@/components/ui/UpdateCard";
import updates from "@/data/updates.json";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "role", label: "Engineering" },
  { id: "teaching", label: "Teaching" },
  { id: "research", label: "Research" },
  { id: "project", label: "Projects" },
  { id: "achievement", label: "Achievements" },
];

export default function UpdatesPage() {
  const [filter, setFilter] = useState("all");

  const sorted = [...updates].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filtered =
    filter === "all"
      ? sorted
      : sorted.filter((u) => u.type === filter);

  return (
    <PageLayout size="content">
      <SectionHeader
        title="Updates"
        description="Recent milestones across engineering, teaching, research, and competitive programming."
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-sm border transition-colors min-h-[44px]",
              filter === f.id
                ? "bg-accent-muted border-accent/30 text-accent"
                : "border-border text-muted hover:text-foreground hover:bg-subtle"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
    </PageLayout>
  );
}
