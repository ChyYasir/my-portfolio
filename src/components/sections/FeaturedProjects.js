"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Tag from "@/components/ui/Tag";
import { fadeUp } from "@/lib/motion";
import projects from "@/data/projects.json";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="py-14 md:py-20 border-t border-border">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
            Selected work
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Things I&apos;ve shipped
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-1.5 text-base text-accent hover:text-accent-hover transition-colors shrink-0"
        >
          All projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <motion.article
            key={project.id}
            id={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl bg-elevated border border-border overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
          >
            <Link href={`/projects#${project.id}`}>
              {project.images?.[0] && (
                <div className="relative h-52 bg-subtle overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 md:p-7">
                <h3 className="font-display font-semibold text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-5 line-clamp-2">
                  {project.outcome || project.overview}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <Link
        href="/projects"
        className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-base text-accent"
      >
        All projects
        <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
