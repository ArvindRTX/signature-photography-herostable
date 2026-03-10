import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
    text,
    className = '',
    delay = 0
}) => {
    // Split text into words
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-wrap ${className}`}
        >
            {words.map((word, idx) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: '0.25em' }}
                    key={idx}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextReveal;
