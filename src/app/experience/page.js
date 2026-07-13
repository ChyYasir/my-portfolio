"use client";

import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ExperienceSubNav from "@/components/sections/ExperienceSubNav";
import PublicationCard from "@/components/ui/PublicationCard";
import engineeringData from "@/data/experience.engineering.json";
import teachingData from "@/data/experience.teaching.json";
import publications from "@/data/research.publications.json";

function TrackSection({ id, title, surface, children }) {
  const surfaceClass =
    surface === "teaching"
      ? "rounded-xl bg-surface-teaching p-6 md:p-8"
      : surface === "research"
        ? "space-y-6"
        : undefined;

  return (
    <section id={id} className="scroll-mt-28">
      <header className="mb-8 md:mb-10">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
          {title}
        </h2>
      </header>
      <div className={surfaceClass}>{children}</div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <PageLayout>
      <SectionHeader title="Experience" className="mb-8 md:mb-10" />

      <ExperienceSubNav />

      <div className="space-y-20 md:space-y-28">
        <TrackSection id="engineering" title="Engineering">
          <ExperienceTimeline items={engineeringData} />
        </TrackSection>

        <TrackSection id="teaching" title="Teaching" surface="teaching">
          <ExperienceTimeline items={teachingData} />
        </TrackSection>

        <TrackSection id="research" title="Research" surface="research">
          <div className="space-y-6">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </TrackSection>
      </div>
    </PageLayout>
  );
}
