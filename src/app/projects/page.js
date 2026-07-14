"use client";

import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Projects"
        description="Production systems, client work, and side projects, built with a focus on data, scale, and clean architecture."
      />

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            id={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="scroll-mt-28 rounded-xl bg-elevated border border-border overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {project.images?.length > 0 && (
                <div className="relative h-60 lg:h-auto lg:min-h-[300px] bg-subtle">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Tag>{project.type}</Tag>
                  <Tag>{project.status}</Tag>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                  {project.title}
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  {project.overview}
                </p>
                {project.outcome && (
                  <p className="text-base text-foreground leading-relaxed mb-5 border-l-2 border-accent pl-4">
                    {project.outcome}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
