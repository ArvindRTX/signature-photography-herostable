import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Image {
    id: number;
    image: string;
    title: string;
    category: string;
    likes: number;
}

interface LightboxProps {
    images: Image[];
    initialIndex: number;
    onClose: () => void;
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [images.length, onClose]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center w-screen h-screen overflow-hidden"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-4 md:left-8 z-50 p-3 bg-white/5 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-8 z-50 p-3 bg-white/5 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Main Image Container */}
                <div
                    className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center min-h-[50vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
                        >
                            <img
                                src={currentImage.image}
                                alt={currentImage.title}
                                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Image Info */}
                    <motion.div
                        key={`info-${currentIndex}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="absolute bottom-4 left-0 right-0 text-center text-white"
                    >
                        <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wide">
                            {currentImage.title}
                        </h3>
                        <p className="text-white/70 text-sm mt-1">
                            {currentIndex + 1} / {images.length} • {currentImage.category}
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
