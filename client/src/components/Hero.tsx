import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from "@/components/ui/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import weddingImage from "@assets/generated_images/Wedding_portfolio_sample_1f6f9bd5.png";
import eventImage from "@assets/generated_images/Event_portfolio_sample_f4a5e768.png";
import portraitImage from "@assets/generated_images/Portrait_portfolio_sample_63794526.png";
import productImage from "@assets/generated_images/IMG_6487.jpg";
import studioHeroImage from "@assets/generated_images/Studio_hero_background_f49db05f.png";
import logoImage from "@assets/LOGO_1759990739353_backup.png";

export default function Hero() {
  const IMAGES = [
    weddingImage,
    eventImage,
    portraitImage,
    productImage,
    studioHeroImage,
  ];

  return (
    <ContainerScroll className="h-[250vh] w-full" style={{ scrollBehavior: 'smooth' }}>
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4 will-change-transform">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl will-change-transform"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt={`CQ Digital Studio Gallery ${index + 1}`}
              loading="eager"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center will-change-transform">
        <img
          src={logoImage}
          alt="CQ Digital Studio Logo"
          className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-auto mx-auto"
          loading="eager"
        />
        <div className="flex items-center justify-center mt-8">
          <Link href="/portfolio">
            <Button className="px-6 py-3 font-medium">
              View Portfolio
            </Button>
          </Link>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}
