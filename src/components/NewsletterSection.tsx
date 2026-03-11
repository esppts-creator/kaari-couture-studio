import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import woolTexture from "@/assets/wool-texture-bg.jpg";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Wool texture background */}
      <div className="absolute inset-0">
        <img src={woolTexture} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Stay Connected
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Join The Kaari Community
          </h2>
          <p className="font-accent text-base text-muted-foreground mb-10">
            Be the first to see new crochet collections and limited handmade pieces.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-border bg-background text-foreground placeholder:text-muted-foreground font-accent text-sm tracking-wider px-5 py-4 focus:outline-none focus:border-primary transition-colors"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
