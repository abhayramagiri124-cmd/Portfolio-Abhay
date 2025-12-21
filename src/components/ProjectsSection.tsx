import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


const categories = ['All', 'Brand Campaigns', 'NGO & Social Impact', 'Education'];

const projects = [
  {
    category: 'Brand Campaigns',
    title: 'Multi-Segment Shoots Execution',
    description: 'Successfully executed 50+ shoots across F&B, beauty, lifestyle, and education segments.',
    role: 'Planning, Scripting, Coordination & Content Direction',
    metric: '50+ Shoots',
  },
  {
    category: 'Brand Campaigns',
    title: 'Brand & Page Management',
    description: 'Handled and ran ads for Instagram pages like ANHA, DND Luxury Salon, Sound of Soul, BoilerRoom, Atlantic Media, and more.',
    role: 'Social Media Strategy, Ad Campaigns, Creatives & Performance Tracking',
    metric: '10+ Pages',
  },
  {
    category: 'NGO & Social Impact',
    title: 'NGO Outreach – South India CSR Campaign',
    description: 'Conducted an email marketing campaign to reach NGOs from Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.',
    role: 'Email Marketing Lead & NGO Relations',
    metric: '700+ NGOs Reached',
  },
  {
    category: 'NGO & Social Impact',
    title: 'National-Level Event Marketing for SDGs',
    description: 'Led a 2-month email and social media marketing campaign for a national-level event promoting SDGs.',
    role: 'Marketing Lead, Campaign Strategy & Execution',
    metric: '20+ Colleges',
  },
  {
    category: 'Education',
    title: 'University Promotional Campaigns',
    description: 'Ideated and edited 40+ promotional videos for marketing campaigns at Anurag University.',
    role: 'Concept, Scripting, Editing & Digital Optimization',
    metric: '40+ Videos',
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-section-light scroll-mt-24">
      <div className="container-width" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected Works</h2>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 scroll-reveal-fade ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-accent-glow'
                  : 'bg-card border border-border text-foreground hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`card-elevated scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-accent uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="text-accent font-bold">{project.metric}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              {/* Role */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Role:</p>
                <p className="text-sm font-medium text-foreground">{project.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
