import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Signature Photography captured our wedding day with such artistry and emotion. Every photo tells our story perfectly, and we couldn't be happier with the results.",
    name: "Velladurai & Susila",
    event: "Wedding Photography",
    rating: 5,
    image: "https://img.freepik.com/premium-photo/newly-married-indian-couple-bride-groom-married_834602-31618.jpg"
  },
  {
    id: 2,
    quote: "The team's professionalism and creative vision exceeded all our expectations. Our family portraits are now treasured heirlooms that we'll cherish forever.",
    name: "Vijay Vaithiyanathan",
    event: "Family Portrait Session",
    rating: 5,
    image: "https://thumbs.dreamstime.com/b/young-guy-smile-standing-garden-195953405.jpg?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    quote: "From the initial consultation to the final delivery, everything was seamless. The attention to detail and artistic approach made our corporate event photography outstanding.",
    name: "Solomon Raja",
    event: "Corporate Event",
    rating: 5,
    image: "https://tse2.mm.bing.net/th/id/OIP.J0S2oqzLqzUcpgnay2m5oAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Client Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Clients
            <span className="text-gradient block">Say</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card
                className="group relative overflow-hidden border-0 elegant-shadow hover:glow-effect smooth-transition h-full"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4"
                    >
                      <Quote className="w-6 h-6 text-accent" />
                    </motion.div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                        >
                          <Star className="w-4 h-4 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.event}
                      </p>
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
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to create your own story with us?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium smooth-transition"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;