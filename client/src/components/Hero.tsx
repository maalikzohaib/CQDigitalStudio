import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "wouter";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import logoPath from "@assets/LOGO_1759990739353.png";

// Import hero section images
import image1 from "@assets/IMG_6508 - Copy_1760177450747.JPG?url";
import image2 from "@assets/IMG_6513 - Copy_1760177450747.jpg?url";
import image3 from "@assets/IMG_9176 - Copy_1760177450747.JPG?url";
import image4 from "@assets/IMG_9487_1760177450747.JPG?url";
import image5 from "@assets/GI5A8116_1760177450748.JPG?url";
import image6 from "@assets/IMG_1071 - Copy_1760177450748.JPG?url";
import image7 from "@assets/IMG_1759 - Copy_1760177450748.JPG?url";
import image8 from "@assets/IMG_4571_1760177450748.jpg?url";

export default function Hero() {
  const [scope, animate] = useAnimate();

  // Photography portfolio images
  const portfolioImages = [
    {
      url: image1,
      title: "Fashion Photography",
    },
    {
      url: image2,
      title: "Bridal Portrait", 
    },
    {
      url: image3,
      title: "Wedding Jewelry",
    },
    {
      url: image4,
      title: "Bridal Beauty",
    },
    {
      url: image5,
      title: "Corporate Portrait",
    },
    {
      url: image6,
      title: "Event Photography",
    },
    {
      url: image7,
      title: "Fashion Portrait",
    },
    {
      url: image8,
      title: "Mehndi Photography",
    },
  ];

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-8 items-center flex flex-col px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <img 
            src={logoPath} 
            alt="CQ Digital Studio Logo" 
            className="w-80 md:w-96 lg:w-[32rem] h-auto mx-auto"
            data-testid="img-hero-logo"
          />
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <Link href="/portfolio">
            <RainbowButton data-testid="button-view-portfolio">
              View Portfolio
            </RainbowButton>
          </Link>
        </motion.div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[0].url}
            alt={portfolioImages[0].title}
            className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[1].url}
            alt={portfolioImages[1].title}
            className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[2].url}
            alt={portfolioImages[2].title}
            className="w-28 h-40 md:w-40 md:h-52 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[3].url}
            alt={portfolioImages[3].title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[4].url}
            alt={portfolioImages[4].title}
            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[7].url}
            alt={portfolioImages[7].title}
            className="w-28 h-28 md:w-36 md:h-48 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[5].url}
            alt={portfolioImages[5].title}
            className="w-40 md:w-52 h-full object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[6].url}
            alt={portfolioImages[6].title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
}