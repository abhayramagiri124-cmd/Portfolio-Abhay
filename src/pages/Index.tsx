import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperinceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkShowcase from '@/components/WorkShowcase';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Header />

      {/* ❌ NO padding, NO margin here */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WorkShowcase />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
