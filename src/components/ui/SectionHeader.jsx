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
        "space-y-3 mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-reading",
        className
      )}
    >
      {overline && (
        <p className="text-xs font-sans uppercase tracking-[0.08em] text-tertiary">
          {overline}
        </p>
      )}
      <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-muted max-w-reading leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
