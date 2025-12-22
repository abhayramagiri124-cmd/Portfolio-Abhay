import { Mail, Linkedin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div
        className={`container-width text-center scroll-reveal-fade ${isVisible ? 'visible' : ''}`}
        ref={sectionRef}
      >
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-12">
          If you're building something meaningful and fast-moving, let's connect.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:abhayramagiri124@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors group"
          >
            <Mail className="h-6 w-6 text-accent" />
            <span className="font-medium">abhayramagiri124@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abhay-ramagiri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors group"
          >
            <Linkedin className="h-6 w-6 text-accent" />
            <span className="font-medium">linkedin.com/in/abhay-ramagiri</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/_.abhay._0906"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors group"
          >
            <Instagram className="h-6 w-6 text-accent" />
            <span className="font-medium">@_.abhay._0906</span>
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Abhay Ramagiri. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
