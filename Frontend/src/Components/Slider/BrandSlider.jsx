import { useState } from "react";
import { motion } from "framer-motion";

const recruiters = [
    "/images/accenture.jpg",
    "/images/HCL.jpg",
    "/images/jio.png",
    "/images/ola.png",
    "/images/wipro.jpg",
    "/images/ttl.png",
    "/images/tcsLogo.jpg",
];

// Marquee animation settings
const getMarqueeVariants = (isPaused) => ({
    animate: {
        x: ["0%", "-100%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,  // Adjust speed
                ease: "linear",
                repeatDelay: 0,
            },
        },
    },
});

export default function BrandSlider() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="max-w-full mx-auto p-6 text-center bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Top <span className="text-blue-500">Placements</span>
            </h2>

            <div
                className="overflow-hidden relative w-full py-4"
                onMouseEnter={() => setIsPaused(true)}  // Stop scrolling on hover
                onMouseLeave={() => setIsPaused(false)} // Resume scrolling on leave
            >
                <motion.div
                    className="flex space-x-10 whitespace-nowrap"
                    variants={getMarqueeVariants(isPaused)}
                    animate={isPaused ? "paused" : "animate"}
                >
                    {/* Render images twice for infinite loop effect */}
                    {[...recruiters, ...recruiters].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Recruiter ${index % recruiters.length + 1}`}
                            className="h-20 transition-transform transform hover:scale-110"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
