import { FadeIn } from "@/components/layout/FadeIn";
import ContactSection from "@/components/sections/ContactSection";
import DostSection from "@/components/sections/DostSection";
import FeatureSection from "@/components/sections/FeatureSection";
import GuruSection from "@/components/sections/GuruSection";
import HeroSection from "@/components/sections/HeroSection";
import PartnerSection from "@/components/sections/PartnerSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TimelineSection from "@/components/sections/TimelineSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <FadeIn delay={0.5}>
        <DostSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <GuruSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <FeatureSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <TimelineSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <TeamSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <PartnerSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <ServiceSection />
      </FadeIn>

      <FadeIn delay={0.5}>
        <ContactSection />
      </FadeIn>
    </>
  );
};

export default Home;
