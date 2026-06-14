"use client";

import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import achievements from "@/data/achievements.json";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "20+", label: "Competitions" },
  { value: "1st", label: "IUPC win" },
  { value: "2000+", label: "Problems solved" },
  { value: "3×", label: "ICPC regionalist" },
];

export default function AchievementsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Achievements"
        description="Competitive programming milestones — ICPC regionals, inter-university contests, and years of problem-solving practice."
      />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 md:p-8 rounded-md bg-elevated border border-border"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="text-center">
            <p className="font-display text-3xl text-foreground mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="space-y-8">
        {achievements.map((item, i) => (
          <motion.article
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-md bg-elevated border border-border overflow-hidden"
          >
            <div className="relative h-56 lg:h-64 bg-subtle">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-mono bg-canvas/80 backdrop-blur-sm border border-border rounded-sm text-foreground">
                  Rank: {item.rank}
                </span>
                {item.team && (
                  <span className="px-3 py-1 text-xs font-mono bg-canvas/80 backdrop-blur-sm border border-border rounded-sm text-muted">
                    {item.team}
                  </span>
                )}
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <p className="text-xs font-mono text-tertiary mb-2">{item.year}</p>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-3">
                {item.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
