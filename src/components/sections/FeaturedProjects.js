"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Tag from "@/components/ui/Tag";
import { fadeUp } from "@/lib/motion";
import projects from "@/data/projects.json";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-2">
            Featured work
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Selected projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm text-accent hover:text-accent-hover transition-colors hidden sm:block"
        >
          All projects →
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
            className="group rounded-md bg-elevated border border-border overflow-hidden hover:bg-subtle hover:-translate-y-0.5 transition-all duration-200"
          >
            <Link href={`/projects#${project.id}`}>
              {project.images?.[0] && (
                <div className="relative h-48 bg-subtle">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
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
        className="text-sm text-accent hover:text-accent-hover transition-colors sm:hidden mt-6 inline-block"
      >
        All projects →
      </Link>
    </section>
  );
}
