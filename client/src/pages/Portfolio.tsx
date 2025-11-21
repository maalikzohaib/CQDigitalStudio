import { useState, useEffect } from "react";
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

// Import new images
// Removed import.meta.glob as we now fetch from API

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [dynamicItems, setDynamicItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('/portfolio-data.json')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setDynamicItems(data.data);
        }
      })
      .catch(err => console.error("Failed to load portfolio images", err));
  }, []);

  const categories = ["All", "Photography", "Videography", "Product Shoots"];

  const portfolioItems = [
    ...dynamicItems
  ];

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of visual stories, capturing moments that matter in stunning detail.
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        <DialogContent className="max-w-6xl p-0 bg-background/95 backdrop-blur-xl border-border/50 shadow-2xl overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col md:flex-row h-[80vh] md:h-[600px]">
              <div className="w-full md:w-2/3 bg-black/5 relative flex items-center justify-center overflow-hidden">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                  data-testid="button-close-lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
                {selectedItem.isVideo ? (
                  <video
                    src={selectedItem.image}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-l border-border/50">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary w-fit mb-4">
                  {selectedItem.category}
                </span>
                <h3 className="text-3xl font-display font-bold mb-4">{selectedItem.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedItem.type}</p>
                <div className="mt-auto pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Captured with precision and passion. Contact us to book your session.
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
