import { useState, useEffect } from 'react';
import { Menu, X, FileText, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ✅ SCROLL DETECTION — RESTORED */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ✅ LOCK BODY SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled || isMobileMenuOpen
            ? 'bg-card/95 backdrop-blur-md shadow-card py-3'
            : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container-width flex items-center justify-between px-4 md:px-8">
        {/* LOGO */}
        <a href="#home" className="text-2xl font-serif font-bold text-foreground">
          Abhay<span className="text-accent">.</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative px-3 py-1.5
                text-sm font-medium text-foreground/80
                transition-colors duration-300
                hover:text-foreground
                group
              "
            >
              {item.label}

              {/* Animated border */}
              <span
                className="
                  absolute inset-0 rounded-md
                  border border-accent
                  opacity-0 scale-95
                  transition-all duration-300 ease-out
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              />
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="icon" size="icon" asChild>
            <a
              href="https://linkedin.com/in/abhay-ramagiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="hero"
            size="default"
            className="shadow-accent-glow hover:scale-[1.02] transition"
            asChild
          >
            <a
              href="/resume/Abhay_Ramagiri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-lg border-t border-border">
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-foreground/80 hover:text-foreground rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex gap-3 mt-4 px-4">
              <Button variant="icon" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/abhay-ramagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="hero" className="flex-1" asChild>
                <a
                  href="/resume/Abhay_Ramagiri_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
