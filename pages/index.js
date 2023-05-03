import LandingSection from "@/components/LandingSection";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import WorksSection from "@/components/WorksSection";
import Contact from "@/components/Contact";
import FooterSection from "@/components/FooterSection";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function index() {
  return (
    <>
      <HamburgerMenu />
      <LandingSection />
      <IntroSection />
      <SkillsSection />
      <WorksSection />
      <Contact />
      <FooterSection />
    </>
  );
}
