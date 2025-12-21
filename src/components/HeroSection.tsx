import { useState, useEffect } from 'react';
import { Linkedin, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quotes = [
  'I prefer using AI as a tool, not a creator.',
  "In today's world, relatability is the new reality.",
  'Above all, I value the learner side of myself.',
];

const skillChips = [
  'Content Strategy',
  'Ad Scripting',
  'Social Media',
  'Video Editing',
  'Graphic Design',
];

const stats = [
  { number: '50+', label: 'Shoots Executed' },
  { number: '10+', label: 'Pages Managed' },
  { number: '40+', label: 'Videos Edited' },
];

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentQuote((prev) => (prev + 1) % quotes.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pb-16 section-padding overflow-hidden"
      style={{
        backgroundImage: "url('/hero/hero-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 🔹 Overlay for depth & mobile readability */}
      <div className="absolute inset-0 bg-black/15 md:bg-black/5 pointer-events-none" />

      <div className="relative z-10 container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 animate-slide-up">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            border border-emerald-300/40
                            bg-emerald-200/20
                            backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
              <span className="text-sm font-medium text-emerald-900">
                Available for new opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Hi, I&apos;m <span className="text-primary">Abhay</span>
              <br />
              <span className="text-primary">Ramagiri</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground font-medium mb-4">
              Creator · Digital Media & Marketing Enthusiast · Storyteller
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-6 max-w-xl">
              I craft stories, scripts, and campaigns that turn brands into experiences.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skillChips.map((skill, index) => (
                <span
                  key={skill}
                  className="skill-chip opacity-0 animate-slide-up"
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="heroOutline" size="lg" asChild>
                <a
                  href="https://linkedin.com/in/abhay-ramagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              {/* Glow CTA */}
              <a href="#projects" className="relative group">
                <span className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse" />
                <Button variant="heroOutline" size="lg" className="relative">
                  <Eye className="h-5 w-5" />
                  View My Work
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="opacity-0 animate-slide-up"
                  style={{
                    animationDelay: `${0.6 + index * 0.1}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <p className="text-3xl font-bold text-white/90 drop-shadow-sm">
                    {stat.number}
                  </p>

                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 scale-105" />

              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src="/lovable-uploads/93e074cd-60d1-4bcc-89ce-bad637329d15.jpg"
                  alt="Abhay Ramagiri"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
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
          <a href="#about" className="text-muted-foreground hover:text-primary">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
