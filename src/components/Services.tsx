import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  Baby,
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capturing your special day with artistic elegance and emotional depth",
    features: ["Full day coverage", "Engagement session", "Online gallery", "Print package"],
    price: "Enquire Now",
    popular: true,
  },
  {
    icon: Users,
    title: "Couple Portraits",
    description: "Beautiful couple memories that will be treasured for generations",
    features: ["Studio or location", "Multiple outfit changes", "Edited gallery", "Print release"],
    price: "Enquire Now",
    popular: false,
  },
  {
    icon: Baby,
    title: "Newborn Sessions",
    description: "Gentle and safe photography for your precious little one",
    features: ["Props included", "Parent shots", "Sibling photos", "Same week editing"],
    price: "Enquire Now",
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional event documentation and corporate headshots",
    features: ["Event coverage", "Team photos", "Brand consistency", "Quick delivery"],
    price: "Enquire Now",
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }} />
      <div
        className="absolute bottom-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Capturing Life's
            <span className="text-gradient block">Beautiful Moments</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each service is tailored to tell your unique story with
            artistic vision and professional excellence
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`group relative overflow-hidden border-0 elegant-shadow hover:glow-effect smooth-transition cursor-pointer h-full ${service.popular ? 'ring-2 ring-accent/20' : ''
                  }`}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 flex-grow">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4"
                    >
                      <service.icon className="w-8 h-8 text-accent" />
                    </motion.div>

                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border mt-auto">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-2xl font-bold text-accent cursor-pointer hover:text-accent/80 transition-colors"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        {service.price}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 smooth-transition" />
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            Need something custom? We'd love to create a personalized package for you.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 smooth-transition cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Let's discuss your vision</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;