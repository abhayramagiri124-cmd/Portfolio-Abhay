import { Target, Share2, Pencil, Video, Palette, Mail } from 'lucide-react';

const skills = [
  {
    icon: Target,
    title: 'Content Strategy & Digital Marketing',
    level: 'Advanced',
    description: 'Strategizing and executing content ecosystems aligned with brand and audience goals.',
    points: [
      'Campaign planning & execution',
      'Audience-first content thinking',
      'Cross-platform strategy',
      'Performance tracking & insights',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    level: 'Advanced',
    description: 'Managing brand presence with consistency, engagement, and data-backed decisions.',
    points: [
      'Content calendar planning',
      'Community engagement',
      'Reach & engagement optimization',
      'Analytics-driven improvements',
    ],
  },
  {
    icon: Pencil,
    title: 'Ad Scripting & Content Writing',
    level: 'Advanced',
    description: 'Writing scripts and copy that connect emotionally and perform commercially.',
    points: [
      'Promotional ad scripting',
      'Multilingual writing (English, Telugu, Hindi)',
      'Brand storytelling',
      'Digital & film ad scripts',
    ],
  },
  {
    icon: Video,
    title: 'Video Editing',
    level: 'Advanced',
    description: 'Editing videos with strong narrative flow and platform-first thinking.',
    points: [
      'Reels, shorts & long-form edits',
      'Promotional & campaign videos',
      'Horizontal & vertical formats',
      'Visual pacing & storytelling',
    ],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    level: 'Intermediate',
    description: 'Designing clean, functional creatives that support brand communication.',
    points: [
      'Campaign creatives',
      'Social media graphics',
      'Event & promotional designs',
      'Visual consistency',
    ],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    level: 'Intermediate',
    description: 'Planning and executing structured outreach and communication campaigns.',
    points: [
      'Email campaign planning',
      'Institutional & NGO outreach',
      'Copy structuring & sequencing',
      'Campaign tracking',
    ],
  },
];

const tools = ['Canva', 'Adobe Photoshop', 'Figma', 'Meta Business Suite', 'HubSpot'];

const softSkills = [
  'Team Management',
  'Design Thinking',
  'Adaptive',
  'Communication',
  'Meticulous',
  'Active Listening',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-section-light">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">My Skills</p>
          <h2 className="section-title">What I Bring to the Table</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of strategy, creativity, and execution
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="card-elevated opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <skill.icon className="h-6 w-6 text-accent" />
              </div>

              {/* Title & Level */}
              <h3 className="text-lg font-bold text-foreground mb-1">{skill.title}</h3>
              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-3">
                {skill.level}
              </span>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>

              {/* Points */}
              <ul className="space-y-2">
                {skill.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
