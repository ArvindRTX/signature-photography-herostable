import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqData = [
    {
        question: "How far in advance should we book you for our wedding?",
        answer: "We recommend booking 6-12 months in advance, especially for popular wedding dates in spring and autumn. This ensures we can lock in our availability and have ample time to plan your engagement session and wedding timeline."
    },
    {
        question: "Do you travel for destination weddings?",
        answer: "Absolutely! We love traveling to capture love stories. We've shot weddings across the country and internationally. Travel fees are custom quoted based on the destination and required team size."
    },
    {
        question: "How long does it take to get our final photos?",
        answer: "For weddings, we typically deliver a 'sneak peek' gallery within 48-72 hours. Your full, carefully edited gallery will be ready within 6-8 weeks. For portrait sessions, turnaround time is usually 2-3 weeks."
    },
    {
        question: "Do we receive the RAW format files?",
        answer: "We do not provide RAW files. A significant part of our signature style involves our post-production grading and editing process. We provide high-resolution, fully edited JPEG files that represent our finished artistic vision."
    },
    {
        question: "What happens if there's an emergency and you can't make it?",
        answer: "In over 10 years of business, this has never happened. However, we have a strong network of extremely talented associate photographers whose style matches ours. In a true emergency, an associate would step in, and our core team would still handle all post-production editing."
    }
];

const FAQ = () => {
    return (
        <section id="faq" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">Common Questions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Frequently Asked
                        <span className="text-gradient block">Questions</span>
                    </h2>

                    <p className="text-xl text-muted-foreground mx-auto">
                        Everything you need to know about our process, pricing, and what it's like to work with us.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-10 elegant-shadow"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-border">
                                <AccordionTrigger className="text-left text-lg font-serif hover:text-accent data-[state=open]:text-accent smooth-transition">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
