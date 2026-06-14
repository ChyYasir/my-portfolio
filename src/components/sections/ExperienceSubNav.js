"use client";

import SectionSubNav from "@/components/sections/SectionSubNav";
import { siteConfig } from "@/lib/site";

export default function ExperienceSubNav() {
  return (
    <SectionSubNav
      tabs={siteConfig.experienceTabs}
      defaultSection="engineering"
    />
  );
}
