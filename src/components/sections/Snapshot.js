"use client";

import { motion } from "framer-motion";
import snapshot from "@/data/snapshot.json";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Snapshot() {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {snapshot.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="min-w-0">
            <p className="font-display font-bold text-4xl md:text-5xl text-foreground leading-none tracking-tight truncate">
              {stat.value}
            </p>
            <p className="text-base text-muted mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
