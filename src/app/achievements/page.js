"use client";

import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionSubNav from "@/components/sections/SectionSubNav";
import achievements from "@/data/achievements.json";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "20+", label: "Competitions" },
  { value: "1st", label: "IUPC win" },
  { value: "2000+", label: "Problems solved" },
  { value: "3×", label: "ICPC regionalist" },
];

const sections = [
  { id: "icpc", title: "ICPC" },
  { id: "iupc", title: "IUPC" },
  { id: "hackathon", title: "Hackathon" },
];

function AchievementCard({ item, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl bg-elevated border border-border overflow-hidden"
    >
      <div className="relative h-60 lg:h-auto lg:min-h-[280px] bg-subtle">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-sm font-bold font-display bg-accent text-on-accent rounded-lg">
            {item.rank}
          </span>
        </div>
      </div>
      <div className="p-7 md:p-9 flex flex-col justify-center">
        <p className="text-sm font-mono text-tertiary mb-2">
          {item.year}
          {item.team && ` · ${item.team}`}
        </p>
        <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
          {item.title}
        </h3>
        <p className="text-base text-muted leading-relaxed">{item.summary}</p>
      </div>
    </motion.article>
  );
}

function AchievementSection({ id, title, items }) {
  return (
    <section id={id} className="scroll-mt-28">
      <header className="mb-8 md:mb-10">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
          {title}
        </h2>
      </header>
      {items.length > 0 ? (
        <div className="space-y-8">
          {items.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No entries yet.</p>
      )}
    </section>
  );
}

export default function AchievementsPage() {
  const byCategory = (category) =>
    achievements.filter((item) => item.category === category);

  return (
    <PageLayout>
      <SectionHeader
        title="Achievements"
        description="Competitive programming milestones — ICPC regionals, inter-university contests, and years of problem-solving practice."
      />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16 p-7 md:p-9 rounded-xl bg-elevated border border-border"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="text-center">
            <p className="font-display font-bold text-4xl md:text-5xl text-accent mb-2 leading-none">
              {stat.value}
            </p>
            <p className="text-base text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <SectionSubNav tabs={siteConfig.achievementTabs} defaultSection="icpc" />

      <div className="space-y-20 md:space-y-28">
        {sections.map((section) => (
          <AchievementSection
            key={section.id}
            id={section.id}
            title={section.title}
            items={byCategory(section.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
}
