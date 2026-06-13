"use client";

import { motion } from "framer-motion";
import snapshot from "@/data/snapshot.json";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Snapshot() {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {snapshot.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="text-center md:text-left"
          >
            <p className="font-display text-3xl md:text-4xl text-foreground mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
