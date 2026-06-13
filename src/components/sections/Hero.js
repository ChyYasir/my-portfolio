"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroStagger, heroItem } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { engineering, teaching } = siteConfig.roles;

  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0 order-1 lg:order-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-lg bg-accent-muted blur-3xl opacity-40" />
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-border">
            <Image
              src="/images/profile/yasir-2.png"
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2"
        >
          <motion.h1
            variants={heroItem}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div variants={heroItem} className="space-y-1 mb-4">
            <p className="text-muted text-base md:text-lg">
              {engineering.title} · {engineering.org}
            </p>
            <p className="text-muted text-base md:text-lg">
              {teaching.title} · {teaching.org}
            </p>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
          >
            {["Engineer", "Lecturer", "Researcher"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 text-xs font-medium rounded-sm border border-accent/40 text-accent"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={heroItem}
            className="text-muted text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
          >
            I build data systems in production, teach at IIUC Chittagong,
            and publish research in peer-reviewed journals.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Button href="/experience">View experience</Button>
            <Button href="/updates" variant="ghost">
              Latest update →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
