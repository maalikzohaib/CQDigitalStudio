import { motion } from "motion/react";
import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import logoPath from "@assets/LOGO_1759990739353.png";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { CardStack } from "@/components/ui/card-stack";

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Shader Animation Background */}
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        
        {/* Content Layer */}
        <motion.div
          className="relative z-10 w-full px-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 1.5 }}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10">
            <div className="flex w-full flex-col items-center space-y-12 text-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <img
                  src={logoPath}
                  alt="CQ Digital Studio Logo"
                  className="w-96 md:w-[28rem] lg:w-[36rem] h-auto"
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
            </div>
          </div>
        </motion.div>
      </div>

      <section className="w-full bg-background px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              What We Offer
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Professional Photo & Video Services
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Professional Photo Shoots",
                  description: "From weddings to fashion, events to product photography — we capture it all with perfection."
                },
                {
                  title: "Cinematic Video Coverage",
                  description: "High-quality videos, reels, and promos — fully edited and ready to share."
                },
                {
                  title: "Studio Rental Space",
                  description: "Modern indoor studio setup for your creative shoots."
                },
                {
                  title: "Post-Production & Editing",
                  description: "Color grading, photo retouching, cinematic edits, reels — all done in-house."
                },
                {
                  title: "Social Media Ready Content",
                  description: "Optimized content for Instagram, TikTok, and Facebook that grabs attention."
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-amber-500" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <CardStack className="mx-auto max-w-sm md:max-w-md" />
          </div>
        </div>
      </section>
    </>
  );
}
