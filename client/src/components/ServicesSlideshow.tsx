import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow";
import weddingImage from "@assets/Slideshow component images/Wedding Shoot.png";
import eventImage from "@assets/Slideshow component images/Event Coverage.JPG";
import outdoorImage from "@assets/Slideshow component images/outdoor shoot.jpg";
import productImage from "@assets/Slideshow component images/Product shoot.jpeg";
import videoImage from "@assets/Slideshow component images/Video shoot.jpg";
import { motion } from "motion/react";

const SLIDES = [
  {
    id: "slide-1",
    title: "Wedding Shoot",
    imageUrl: weddingImage,
  },
  {
    id: "slide-2",
    title: "Event Coverage",
    imageUrl: eventImage,
  },
  {
    id: "slide-3",
    title: "Outdoor Shoot",
    imageUrl: outdoorImage,
  },
  {
    id: "slide-4",
    title: "Product Shoot",
    imageUrl: productImage,
  },
  {
    id: "slide-5",
    title: "Video Shoot",
    imageUrl: videoImage,
  },
];

export function ServicesSlideshow() {
  return (
    <section className="w-full bg-background py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-8 px-6"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          What We <span className="text-primary">Offer</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of professional photography and videography services
        </p>
      </motion.div>

      <HoverSlider className="min-h-[70vh] place-content-center p-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap items-center justify-evenly gap-8 md:gap-16"
        >
          <div className="flex flex-col space-y-3 md:space-y-5">
            {SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter transition-all duration-300"
                text={slide.title}
              />
            ))}
          </div>
          <HoverSliderImageWrap className="max-w-md md:max-w-lg lg:max-w-xl shadow-2xl">
            {SLIDES.map((slide, index) => (
              <div key={slide.id}>
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="size-full max-h-96 md:max-h-[500px] object-cover rounded-xl"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </motion.div>
      </HoverSlider>
    </section>
  );
}
