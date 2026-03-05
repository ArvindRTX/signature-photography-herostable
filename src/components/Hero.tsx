import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";
import HeroBackgroundImage from '../assets/images/DSC02445.jpg';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-x-0 top-[-20%] bottom-[-20%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center ',
            backgroundRepeat: 'no-repeat',
            y: backgroundY
          }}
        />
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-accent/30 rounded-full hidden lg:block animate-float" style={{ animationDuration: '5s' }} />
      <div
        className="absolute bottom-32 right-32 w-32 h-32 bg-accent/10 rounded-full blur-xl hidden lg:block animate-float"
        style={{ animationDelay: '2s', animationDuration: '7s' }}
      />

      {/* Main content */}
      <motion.div style={{ y: textY }} className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8"
          >
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Professional Photography</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Signature
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block text-accent drop-shadow-lg"
            >
              Photography
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
          >
            Capturing life's most precious moments with artistic vision and
            <span className="text-accent font-medium"> timeless elegance</span>
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 h-auto elegant-shadow smooth-transition"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-8 py-4 h-auto smooth-transition"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 smooth-transition" />
              Watch Reel
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Passion Driven Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Years Experience in Cam & Edits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">∞</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Hearts to be won</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;