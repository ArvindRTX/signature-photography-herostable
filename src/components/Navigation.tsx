import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
      ? 'bg-primary/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <h1 className={`text-2xl font-serif font-bold cursor-pointer transition-colors duration-200 ${isMobileMenuOpen ? 'text-foreground' : 'text-white'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Signature
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-accent transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions Container */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Theme Toggle Button (Desktop & Mobile) */}
            <ThemeToggle />

            {/* Client Login Button (Desktop) */}
            <div className="hidden md:block flex-shrink-0">
              <Button
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-accent"
                asChild
              >
                <a
                  href="https://signature-photography-photo-selector.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Client Login
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${isMobileMenuOpen ? 'text-foreground' : 'text-white'} hover:text-accent transition-colors duration-200 mt-1`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Slide-over Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 shadow-2xl border-l border-white/5 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ backgroundColor: '#0C1017' }}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-2xl text-foreground hover:text-accent transition-colors duration-200 font-serif"
            >
              {item}
            </button>
          ))}

          <div className="pt-8 border-t border-border w-full flex justify-center">
            <Button
              variant="outline"
              className="border-border bg-transparent text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent w-full max-w-xs transition-colors"
              asChild
            >
              <a
                href="https://signature-photography-photo-selector.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Client Login
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;