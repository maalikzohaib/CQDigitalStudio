import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-8 hover-elevate transition-all duration-300 cursor-pointer group" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10">
          <Icon className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <button className="text-primary hover:underline font-medium" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Learn More →
        </button>
      </Card>
    </motion.div>
  );
}
