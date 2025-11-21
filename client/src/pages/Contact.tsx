import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import ContactForm from "@/components/ContactForm";


export default function Contact() {
  const markers = [
    {
      id: 1,
      position: [24.8607, 67.0011] as const,
      color: "blue",
      size: "large",
      popup: {
        title: "CQ Digital Studio — Karachi",
        content: "Main production studio at Clifton Block 5, Karachi.",
        image:
          "https://images.unsplash.com/photo-1470123808288-1e59739eca14?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      id: 2,
      position: [31.5204, 74.3587] as const,
      color: "violet",
      size: "medium",
      popup: {
        title: "Client Lounge — Lahore",
        content: "Meeting suite and editing desk in Gulberg, Lahore.",
        image:
          "https://images.unsplash.com/photo-1529429617124-aee711a65a0b?auto=format&fit=crop&w=400&q=80",
      },
    },
  ];

  const circles = [
    {
      id: 1,
      center: [24.8607, 67.0011] as const,
      radius: 1200,
      style: { color: "#0ea5e9", fillOpacity: 0.15 },
      popup: "Primary service coverage around our Karachi studio.",
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-contact-address">
                        Bhatta Chowk Bedian Road<br />
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-contact-phone">
                        +92 300 4266312
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-contact-email">
                        cqdigitelstudio@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-contact-hours">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 4:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
