"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

export default function RoleCard({
  overline,
  title,
  org,
  meta,
  description,
  href,
  index = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="h-full"
    >
      <Link
        href={href}
        className={cn(
          "group flex flex-col h-full p-6 md:p-8 rounded-md",
          "bg-elevated border border-border",
          "hover:bg-subtle hover:-translate-y-0.5 transition-all duration-200"
        )}
      >
        <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-4">
          {overline}
        </p>
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
          {title}
        </h3>
        <p className="text-muted text-sm mb-1">{org}</p>
        {meta && (
          <p className="text-tertiary text-xs font-mono mb-4">{meta}</p>
        )}
        <p className="text-muted text-sm leading-relaxed flex-1">
          {description}
        </p>
        <span className="mt-6 text-sm text-accent group-hover:text-accent-hover transition-colors">
          View {overline.toLowerCase()} →
        </span>
      </Link>
    </motion.div>
  );
}
