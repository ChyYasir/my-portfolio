"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    <motion.div variants={fadeUp} custom={index} className="h-full">
      <Link
        href={href}
        className={cn(
          "group flex flex-col h-full p-7 md:p-8 rounded-xl",
          "bg-elevated border border-border",
          "hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
        )}
      >
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {overline}
          </p>
          <ArrowUpRight className="w-5 h-5 text-tertiary group-hover:text-accent transition-colors" />
        </div>
        <h3 className="font-display font-semibold text-2xl text-foreground leading-tight mb-2">
          {title}
        </h3>
        <p className="text-base text-muted mb-1">{org}</p>
        {meta && (
          <p className="text-sm font-mono text-tertiary mb-5">{meta}</p>
        )}
        <p className="text-base text-muted leading-relaxed flex-1">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
