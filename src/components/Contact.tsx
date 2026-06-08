import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Heart, Camera, Briefcase, Star, Send, CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    date: z.date({
        required_error: "Please select a date",
    }),
    eventType: z.string({
        required_error: "Please select an event type",
    }),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const ADDON_OPTIONS = [
    { id: "candidVideography", name: "Candid Videography", desc: "Natural and documentary-style video captures" },
    { id: "insta360Video", name: "360° Video (Insta360)", desc: "Immersive 360-degree video coverage" },
    { id: "droneVideo", name: "Drone Coverage", desc: "Cinematic aerial shots" },
    { id: "album", name: "Fine-Art Photo Album", desc: "Premium printed memories" },
    { id: "cinematicFilm", name: "Cinematic Video Highlight", desc: "3-5 minute highlight edit with audio" }
];

interface ContactProps {
    prefilledService: string | null;
    clearPrefill: () => void;
}

const Contact = ({ prefilledService, clearPrefill }: ContactProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [addons, setAddons] = useState({
        candidVideography: false,
        insta360Video: false,
        droneVideo: false,
        album: false,
        cinematicFilm: false,
    });

    useEffect(() => {
        if (prefilledService) {
            let eventType = "other";
            if (prefilledService.toLowerCase().includes("wedding")) {
                eventType = "wedding";
            } else if (
                prefilledService.toLowerCase().includes("portrait")
            ) {
                eventType = "portrait";
            } else if (
                prefilledService.toLowerCase().includes("corporate") ||
                prefilledService.toLowerCase().includes("event") ||
                prefilledService.toLowerCase().includes("birthday") ||
                prefilledService.toLowerCase().includes("party") ||
                prefilledService.toLowerCase().includes("parties")
            ) {
                eventType = "event";
            }
            form.setValue("eventType", eventType);
            form.setValue("message", `Hi! I would like to inquire about your "${prefilledService}" services. Please share more details and availability.`);
            clearPrefill();
        }
    }, [prefilledService, form, clearPrefill]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const activeAddons = Object.entries(addons)
                .filter(([_, active]) => active)
                .map(([id]) => {
                    const found = ADDON_OPTIONS.find(o => o.id === id);
                    return found ? found.name : id;
                })
                .join(", ");
            const packageDetails = `Custom Timeline Request${activeAddons ? ` + Add-ons: ${activeAddons}` : ""}`;

            const formData = new FormData();
            formData.append("access_key", "a8f62ddb-b42d-40de-997a-9536fb0af107");
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("phone", values.phone);
            formData.append("eventType", values.eventType);
            formData.append("date", format(values.date, "PPP"));
            formData.append("message", `${values.message}\n\n---\nPackage Selection:\n${packageDetails}`);
            // Optional: Send this to a specific subject
            formData.append("subject", `New Booking Inquiry from ${values.name} (${values.eventType}) - Custom Request`);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully! We'll get back to you soon.");
                form.reset();
            } else {
                console.error("Web3Forms error:", data);
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
            {/* Decorative elements */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-32 h-32 border-4 border-accent/10 rounded-full hidden lg:block"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl hidden lg:block"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We'd love to hear about your special day. Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border border-border/50"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="your@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid gap-8">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="eventType"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4">
                                            <FormLabel className="text-base text-foreground">What are we celebrating?</FormLabel>
                                            <FormControl>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {[
                                                        { id: "wedding", label: "Wedding", icon: Heart },
                                                        { id: "portrait", label: "Portrait", icon: Camera },
                                                        { id: "event", label: "Event", icon: Briefcase },
                                                        { id: "other", label: "Other", icon: Star }
                                                    ].map((item) => (
                                                        <div
                                                            key={item.id}
                                                            onClick={() => field.onChange(item.id)}
                                                            className={cn(
                                                                "group cursor-pointer rounded-2xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300",
                                                                field.value === item.id
                                                                    ? "border-accent bg-accent/10 shadow-md shadow-accent/20"
                                                                    : "border-border/50 bg-card hover:border-accent/40 hover:bg-accent/5 hover:shadow-sm"
                                                            )}
                                                        >
                                                            <div className={cn(
                                                                "p-3 rounded-full transition-colors duration-300",
                                                                field.value === item.id
                                                                    ? "bg-accent/20 text-accent"
                                                                    : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent/70"
                                                            )}>
                                                                <item.icon className="w-6 h-6" />
                                                            </div>
                                                            <span className={cn(
                                                                "text-sm font-medium transition-colors",
                                                                field.value === item.id ? "text-accent font-bold" : "text-muted-foreground"
                                                            )}>
                                                                {item.label}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                 {/* Optional Add-ons */}
                                 <div className="space-y-6 bg-secondary/10 p-6 rounded-2xl border border-border/50">
                                     <label className="text-base font-semibold text-foreground block">Optional Add-ons Interested In</label>
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                         {ADDON_OPTIONS.map((addon) => (
                                             <label
                                                 key={addon.id}
                                                 className={cn(
                                                     "flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all",
                                                     addons[addon.id as keyof typeof addons]
                                                         ? "border-accent/50 bg-accent/5"
                                                         : "border-border/50 bg-card hover:border-accent/20"
                                                 )}
                                             >
                                                 <input
                                                     type="checkbox"
                                                     checked={addons[addon.id as keyof typeof addons]}
                                                     onChange={(e) => setAddons({
                                                         ...addons,
                                                         [addon.id]: e.target.checked
                                                     })}
                                                     className="mt-1 accent-accent"
                                                 />
                                                 <div className="flex-1">
                                                     <span className="text-sm font-semibold text-foreground">{addon.name}</span>
                                                     <p className="text-xs text-muted-foreground mt-1">{addon.desc}</p>
                                                 </div>
                                             </label>
                                         ))}
                                     </div>
                                 </div>

                                 {/* Custom Selection Summary Badge */}
                                 <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                     <div className="flex-1">
                                         <h4 className="font-bold font-serif text-lg text-foreground">Custom Quote Request</h4>
                                         <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                             {Object.values(addons).filter(Boolean).length > 0
                                                 ? `Custom timeline request with additions: ${Object.entries(addons)
                                                     .filter(([_, active]) => active)
                                                     .map(([id]) => {
                                                         const found = ADDON_OPTIONS.find(o => o.id === id);
                                                         return found ? found.name : id;
                                                     })
                                                     .join(", ")}.`
                                                 : "Custom timeline and services request."}
                                         </p>
                                    </div>
                                    <div className="text-xs text-accent font-semibold uppercase tracking-wider bg-accent/10 border border-accent/20 px-4 py-2 rounded-xl text-center self-start sm:self-auto">
                                        Quote To Be Provided
                                    </div>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col mb-4">
                                            <FormLabel>Event Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your vision, venue, and any specific requirements..."
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <motion.div
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    <Button type="submit" className="w-full md:w-auto min-w-[200px]" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                                    </Button>
                                </motion.div>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
