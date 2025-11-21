import { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconHome,
  IconInfoCircle,
  IconPhoto,
  IconPackage,
  IconMail,
} from "@tabler/icons-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-foreground" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-foreground" />
      ),
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: (
        <IconPhoto className="h-full w-full text-foreground" />
      ),
      href: "/portfolio",
    },
    {
      title: "Packages",
      icon: (
        <IconPackage className="h-full w-full text-foreground" />
      ),
      href: "/packages",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-foreground" />
      ),
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Desktop FloatingDock */}
      <div className="hidden lg:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={links} />
      </div>

      {/* Mobile/Tablet Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-card border border-card-border rounded-full hover-elevate active-elevate-2 shadow-lg"
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-medium hover-elevate active-elevate-2 px-6 py-3 rounded-md"
                  data-testid={`mobile-link-${link.title.toLowerCase()}`}
                >
                  <div className="w-8 h-8">{link.icon}</div>
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
