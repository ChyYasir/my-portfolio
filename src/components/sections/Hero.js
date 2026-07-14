"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { heroStagger, heroItem } from "@/lib/motion";
import SocialLinks from "@/components/ui/SocialLinks";

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
              I have represented{" "}
              <span className="font-semibold text-foreground">CUET</span> at the{" "}
              <span className="font-semibold text-foreground">
                ICPC Dhaka Regional
              </span>{" "}
              and taken part in around{" "}
              <span className="font-semibold text-foreground">
                20 IUPCs and Hackathons
              </span>
              . You can{" "}
              <Link href="/achievements" className={accentLink}>
                view my achievements
              </Link>{" "}
              for the full picture.
            </p>
            <p>
              I also have research experience, including a publication in a{" "}
              <span className="text-foreground font-medium">
                {research.badge}
              </span>
              . For a good overview, take a look at my{" "}
              <Link href="/experience#research" className={accentLink}>
                Research Experience
              </Link>
              .
            </p>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-white dark:text-black font-semibold hover:bg-accent-hover transition-colors"
            >
              View my Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-subtle transition-colors"
            >
              Download CV
            </a>
          </motion.div>

        </div>

        {/* Image column */}
        <motion.div
          variants={heroItem}
          className="order-first lg:order-last w-full"
        >
          <div className="w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:max-w-[380px]">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border bg-subtle">
              <Image
                src="/images/profile/yasir-2.png"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 24rem, 30vw"
                className="object-cover"
                priority
              />
            </div>
            <SocialLinks className="mt-6" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
