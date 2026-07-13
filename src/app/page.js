import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import Snapshot from "@/components/sections/Snapshot";
import RolePillars from "@/components/sections/RolePillars";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AchievementsHighlight from "@/components/sections/AchievementsHighlight";
import LatestUpdate from "@/components/sections/LatestUpdate";
import ContactStrip from "@/components/sections/ContactStrip";

export default function Home() {
  return (
    <Container size="content">
      <Hero />
      <Snapshot />
      <RolePillars />
      <FeaturedProjects />
      <AchievementsHighlight />
      <LatestUpdate />
      <ContactStrip />
    </Container>
  );
}
