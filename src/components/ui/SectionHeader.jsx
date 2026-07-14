import { cn } from "@/lib/utils";

export default function SectionHeader({
  overline,
  title,
  description,
  className,
  align = "left",
}) {
  return (
    <header
      className={cn(
        "space-y-4 mb-10 md:mb-14",
        align === "center" && "text-center mx-auto max-w-reading",
        className
      )}
    >
      {overline && (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {overline}
        </p>
      )}
      <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
