import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import FilterTabs from "@/components/FilterTabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ZoomImage from "@/components/ZoomImage";
import weddingImage from "@assets/generated_images/Wedding_portfolio_sample_1f6f9bd5.png";
import eventImage from "@assets/generated_images/Event_portfolio_sample_f4a5e768.png";
import portraitImage from "@assets/generated_images/Portrait_portfolio_sample_63794526.png";
import productImage from "@assets/generated_images/Product_portfolio_sample_6fc4bba1.png";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = ["All", "Photography", "Videography", "Events"];

  const portfolioItems = [
    { image: weddingImage, title: "Sarah & Michael's Wedding", category: "Photography", type: "Wedding" },
    { image: eventImage, title: "Tech Summit 2024", category: "Events", type: "Conference" },
    { image: portraitImage, title: "Executive Portraits", category: "Photography", type: "Portrait" },
    { image: productImage, title: "Luxury Product Line", category: "Photography", type: "Product" },
    { image: weddingImage, title: "Emma & James Wedding Film", category: "Videography", type: "Wedding", isVideo: true },
    { image: eventImage, title: "Corporate Gala 2024", category: "Events", type: "Gala" },
    { image: portraitImage, title: "Creative Professional Series", category: "Photography", type: "Portrait" },
    { image: productImage, title: "Fashion Collection", category: "Photography", type: "Fashion" },
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse through our collection of stunning photography and videography work
            </p>
          </motion.div>

          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={item.title}
                  {...item}
                  index={index}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-border">
          {selectedItem && (
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <ZoomImage
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full rounded-lg"
                zoomScale={2}
              />
              <div className="p-8">
                <p className="text-sm text-primary mb-2">{selectedItem.category}</p>
                <h3 className="text-2xl font-display font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground">{selectedItem.type}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
