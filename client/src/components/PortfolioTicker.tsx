import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import { SlideInButton } from "@/components/ui/SlideInButton";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface PortfolioItem {
    image: string;
    title: string;
    category: string;
    type: string;
    isVideo: boolean;
}

export default function PortfolioTicker() {
    const [images, setImages] = useState<PortfolioItem[]>([]);
    const [_, setLocation] = useLocation();

    // Ticker animation refs
    const column1Ref = useRef<HTMLDivElement>(null);
    const column2Ref = useRef<HTMLDivElement>(null);
    const column3Ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const offset1 = useRef(0);
    const offset2 = useRef(0);
    const offset3 = useRef(0);

    const [isMobile, setIsMobile] = useState(false);
    const [estimatedWidth, setEstimatedWidth] = useState(500);

    const speed = 0.5; // Adjusted speed
    const gap = 16;
    const tiltAngle = 15;
    const borderRadius = 12;

    useEffect(() => {
        fetch('/portfolio-data.json')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // Shuffle or just take first N images
                    // Let's take first 15 images that are not videos for better performance/look
                    const filtered = data.data.filter((item: PortfolioItem) => !item.isVideo).slice(0, 15);
                    setImages(filtered);
                }
            })
            .catch(err => console.error("Failed to load portfolio images", err));
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            setEstimatedWidth(window.innerWidth < 768 ? window.innerWidth * 0.66 : window.innerWidth * 0.25);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Split images into 3 columns
    const column1Images = images.filter((_, i) => i % 3 === 0);
    const column2Images = images.filter((_, i) => i % 3 === 1);
    const column3Images = images.filter((_, i) => i % 3 === 2);

    useAnimationFrame((time, delta) => {
        const movement = (delta / 1000) * speed * 50;
        offset1.current += movement;
        offset2.current -= movement;
        offset3.current += movement;

        const updateColumn = (ref: React.RefObject<HTMLDivElement>, offset: React.MutableRefObject<number>, colImages: PortfolioItem[]) => {
            if (ref.current && colImages.length > 0) {
                const child = ref.current.querySelector("[data-column-content]") as HTMLElement;
                if (child) {
                    // Aspect ratio assumed 3:4 or similar for portraits, but let's just use width
                    // The framer code used fixed aspect ratio 472/333.77 ~ 1.41
                    // Our images might vary, but let's enforce a consistent height for smoothness
                    const aspectRatio = 3 / 4;
                    const imageHeight = estimatedWidth / aspectRatio;
                    const totalSetHeight = (imageHeight + gap) * colImages.length;
                    const normalizedOffset = ((offset.current % totalSetHeight) + totalSetHeight) % totalSetHeight;
                    child.style.transform = `translateY(${-normalizedOffset}px)`;
                }
            }
        };

        updateColumn(column1Ref, offset1, column1Images);
        updateColumn(column2Ref, offset2, column2Images);
        updateColumn(column3Ref, offset3, column3Images);
    });

    const renderColumn = (colImages: PortfolioItem[]) => {
        // Render 3 copies for seamless looping
        const repeatedImages = [...colImages, ...colImages, ...colImages];
        const aspectRatio = 3 / 4;

        return (
            <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <div
                    data-column-content
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        willChange: "transform",
                    }}
                >
                    {repeatedImages.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`}
                            style={{
                                width: "100%",
                                aspectRatio: `${aspectRatio}`,
                                marginBottom: gap,
                                borderRadius: borderRadius,
                                overflow: "hidden",
                            }}
                            className="bg-muted shadow-md"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: borderRadius,
                                }}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    if (images.length === 0) return null;

    return (
        <section className="py-20 overflow-hidden bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />

            <div className="text-center mb-12 relative z-20 px-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                    Captured <span className="text-primary">Moments</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A glimpse into the stories we've had the privilege to tell.
                </p>
            </div>

            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: "600px", // Fixed height for the ticker area
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: gap,
                        transform: `rotate(${tiltAngle}deg) scale(1.1)`, // Scale up slightly to cover edges
                        height: isMobile ? "150vh" : "200vh",
                        width: isMobile ? "200vw" : "120vw",
                        willChange: "transform",
                    }}
                >
                    <div ref={column1Ref} style={{ flex: 1, minWidth: isMobile ? "50vw" : "25vw" }}>
                        {renderColumn(column1Images)}
                    </div>
                    <div ref={column2Ref} style={{ flex: 1, minWidth: isMobile ? "50vw" : "25vw" }}>
                        {renderColumn(column2Images)}
                    </div>
                    <div ref={column3Ref} style={{ flex: 1, minWidth: isMobile ? "50vw" : "25vw" }}>
                        {renderColumn(column3Images)}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 relative z-20">
                <SlideInButton
                    onClick={() => setLocation('/portfolio')}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="text-lg px-8 py-6"
                >
                    View Portfolio
                </SlideInButton>
            </div>
        </section>
    );
}
