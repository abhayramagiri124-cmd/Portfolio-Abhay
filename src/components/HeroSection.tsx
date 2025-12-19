import { useState, useEffect } from 'react';
import { FileText, Linkedin, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Resume file - replace this path with your actual resume file
// Upload your resume (PDF recommended) and update the path here
const resumeFile = '/placeholder.svg';

const quotes = [
  "I prefer using AI as a tool, not a creator.",
  "In today's world, relatability is the new reality.",
  "Above all, I value the learner side of myself."
];

const skillChips = ['Content Strategy', 'Ad Scripting', 'Social Media', 'Video Editing', 'Graphic Design'];

const stats = [
  { number: '50+', label: 'Shoots Executed' },
  { number: '10+', label: 'Pages Managed' },
  { number: '40+', label: 'Videos Edited' }
];

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleResumeClick = () => {
    if (resumeFile === '/placeholder.svg') {
      // Show a message if resume is not uploaded
      alert('Resume not uploaded yet. Replace the resumeFile path with your actual resume.');
      return;
    }
    // Open resume in new tab
    window.open(resumeFile, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-slide-up">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
              <span className="text-sm font-medium text-primary">Available for new opportunities</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Hi, I'm <span className="text-primary">Abhay</span>
              <br />
              <span className="text-primary">Ramagiri</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground font-medium mb-4">
              Creator · Digital Media & Marketing Enthusiast · Storyteller
            </p>

            {/* Value Proposition */}
            <p className="text-muted-foreground text-lg mb-6 max-w-xl">
              I craft stories, scripts, and campaigns that turn brands into experiences.
            </p>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skillChips.map((skill, index) => (
                <span
                  key={skill}
                  className="skill-chip opacity-0 animate-slide-up"
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" onClick={handleResumeClick}>
                <FileText className="h-5 w-5" />
                View Resume
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://linkedin.com/in/abhay-ramagiri" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#work">
                  <Eye className="h-5 w-5" />
                  View My Work
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="opacity-0 animate-slide-up"
                  style={{
                    animationDelay: `${0.6 + index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <p className="stat-number">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 scale-105" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  alt="Abhay Ramagiri - Digital Media Professional"
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/938ff01d-fb8d-4256-8da1-a5110303a003.jpg"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-card rounded-2xl shadow-card p-4 max-w-[280px] border border-border">
                <p className="text-sm text-muted-foreground italic transition-opacity duration-500">
                  "{quotes[currentQuote]}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
