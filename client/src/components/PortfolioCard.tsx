import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  isVideo?: boolean;
  onClick?: () => void;
  index?: number;
}

export default function PortfolioCard({
  image,
  title,
  category,
  isVideo = false,
  onClick,
  index = 0
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      onClick={onClick}
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Video Icon */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="overflow-hidden">
          <p className="text-xs font-medium text-primary-foreground/80 mb-2 uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {category}
          </p>
          <h3 className="text-xl font-display font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {title}
          </h3>
          <div className="h-1 w-12 bg-primary rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-150" />
        </div>
      </div>
    </motion.div>
  );
}
