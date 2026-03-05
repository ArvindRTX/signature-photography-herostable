import { motion } from "framer-motion";
import { Camera, Heart, Award } from "lucide-react";
import AboutImage from '../assets/images/DSC02445.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/3" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden elegant-shadow z-10">
                            <img
                                src={AboutImage}
                                alt="Photographer behind the lens"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl elegant-shadow z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold font-serif text-foreground">500+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Happy Couples</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                                <Camera className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">Behind the Lens</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                                Capturing <span className="text-gradient">authentic moments</span> and timeless love stories
                            </h2>
                        </div>

                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Hello! We are Signature Photography, a passionate collective of visual storytellers dedicated to preserving your most precious memories. With over a decade of experience in wedding and portrait photography, our approach blends documentary candor with editorial elegance.
                            </p>
                            <p>
                                We believe that the best photographs are born from genuine connection. Our goal isn't just to take pictures, but to authentically document the joy, the tears, and the fleeting in-between moments that make your story uniquely yours.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground font-serif text-lg">Passion Driven</h4>
                                    <p className="text-sm text-muted-foreground">Every click is fueled by our profound love for visual arts.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Camera className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground font-serif text-lg">Premium Quality</h4>
                                    <p className="text-sm text-muted-foreground">Using top-tier equipment for cinematic and ultra-sharp outcomes.</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
