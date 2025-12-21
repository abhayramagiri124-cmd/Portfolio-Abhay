import { useState, useEffect } from 'react';
import { Linkedin, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HEADER_HEIGHT = '96px'; // matches header height

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
      className="relative min-h-screen overflow-hidden hero-bg"
      style={{
        paddingTop: HEADER_HEIGHT, // ✅ THIS FIXES THE GAP
        backgroundImage: "url('/hero/hero-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/5 pointer-events-none" />

      <div className="relative z-10 container-width py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-emerald-300/40 bg-emerald-200/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-emerald-900">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">Abhay</span><br />
              <span className="text-primary">Ramagiri</span>
            </h1>

            <p className="text-lg md:text-xl font-medium mb-4">
              Creator · Digital Media & Marketing Enthusiast · Storyteller
            </p>

            <p className="text-muted-foreground text-lg mb-6 max-w-xl">
              I craft stories, scripts, and campaigns that turn brands into experiences.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {skillChips.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-12">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://linkedin.com/in/abhay-ramagiri" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <a href="#projects" className="relative group">
                <span className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-60 group-hover:opacity-90 transition" />
                <Button variant="heroOutline" size="lg" className="relative">
                  <Eye className="h-5 w-5" />
                  View My Work
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 scale-105" />
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src="/lovable-uploads/93e074cd-60d1-4bcc-89ce-bad637329d15.jpg"
                  alt="Abhay Ramagiri"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-card p-4 max-w-[260px] border">
                <p className="text-sm italic text-muted-foreground">
                  "{quotes[currentQuote]}"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <a href="#about">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
