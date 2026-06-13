import { cn } from "@/lib/utils";

export default function Badge({ children, variant = "default", className }) {
  const variants = {
    default: "bg-subtle border-border text-muted",
    accent: "bg-accent-muted border-accent/30 text-accent",
    status: "bg-subtle border-border text-foreground font-mono uppercase tracking-wider text-[11px]",
  };

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 rounded-sm border text-xs",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
