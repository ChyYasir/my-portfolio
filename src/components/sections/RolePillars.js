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

  const pillars = [
    {
      overline: "Engineering",
      title: eng.role,
      org: eng.company,
      meta: `${eng.location} · ${eng.duration}`,
      description: eng.highlights[0],
      href: "/experience#engineering",
    },
    {
      overline: "Teaching",
      title: teach.role,
      org: teach.institution,
      meta: `${teach.duration}`,
      description: teach.highlights[0],
      href: "/experience#teaching",
    },
    {
      overline: "Research",
      title: pub.quartile ? `${pub.quartile} · ${pub.status}` : pub.status,
      org: pub.title,
      meta: `${pub.journal} · ${pub.year}`,
      description: pub.contribution,
      href: "/experience#research",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
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
