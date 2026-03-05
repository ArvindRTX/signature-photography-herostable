import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingPhoneButton = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                delay: 2,
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
        >
            <a
                href="tel:+918438650107"
                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg shadow-accent/40 group relative hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Call +91 8438650107"
            >
                <Phone className="w-6 h-6 md:w-7 md:h-7" />

                {/* Pulsing rings animation */}
                <span className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-25 pointer-events-none" style={{ animationDuration: '2s' }}></span>
                <span className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '3s' }}></span>

                {/* Tooltip text for desktop */}
                <span className="hidden md:block absolute right-full mr-4 bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max elegant-shadow text-foreground whitespace-nowrap">
                    Call +91 8438650107
                    <span className="absolute top-1/2 -right-1 w-2 h-2 bg-background border-r border-t border-border transform rotate-45 -translate-y-1/2"></span>
                </span>
            </a>
        </motion.div>
    );
};

export default FloatingPhoneButton;
