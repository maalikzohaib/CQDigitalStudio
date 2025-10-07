import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconBriefcase,
  IconPhoto,
  IconPackage,
  IconStars,
  IconMail,
} from "@tabler/icons-react";

export default function Navbar() {
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
      title: "Services",
      icon: (
        <IconBriefcase className="h-full w-full text-foreground" />
      ),
      href: "/services",
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
      title: "Testimonials",
      icon: (
        <IconStars className="h-full w-full text-foreground" />
      ),
      href: "/testimonials",
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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
