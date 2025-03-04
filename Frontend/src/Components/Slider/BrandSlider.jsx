import { useEffect, useRef } from "react";

const recruiters = [
    "/images/accenture.jpg",
    "/images/HCL.jpg",
    "/images/jio.png",
    "/images/ola.png",
    "/images/wipro.jpg",
    "/images/ttl.png",
    "/images/tcsLogo.jpg",
];

export default function BrandSlider() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (marquee) {
            // Duplicate content for continuous scrolling effect
            const items = marquee.innerHTML;
            marquee.innerHTML += items;
        }
    }, []);

    return (
        <div className="max-w-full mx-auto p-6 text-center bg-white -100 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Top <span className="text-blue-500"> Placements</span>
        </h2>
            <div className="overflow-hidden relative w-full py-4 group">
                <div
                    ref={marqueeRef}
                    className="flex space-x-10 animate-scroll whitespace-nowrap group-hover:animate-none"
                >
                    {recruiters.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Recruiter ${index + 1}`}
                            className="h-20 transition-transform transform hover:scale-110"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
