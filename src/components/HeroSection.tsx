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
      className="relative min-h-screen pt-28 pb-20 overflow-hidden"
      style={{
        backgroundImage: "url('/hero/hero-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/0 pointer-events-none" />

      <div className="relative container-width">
        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE — TOP on mobile, LEFT on desktop */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 scale-105" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src="/lovable-uploads/93e074cd-60d1-4bcc-89ce-bad637329d15.jpg"
                  alt="Abhay Ramagiri"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote bubble */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-8 lg:translate-x-0 bg-card rounded-2xl shadow-card p-4 max-w-[260px] border border-border">
                <p className="text-sm text-muted-foreground italic text-center lg:text-left">
                  "{quotes[currentQuote]}"
                </p>
              </div>
            </div>
          </div>

          {/* TEXT — BELOW on mobile, RIGHT on desktop */}
          <div className="w-full text-center lg:text-left">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 bg-white/20 backdrop-blur mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Available for new opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Hi, I&apos;m Abhay
              <br />
              Ramagiri
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 font-medium mb-4">
              Creator · Digital Media & Marketing Enthusiast · Storyteller
            </p>

            {/* Description */}
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              I craft stories, scripts, and campaigns that turn brands into
              experiences.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {skillChips.map((skill) => (
                <span key={skill} className="skill-chip bg-white/90 text-foreground">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
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

              {/* View My Work → PROJECTS */}
              <a href="#projects" className="relative group">
                <span className="absolute inset-0 rounded-xl bg-primary/40 blur-lg opacity-60 group-hover:opacity-90 transition duration-500" />
                <Button variant="heroOutline" size="lg" className="relative">
                  <Eye className="h-5 w-5" />
                  View My Work
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">
                    {stat.number}
                  </p>
                  <p className="text-sm text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-20 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
