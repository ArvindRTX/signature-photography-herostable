import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Calendar,
  Camera,
  Edit,
  Send,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Initial Consultation",
    description: "We start with a detailed discussion about your vision, preferences, and requirements. This helps us understand your story and plan accordingly."
  },
  {
    step: 2,
    icon: Calendar,
    title: "Planning & Preparation",
    description: "Based on our consultation, we create a customized plan including location scouting, timeline, and preparation checklist."
  },
  {
    step: 3,
    icon: Camera,
    title: "Photography Session",
    description: "The day of your session arrives! We capture authentic moments with professional techniques and creative direction."
  },
  {
    step: 4,
    icon: Edit,
    title: "Post-Production",
    description: "Our expert editors carefully select and enhance your photos, ensuring each image reflects the emotion and quality you deserve."
  },
  {
    step: 5,
    icon: Send,
    title: "Delivery & Sharing",
    description: "Your beautifully edited photos are delivered through a private online gallery, ready for you to download and share."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 bg-background/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <ArrowRight className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            How We
            <span className="text-gradient block">Work</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From your first inquiry to the final delivery, we guide you through a seamless
            process designed to capture your most precious moments
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <Card
                className="group relative overflow-hidden border-0 elegant-shadow hover:glow-effect smooth-transition h-full"
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Step number */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-bold">
                      {step.step}
                    </Badge>
                  </div>

                  <div className="mb-4 flex-grow">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    >
                      <step.icon className="w-7 h-7 text-accent" />
                    </motion.div>

                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Animated Arrow connector for larger screens */}
              {index < processSteps.length - 1 && (
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10"
                >
                  <ArrowRight className="w-6 h-6 text-accent/70" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to start your photography journey with us?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium smooth-transition"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;