"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-base font-medium hover:bg-accent-hover transition-colors",
  ghost:
    "text-muted hover:text-foreground underline-offset-4 hover:underline transition-colors",
  outline:
    "border border-border text-foreground hover:bg-subtle transition-colors",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-sm",
  md: "px-5 py-2.5 text-sm rounded-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  external,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("/Resume");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
