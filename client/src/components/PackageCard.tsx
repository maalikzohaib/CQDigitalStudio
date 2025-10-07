import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  index?: number;
}

export default function PackageCard({ name, price, features, popular = false, index = 0 }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      <Card 
        className={`p-8 h-full flex flex-col ${popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
        data-testid={`card-package-${name.toLowerCase()}`}
      >
        <h3 className="text-3xl font-display font-bold mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-5xl font-mono font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">/ session</span>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={popular ? "default" : "outline"} 
          className="w-full"
          data-testid={`button-book-${name.toLowerCase()}`}
        >
          Book Now
        </Button>
      </Card>
    </motion.div>
  );
}
