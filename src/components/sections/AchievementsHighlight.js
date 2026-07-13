"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import achievements from "@/data/achievements.json";

export default function AchievementsHighlight() {
  const champion = achievements.find((a) => a.rank === "1st");
  const others = achievements
    .filter((a) => a.id !== champion?.id)
    .slice(0, 4);

  return (
    <section className="py-14 md:py-20 border-t border-border">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
            Competitive programming
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Contest track record
          </h2>
        </div>
        <Link
          href="/achievements"
          className="hidden sm:inline-flex items-center gap-1.5 text-base text-accent hover:text-accent-hover transition-colors shrink-0"
        >
          All achievements
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {champion && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0 rounded-xl overflow-hidden border border-accent/30 bg-elevated mb-6"
        >
          <div className="relative h-56 lg:h-auto lg:min-h-[260px] bg-subtle">
            <Image
              src={champion.image}
              alt={champion.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-7 md:p-9 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-accent-muted text-accent text-sm font-semibold mb-5">
              <Trophy className="w-4 h-4" />
              Champion · 1st place
            </div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-3">
              {champion.title}
            </h3>
            <p className="text-base text-muted leading-relaxed">
              {champion.summary}
            </p>
            <p className="text-sm font-mono text-tertiary mt-5">
              {champion.team} · {champion.year}
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {others.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            className="p-5 rounded-xl bg-elevated border border-border hover:border-accent/40 transition-colors"
          >
            <p className="font-display font-bold text-3xl text-accent leading-none">
              {item.rank}
            </p>
            <p className="text-sm font-medium text-foreground mt-3 leading-snug line-clamp-2">
              {item.title}
            </p>
            <p className="text-xs font-mono text-tertiary mt-2">{item.year}</p>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/achievements"
        className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-base text-accent"
      >
        All achievements
        <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
