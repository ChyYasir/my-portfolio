"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { heroStagger, heroItem } from "@/lib/motion";

const accentLink =
  "text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors";

export default function Hero() {
  const { engineering, teaching, research } = siteConfig.roles;

  return (
    <section className="pt-8 pb-14 md:pt-16 md:pb-20">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.85fr] gap-10 lg:gap-16 items-center"
      >
        {/* Text column */}
        <div className="order-last lg:order-first">
          <motion.h2
            variants={heroItem}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground"
          >
            Hi, I&apos;m <span className="uppercase">Yasir Rahman</span>
          </motion.h2>

          <motion.div
            variants={heroItem}
            className="mt-8 space-y-5 text-lg md:text-xl text-muted leading-relaxed"
          >
            <p>
              I&apos;m a{" "}
              <span className="font-semibold text-foreground">
                software engineer
              </span>{" "}
              at{" "}
              <Link href="/experience#engineering" className={accentLink}>
                {engineering.org}
              </Link>
              , building production data pipelines, platform integrations, and
              backend services that move real volume. Alongside that, I teach
              as an{" "}
              <span className="font-semibold text-foreground">
                Adjunct Lecturer
              </span>{" "}
              at the{" "}
              <span className="font-semibold text-foreground">
                Department of Computer Science and Engineering
              </span>
              ,{" "}
              <a
                href="https://www.iiuc.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className={accentLink}
              >
                IIUC
              </a>
              , where I take courses on Computer Algorithms, Compiler Design,
              and Competitive Programming.
            </p>
            <p>
              My peer-reviewed work is{" "}
              <span className="text-foreground font-medium">
                {research.status.toLowerCase()}
              </span>{" "}
              in a{" "}
              <Link href="/experience#research" className={accentLink}>
                {research.badge} journal
              </Link>
              . I also compete in programming contests, with three ICPC Asia
              regional appearances and an inter-university contest{" "}
              <Link href="/achievements#iupc" className={accentLink}>
                championship
              </Link>
              .
            </p>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-on-accent font-semibold hover:bg-accent-hover transition-colors"
            >
              View my work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-subtle transition-colors"
            >
              Download résumé
            </a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-10 flex items-start gap-3 p-5 rounded-xl border border-accent/30 bg-accent-muted"
          >
            <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-semibold text-foreground text-lg">
                Research accepted in a {research.badge} journal
              </p>
              <p className="text-muted mt-1 leading-relaxed">
                Peer-reviewed publication in a top-quartile journal.{" "}
                <Link href="/experience#research" className={accentLink}>
                  Read the publication
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          variants={heroItem}
          className="order-first lg:order-last w-full"
        >
          <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:max-w-[380px] rounded-2xl overflow-hidden border border-border bg-subtle">
            <Image
              src="/images/profile/yasir-2.png"
              alt={siteConfig.name}
              fill
              sizes="(max-width: 1024px) 24rem, 30vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
