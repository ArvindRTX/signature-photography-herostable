import { motion } from "framer-motion";

const FloatingShapes = () => {
    const shapes = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
        type: Math.random() > 0.6 ? "circle" : Math.random() > 0.3 ? "square" : "triangle",
    }));

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className={`absolute opacity-10 ${shape.type === "circle"
                        ? "rounded-full bg-primary/20"
                        : shape.type === "square"
                            ? "rounded-lg bg-secondary/20"
                            : "w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-accent/20"
                        }`}
                    style={{
                        width: shape.type !== "triangle" ? shape.size : 0,
                        height: shape.type !== "triangle" ? shape.size : 0,
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: shape.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
