import { CompareImage } from "@/components/ui/compare-image";
import { motion } from "motion/react";

// Import some of your images for before/after comparison
const beforeImage = "/assets/ui/before-after/original.jpg";
const afterImage = "/assets/ui/before-after/enhanced.jpg";

export function BeforeAfterShowcase() {
  return (
    <section className="w-full bg-background pt-4 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Restore your old photos into new <span className="text-primary">DSLR style.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restore your old photos with a fresh, natural look. Turn damaged memories into beautifully renewed originals.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto"
          style={{ height: "600px" }}
        >
          <CompareImage
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel="Original"
            afterLabel="Enhanced"
            borderRadius={24}
            imageRadius={12}
            gap={3}
            labelStyles={{
              beforeTextColor: "white",
              afterTextColor: "white",
              beforeBackgroundColor: "rgba(0, 0, 0, 0.6)",
              afterBackgroundColor: "rgba(147, 51, 234, 0.8)", // purple accent
              beforeBorderRadius: 8,
              afterBorderRadius: 8,
              fontSize: "14px",
            }}
            className="shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground italic">
            💡 Drag the slider or tap and move to compare
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
