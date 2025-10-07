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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-md cursor-pointer aspect-[4/3]"
      onClick={onClick}
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 rounded-full bg-primary/90">
              <Play className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm text-primary mb-2">{category}</p>
          <h3 className="text-xl font-display font-semibold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
