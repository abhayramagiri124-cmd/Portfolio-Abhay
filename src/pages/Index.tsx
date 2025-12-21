import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorkShowcase from '@/components/WorkShowcase';
import ProjectsSection from '@/components/ProjectsSection';
import BeyondWork from '@/components/BeyondWork';
import ContactSection from '@/components/ContactSection';
import StrategyToExecutionBridge from '@/components/StrategyToExecutionBridge';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <StrategyToExecutionBridge />
        <WorkShowcase />
        <BeyondWork />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
