import { Briefcase, Users, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    title: 'Content Strategist & Accounts Manager',
    company: 'Atlantic Media',
    period: 'Mar 2025 – Jul 2025',
    icon: Briefcase,
    bullets: [
      'Managed content strategy for multiple brand accounts',
      'Executed social media campaigns with measurable results',
      'Coordinated with creative teams for content production',
    ],
  },
  {
    title: 'NGO Marketing Lead',
    company: "South India's Largest CSR Summit",
    period: 'Jan 2025 – Mar 2025',
    icon: Users,
    bullets: [
      'Led a 4-member marketing team',
      '700+ NGO outreach, 150+ managed on event day',
      'Designed and executed email marketing campaigns',
    ],
  },
  {
    title: 'Student Media Lead',
    company: 'IUCEE Student Chapter',
    period: 'Jul 2023 – Dec 2024',
    icon: Calendar,
    bullets: [
      'Led 10-member creative team promoting sustainability',
      'Created content for national-level events',
      'Managed social media presence and engagement',
    ],
  },
];

const ExperienceSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding">
      <div className="container-width" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex gap-6 scroll-reveal ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${150 + index * 120}ms` }}
                >
                  {/* Icon */}
                  <div className="hidden md:flex w-16 h-16 rounded-2xl bg-accent/10 items-center justify-center flex-shrink-0 z-10">
                    <exp.icon className="h-7 w-7 text-accent" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 card-elevated">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
