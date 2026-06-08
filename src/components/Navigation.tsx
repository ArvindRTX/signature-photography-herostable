import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X, Image, Sparkles, User, Mail, ChevronRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "portfolio", label: "Portfolio", desc: "View our cherishable captures", icon: Image },
    { id: "services", label: "Services", desc: "Explore packages & pricing", icon: Sparkles },
    { id: "about", label: "About", desc: "Meet the team behind the lens", icon: User },
    { id: "contact", label: "Contact", desc: "Get in touch for bookings", icon: Mail },
  ];

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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || isMobileMenuOpen
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <h1 className={cn(
              "text-2xl font-serif font-bold cursor-pointer transition-colors duration-200",
              isMobileMenuOpen || isScrolled ? 'text-foreground' : 'text-white'
            )} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Signature
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={cn(
                  "transition-colors duration-200 font-medium",
                  isScrolled || isMobileMenuOpen ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'
                )}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions Container */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Client Login Button (Desktop) */}
            <div className="hidden md:block flex-shrink-0">
              <MagneticButton>
                <Button
                  variant="outline"
                  className={cn(
                    "bg-transparent smooth-transition border",
                    isScrolled || isMobileMenuOpen
                      ? "border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-accent"
                      : "border-white/30 text-white hover:bg-white/10 hover:border-accent"
                  )}
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
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "transition-colors duration-200 mt-1",
                  isMobileMenuOpen || isScrolled ? 'text-foreground' : 'text-white hover:text-accent'
                )}
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
        className={cn(
          "fixed top-0 right-0 bottom-0 h-[100dvh] w-[85vw] max-w-sm z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl border-l border-border bg-card",
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="font-serif font-bold text-xl text-foreground">Signature</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full smooth-transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content / List Items */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-accent/10 border border-border/40 hover:border-accent/20 group text-left transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/25 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.label}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 truncate">
                  {item.desc}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-border bg-muted/10">
          <Button
            variant="outline"
            className="border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent w-full justify-center gap-2 py-6 rounded-2xl shadow-sm transition-all duration-300 font-medium"
            asChild
          >
            <a
              href="https://signature-photography-photo-selector.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Login Portal
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;