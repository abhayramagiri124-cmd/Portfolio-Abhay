import { Film, BookOpen, GraduationCap } from 'lucide-react';
const highlights = [{
  icon: Film,
  text: 'Heart lies in ad filming and production'
}, {
  icon: BookOpen,
  text: 'Published author of "AROUND YOU" (2022)'
}];
const AboutSection = () => {
  return <section id="about" className="section-padding bg-section-muted">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label">About Me</p>
          <h2 className="section-title">The Person Behind the Work</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - About Text */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a <strong>digital media and marketing professional</strong> with hands-on 
              experience across content strategy, design, and video production. I enjoy 
              working in collaborative team environments, and corporate communication is 
              one of my strong areas.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I bring together <span className="text-accent font-semibold">creative thinking</span> and{' '}
              <span className="text-accent font-semibold">strategic execution</span> to deliver 
              meaningful, data-backed results.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My <strong>obsession with detailing</strong> helps me give a different perspective 
              to a world obsessed with stories.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              {highlights.map((item, index) => <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>)}
            </div>
          </div>

          {/* Right - Education Card */}
          <div className="lg:col-span-2">
            <div className="card-elevated">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>

              {/* Education Details */}
              <div className="pl-4 border-l-2 border-accent">
                <h4 className="font-bold text-foreground">Bachelor of Technology</h4>
                <p className="text-accent font-medium">Anurag University</p>
                <p className="text-muted-foreground">2021 – 2025</p>
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground italic text-center">"In today's world, relatability is the new reality"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;