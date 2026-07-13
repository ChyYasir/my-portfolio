import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

const typeLabels = {
  role: "Role",
  project: "Project",
  teaching: "Teaching",
  research: "Research",
  achievement: "Achievement",
  learning: "Learning",
  speaking: "Speaking",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function UpdateCard({ update, className }) {
  const href = update.link || "/updates";

  return (
    <article
      className={cn(
        "group grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4 p-6 md:p-7 rounded-xl",
        "bg-elevated border border-border hover:border-accent/40 transition-colors",
        className
      )}
    >
      <time className="text-sm font-mono text-tertiary pt-1">
        {formatDate(update.date)}
      </time>
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-accent">
            {typeLabels[update.type] || update.type}
          </span>
          {update.tags?.slice(0, 2).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Link href={href}>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors mb-2">
            {update.title}
          </h3>
        </Link>
        <p className="text-base text-muted leading-relaxed">{update.summary}</p>
      </div>
    </article>
  );
}
