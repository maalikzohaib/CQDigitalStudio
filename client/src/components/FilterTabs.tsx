import { motion } from "framer-motion";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterTabs({ categories, activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-muted/30 backdrop-blur-sm rounded-full w-fit mx-auto border border-border/50">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          data-testid={`filter-${category.toLowerCase()}`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full shadow-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
