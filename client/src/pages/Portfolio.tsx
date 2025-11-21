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
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-transparent border-none shadow-none focus:outline-none">
          {selectedItem && (
            <div className="relative w-full h-full flex items-center justify-center bg-black/95 rounded-2xl overflow-hidden ring-1 ring-white/10">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 group"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Media Container */}
              <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                {selectedItem.isVideo ? (
                  <video
                    src={selectedItem.image}
                    className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
                  />
                )}
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/60 to-transparent text-white pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-4xl mx-auto text-center md:text-left"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-end gap-4 mb-2">
                    <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                      {selectedItem.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-md border border-white/10 mb-1.5">
                      {selectedItem.category}
                    </span>
                  </div>
                  <p className="text-white/70 text-lg max-w-2xl">
                    {selectedItem.type}
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
