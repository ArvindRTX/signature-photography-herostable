import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Focus } from "lucide-react";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate rotation for the "focus" icon based on scroll wrapper
    const rotate = useTransform(scaleY, [0, 1], [0, 360]);

    return (
        <div className="fixed inset-0 w-full h-full z-40 pointer-events-none hidden md:block">

            {/* A floating camera focus ring mapping to the scroll depth */}
            <motion.div
                className="absolute left-8 bottom-8 text-primary opacity-50 mix-blend-difference flex flex-col items-center gap-2"
                style={{
                    rotate,
                }}
            >
                <Focus size={32} className="opacity-80" />
            </motion.div>

            {/* Decorative text that moves with the scroll to reinforce theme. */}
            <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 text-primary opacity-30 mix-blend-difference hidden lg:block"
                style={{
                    y: useTransform(scaleY, [0, 1], ["-100%", "200%"]),
                }}
            >
                <div className="[writing-mode:vertical-rl] text-sm tracking-widest font-mono uppercase">
                    ISO 100 • f/1.8 • 1/200s
                </div>
            </motion.div>
        </div>
    );
};

export default ScrollProgress;
