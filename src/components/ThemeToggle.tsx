import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ isMobile = false }) {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex items-center justify-center p-2 rounded-full transition-colors duration-200 outline-none
        ${isMobile
                    ? "w-12 h-12 bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20"
                    : "w-10 h-10 border border-white/20 bg-black/20 text-white hover:bg-white/10 backdrop-blur-md"
                }
      `}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {(theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className={isMobile ? "w-6 h-6" : "w-5 h-5"} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0, rotate: 90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className={isMobile ? "w-6 h-6" : "w-5 h-5 text-black hover:text-white"} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
