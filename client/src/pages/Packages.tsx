import { motion } from "framer-motion";
import PackageCard from "@/components/PackageCard";

export default function Packages() {
  const packages = [
    {
      name: "Bronze",
      price: "$999",
      features: [
        "4 hours of coverage",
        "200+ edited photos",
        "Online gallery",
        "Print rights included",
        "1 photographer",
      ],
    },
    {
      name: "Silver",
      price: "$1,499",
      popular: true,
      features: [
        "6 hours of coverage",
        "300+ edited photos",
        "Online gallery",
        "Print rights included",
        "2 photographers",
        "Highlight video (3-5 min)",
      ],
    },
    {
      name: "Gold",
      price: "$2,499",
      features: [
        "8 hours of coverage",
        "500+ edited photos",
        "Premium online gallery",
        "Print rights included",
        "2 photographers + videographer",
        "Full cinematic film (10-15 min)",
        "Same-day photo preview",
        "Album included",
      ],
    },
  ];

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
              Our <span className="text-primary">Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your needs. All packages include professional editing and online gallery access.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.name} {...pkg} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-card rounded-lg p-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We understand that every project is unique. Contact us to create a custom package tailored to your specific needs and budget.
            </p>
            <a href="/contact" className="text-primary hover:underline font-medium" data-testid="link-custom-package">
              Contact Us for Custom Pricing →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
