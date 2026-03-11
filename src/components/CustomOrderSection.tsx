import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import woolTexture from "@/assets/wool-texture-bg.jpg";

const CustomOrderSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="custom-crochet" className="relative py-24 md:py-32 overflow-hidden">
      {/* Wool texture background */}
      <div className="absolute inset-0">
        <img src={woolTexture} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-accent text-sm tracking-[0.3em] uppercase text-kaari-gold mb-4">
              Bespoke
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
              Custom Crochet Designs
            </h2>
            <p className="font-accent text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Design your own crochet piece with our artisans. Choose colors, styles, and yarns 
              tailored specially for you. Every custom piece is a unique work of art.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-accent text-sm tracking-wider px-5 py-4 focus:outline-none focus:border-kaari-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-accent text-sm tracking-wider px-5 py-4 focus:outline-none focus:border-kaari-gold transition-colors"
            />
            <textarea
              placeholder="Describe your dream crochet piece..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-accent text-sm tracking-wider px-5 py-4 focus:outline-none focus:border-kaari-gold transition-colors resize-none"
            />
            <Button variant="gold" size="lg" className="w-full">
              Request Custom Design
            </Button>
          </motion.form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
