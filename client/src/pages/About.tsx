import { motion } from "framer-motion";
import { Award, Users, Camera } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Camera, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "250+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
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
              About <span className="text-primary">CQ Digital Studio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate photographers and videographers dedicated to capturing life's most precious moments with artistic excellence and technical precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="inline-block p-4 rounded-lg bg-primary/10 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At CQ Digital Studio, we believe every moment deserves to be captured with care and creativity. Our mission is to transform fleeting moments into timeless memories that you'll cherish forever.
              </p>
              <p className="text-muted-foreground">
                We combine cutting-edge technology with artistic vision to deliver photography and videography that exceeds expectations and tells compelling stories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We take a personalized approach to every project, working closely with our clients to understand their vision and bring it to life. Our team is dedicated to capturing authentic emotions and creating stunning visuals.
              </p>
              <p className="text-muted-foreground">
                From pre-production planning to post-production editing, we ensure every detail is perfect and every frame tells your unique story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
