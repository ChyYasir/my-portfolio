import { cn } from "@/lib/utils";

export default function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[13px] px-2.5 py-1 rounded-md",
        "bg-subtle border border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
