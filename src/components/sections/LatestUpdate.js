import Link from "next/link";
import { ArrowRight } from "lucide-react";
import updates from "@/data/updates.json";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function LatestUpdate() {
  const latest = updates.find((u) => u.featured) || updates[0];
  if (!latest) return null;

  return (
    <section className="py-14 md:py-20 border-t border-border">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
        Latest update · {formatDate(latest.date)}
      </p>
      <Link
        href={latest.link || "/updates"}
        className="group block p-7 md:p-9 rounded-xl bg-elevated border border-border hover:border-accent/40 transition-colors"
      >
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors mb-3">
          {latest.title}
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          {latest.summary}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-6 text-base text-accent">
          Read all updates
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </Link>
    </section>
  );
}
