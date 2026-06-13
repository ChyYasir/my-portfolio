import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import RolePillars from "@/components/sections/RolePillars";
import Snapshot from "@/components/sections/Snapshot";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestUpdate from "@/components/sections/LatestUpdate";
import ContactStrip from "@/components/sections/ContactStrip";

export default function Home() {
  return (
    <Container size="wide">
      <Hero />
      <RolePillars />
      <Snapshot />
      <FeaturedProjects />
      <LatestUpdate />
      <ContactStrip />
    </Container>
  );
}
