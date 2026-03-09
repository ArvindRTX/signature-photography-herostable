import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    // Map 'about' to 'process' section as we don't have a dedicated about section yet
    const targetId = sectionId === 'about' ? 'process' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-serif font-bold">Signature Photography</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Capturing life's most precious moments with artistic vision and timeless elegance.
              Every frame tells a story, every story deserves to be beautifully preserved.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/signature.photograph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary smooth-transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary smooth-transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary smooth-transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-white/80 hover:text-accent smooth-transition"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-accent smooth-transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-accent smooth-transition"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-accent smooth-transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:aravinthramesh627@gmail.com"
                  onClick={() => {
                    navigator.clipboard.writeText('aravinthramesh627@gmail.com');
                    toast.success('Email address copied to clipboard');
                  }}
                  className="text-white/80 hover:text-accent smooth-transition"
                >
                  aravinthramesh627@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+919952393905"
                  onClick={() => {
                    navigator.clipboard.writeText('+91 9952393905');
                    toast.success('Phone number copied to clipboard');
                  }}
                  className="text-white/80 hover:text-accent smooth-transition"
                >
                  9952393905
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-white/80">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tenkasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent smooth-transition"
                  >
                    Signature Photography<br />
                    Tenkasi
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Signature Photography. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-accent text-sm smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm smooth-transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;