import { Film, BookOpen, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';

/* ------------------ Highlights ------------------ */
const highlights = [
  { icon: Film, text: 'Heart lies in ad filming and production' },
  { icon: BookOpen, text: 'Published author of "AROUND YOU" (2022)' },
];

/* ------------------ Slider Images ------------------ */
const sliderImages = [
  '/images/about-slider/poster-1.jpg',
  '/images/about-slider/poster-2.jpg',
  '/images/about-slider/poster-3.jpg',
  '/images/about-slider/poster-4.jpg',
  '/images/about-slider/poster-5.jpg',
  '/images/about-slider/poster-6.jpg',
];

// duplicate for seamless loop
const loopImages = [...sliderImages, ...sliderImages];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* -------- AUTO SLIDE (3s) -------- */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  /* -------- SEAMLESS LOOP RESET -------- */
  useEffect(() => {
    if (!sliderRef.current) return;

    if (index === sliderImages.length) {
      setTimeout(() => {
        sliderRef.current!.style.transition = 'none';
        setIndex(0);
        sliderRef.current!.offsetHeight; // force reflow
        sliderRef.current!.style.transition = 'transform 700ms ease-in-out';
      }, 700);
    }
  }, [index]);

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-section-muted to-background"
    >
      <div className="container-width" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-14 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">The Person Behind the Work</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-7 pt-1">
            <p className={`text-lg text-foreground leading-relaxed scroll-reveal ${isVisible ? 'visible' : ''}`}>
              I'm a <strong>digital media and marketing professional</strong> with hands-on
              experience across content strategy, design, and video production.
            </p>

            <p className={`text-lg text-foreground leading-relaxed scroll-reveal ${isVisible ? 'visible' : ''}`}>
              My approach begins with understanding
              <span className="text-accent font-semibold">
                {' '}audience behavior, brand gaps, and platform dynamics
              </span>{' '}
              before choosing formats or tools.
            </p>

            <p className={`text-lg text-foreground leading-relaxed scroll-reveal ${isVisible ? 'visible' : ''}`}>
              My <strong>obsession with detailing</strong> helps me give a different
              perspective to a world obsessed with stories.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* EDUCATION */}
            <div className={`card-elevated scroll-reveal ${isVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="pl-4 border-l-2 border-accent">
                <h4 className="font-bold text-foreground">Bachelor of Technology</h4>
                <p className="text-accent font-medium">Anurag University</p>
                <p className="text-muted-foreground">2021 – 2025</p>
              </div>
            </div>

            {/* QUOTE — BETWEEN BOXES */}
            <div className="text-center py-2 scroll-reveal">
              <p className="text-muted-foreground italic">
                “In today’s world, relatability is the new reality.”
              </p>
            </div>

            {/* SLIDER */}
            <div
              className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="relative w-full h-[360px] bg-white rounded-3xl shadow-card overflow-hidden">
                {/* LABEL INSIDE SLIDER */}
                <div className="absolute top-4 right-5 z-20 text-xs font-semibold tracking-widest text-slate-600 uppercase">
                  Storytelling through color
                </div>

                {/* GRADIENT EDGES */}
                <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-emerald-100/60 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-emerald-100/60 to-transparent z-10" />

                <div
                  ref={sliderRef}
                  className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {loopImages.map((src, i) => (
                    <div
                      key={i}
                      className="w-full h-full flex-shrink-0 p-4 flex items-center justify-center"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-contain rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
