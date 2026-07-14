import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  size = "wide",
}) {
  const sizes = {
    reading: "max-w-reading",
    content: "max-w-content",
    wide: "max-w-wide",
    site: "max-w-site",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
