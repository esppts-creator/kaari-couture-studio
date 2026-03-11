import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import woolTexture from "@/assets/wool-texture-bg.jpg";
import kaariLogo from "@/assets/kaari-logo.png";
import kaariBrandName from "@/assets/kaari-brand-name.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Wool texture background */}
      <div className="absolute inset-0">
        <img
          src={woolTexture}
          alt="Wool texture background"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kaari-dark/30 via-transparent to-kaari-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src={kaariLogo}
            alt="Kaari Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4"
        >
          <img
            src={kaariBrandName}
            alt="कारी - Kaari Handmade"
            className="h-32 md:h-48 lg:h-56 mx-auto object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-accent text-sm md:text-base tracking-[0.4em] uppercase text-kaari-gold mb-8"
        >
          Unique Handmade Crochet Collection
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg">
            Shop Collection
          </Button>
          <Button variant="heroOutline" size="lg">
            Custom Order
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-kaari-cream/0 via-kaari-cream/50 to-kaari-cream/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
