import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Send, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import logo from "@assets/LOGO_1759990739353.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300 mt-24">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <img src={logo} alt="CQ Digital Studio Logo" className="h-32" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block transition-colors hover:text-primary">
                About Us
              </Link>
              <Link href="/portfolio" className="block transition-colors hover:text-primary">
                Portfolio
              </Link>
              <Link href="/packages" className="block transition-colors hover:text-primary">
                Packages
              </Link>
              <Link href="/contact" className="block transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>CQ Digital Studio</p>
              <p>Bhatta Chowk Bedian Road</p>
              <p>Lahore, Pakistan</p>
              <p>Phone: +92 300 4266312</p>
              <p>Email: cqdigitelstudio@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open('https://www.facebook.com/share/1B6ZCyqPHB/', '_blank')}
                      data-testid="button-social-facebook"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open('https://wa.me/c/164759341158410', '_blank')}
                      data-testid="button-social-whatsapp"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="sr-only">WhatsApp Catalog</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View our WhatsApp Catalog</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open('https://www.instagram.com/cqdigitalstudio?igsh=ajJqNHJheHdiNXNm', '_blank')}
                      data-testid="button-social-instagram"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground">
              Follow us for behind-the-scenes content and photography tips
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CQ Digital Studio. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookie-settings" className="transition-colors hover:text-primary">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
