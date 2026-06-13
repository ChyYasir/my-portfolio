"use client";

import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ExperienceTabs, {
  useExperienceTab,
} from "@/components/sections/ExperienceTabs";
import PublicationCard from "@/components/ui/PublicationCard";
import engineeringData from "@/data/experience.engineering.json";
import teachingData from "@/data/experience.teaching.json";
import publications from "@/data/research.publications.json";

export default function ExperiencePage() {
  const [activeTab, changeTab] = useExperienceTab("engineering");

  return (
    <PageLayout>
      <SectionHeader
        title="Experience"
        description="I build software and data systems at Bevy Commerce, teach as an Adjunct Lecturer at International Islamic University Chittagong, and contribute to peer-reviewed research — including a publication accepted in a Q1 journal."
      />

      <ExperienceTabs activeTab={activeTab} onTabChange={changeTab} />

      {activeTab === "engineering" && (
        <section id="engineering" className="scroll-mt-32">
          <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-8">
            Engineering
          </p>
          <ExperienceTimeline items={engineeringData} />
        </section>
      )}

      {activeTab === "teaching" && (
        <section
          id="teaching"
          className="scroll-mt-32 rounded-md bg-surface-teaching p-6 md:p-8"
        >
          <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-8">
            Teaching
          </p>
          <ExperienceTimeline items={teachingData} />
        </section>
      )}

      {activeTab === "research" && (
        <section id="research" className="scroll-mt-32">
          <p className="text-xs uppercase tracking-[0.08em] text-tertiary mb-8">
            Research
          </p>
          <div className="space-y-6">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
