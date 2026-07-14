"use client";

import { motion } from "framer-motion";
import RoleCard from "@/components/ui/RoleCard";
import { staggerContainer } from "@/lib/motion";
import engineeringData from "@/data/experience.engineering.json";
import teachingData from "@/data/experience.teaching.json";
import publications from "@/data/research.publications.json";

export default function RolePillars() {
  const eng = engineeringData[0];
  const teach = teachingData[0];
  const pub = publications.find((p) => p.featured) || publications[0];

  const highlightText = (h) => (typeof h === "string" ? h : h?.text);

  const pillars = [
    {
      overline: "Industry",
      title: eng.role,
      org: eng.company,
      meta: `${eng.location} · ${eng.duration}`,
      description: highlightText(eng.highlights[0]),
      href: "/experience#engineering",
    },
    {
      overline: "Academia",
      title: teach.role,
      org: teach.institution,
      meta: `${teach.duration}`,
      description: highlightText(teach.highlights[0]),
      href: "/experience#teaching",
    },
    {
      overline: "Research",
      title: pub.quartile ? `${pub.quartile} Journal · ${pub.status}` : pub.status,
      org: pub.title,
      meta: `${pub.journal} · ${pub.year}`,
      description: pub.contribution,
      href: "/experience#research",
    },
  ];

  return (
    <section className="py-14 md:py-20 border-t border-border">
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
        Three tracks, one focus
      </h2>
      <p className="text-lg text-muted mb-10 max-w-2xl">
        Engineering, teaching, and research, each feeding the other.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {pillars.map((pillar, i) => (
          <RoleCard key={pillar.overline} index={i} {...pillar} />
        ))}
      </motion.div>
    </section>
  );
}
