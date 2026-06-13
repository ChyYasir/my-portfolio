import Link from "next/link";
import updates from "@/data/updates.json";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function LatestUpdate() {
  const latest =
    updates.find((u) => u.featured) || updates[0];

  if (!latest) return null;

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-2">
        Latest · {formatDate(latest.date)}
      </p>
      <Link
        href={latest.link || "/updates"}
        className="group block p-6 md:p-8 rounded-md bg-elevated border border-border hover:bg-subtle transition-colors"
      >
        <h2 className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors mb-2">
          {latest.title}
        </h2>
        <p className="text-muted text-sm leading-relaxed max-w-reading">
          {latest.summary}
        </p>
        <span className="inline-block mt-4 text-sm text-accent">
          Read all updates →
        </span>
      </Link>
    </section>
  );
}
