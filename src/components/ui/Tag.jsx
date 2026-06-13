import { cn } from "@/lib/utils";

export default function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-xs px-2.5 py-1 rounded-sm",
        "bg-subtle border border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
