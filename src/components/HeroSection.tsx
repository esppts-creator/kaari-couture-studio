import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import woolTexture from "@/assets/wool-texture-bg.jpg";
import kaariLogo from "@/assets/kaari-logo.png";

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
        <div className="absolute inset-0 bg-gradient-to-b from-kaari-dark/40 via-transparent to-kaari-dark/60" />
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-accent text-sm md:text-base tracking-[0.4em] uppercase text-kaari-gold mb-4"
        >
          Unique Handmade Crochet Collection
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-kaari-cream mb-2 leading-tight"
        >
          Kaari
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-accent text-xl md:text-2xl tracking-[0.2em] uppercase text-kaari-cream/70 mb-6"
        >
          Handmade
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-accent text-lg md:text-2xl italic text-kaari-gold/90 mb-10"
        >
          प्यार से बुनी गई ख़ास डिज़ाइन्स
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
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
