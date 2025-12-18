import { Bike, Film, Puzzle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const hobbies = [
  { icon: Bike, label: 'Cycling' },
  { icon: Film, label: 'Decoding films' },
  { icon: Sparkles, label: 'Creating personal content' },
  { icon: Puzzle, label: "Rubik's Cube (under 5 min)" },
];

const BeyondWork = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-width">
        {/* Section Header */}
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Beyond Work</p>
          <h2 className="section-title">Personal Interests</h2>
        </div>

        {/* Hobbies Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.label}
              className={`flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 scroll-reveal-fade ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <hobby.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="font-medium text-foreground">{hobby.label}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className={`mt-16 text-center scroll-reveal-fade ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground max-w-2xl mx-auto">
            "One hour of pen and paper can make my day."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default BeyondWork;
