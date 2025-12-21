import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
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
        <ProjectsSection />
        <WorkShowcase />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
