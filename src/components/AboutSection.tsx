import { Film, BookOpen, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

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
  '/images/about-slider/poster-6.jpg'
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeSlide, setActiveSlide] = useState(0);

  /* AUTO SLIDE EVERY 1s */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-section-muted to-background"
    >
      <div className="container-width" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">The Person Behind the Work</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-6">
            <p
              className={`text-lg text-foreground leading-relaxed scroll-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              I'm a <strong>digital media and marketing professional</strong> with hands-on
              experience across content strategy, design, and video production. I enjoy
              working in collaborative team environments, and corporate communication is
              one of my strong areas.
            </p>

            <p
              className={`text-lg text-foreground leading-relaxed scroll-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '180ms' }}
            >
              My approach begins with understanding the problem —
              <span className="text-accent font-semibold">
                {' '}
                audience behavior, brand gaps, and platform dynamics
              </span>{' '}
              before choosing formats or tools. I focus on building content that aligns
              creativity with <strong>strategy, consistency, and measurable impact.</strong>
            </p>

            <p
              className={`text-lg text-foreground leading-relaxed scroll-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '260ms' }}
            >
              My <strong>obsession with detailing</strong> helps me give a different
              perspective to a world obsessed with stories.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 scroll-reveal ${
                    isVisible ? 'visible' : ''
                  }`}
                  style={{ transitionDelay: `${340 + index * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* POSTER SLIDER */}
            <div
              className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative w-full h-[360px] bg-white rounded-3xl shadow-card overflow-hidden">
                <div
                  className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${activeSlide * 100}%)`,
                  }}
                >
                  {sliderImages.map((src, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 flex items-center justify-center p-4"
                    >
                      <img
                        src={src}
                        alt={`Poster ${index + 1}`}
                        className="w-full h-full object-contain rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EDUCATION CARD (MOVED BELOW SLIDER) */}
            <div
              className={`card-elevated scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '380ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
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

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground italic text-center">
                  "In today's world, relatability is the new reality"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
