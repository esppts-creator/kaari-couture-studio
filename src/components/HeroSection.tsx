import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import woolTexture from "@/assets/wool-texture-bg.jpg";
import kaariLogo from "@/assets/kaari-logo.png";
import kaariBrandName from "@/assets/kaari-brand-name.png";
import { useMemo } from "react";

const YarnFiber = ({ index }: { index: number }) => {
  const props = useMemo(() => {
    const left = Math.random() * 100;
    const duration = 12 + Math.random() * 18;
    const delay = Math.random() * -20;
    const width = 1 + Math.random() * 2;
    const height = 40 + Math.random() * 80;
    const rotation = Math.random() * 360;
    const opacity = 0.15 + Math.random() * 0.25;
    const drift = -30 + Math.random() * 60;
    return { left, duration, delay, width, height, rotation, opacity, drift };
  }, [index]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${props.left}%`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        background: `linear-gradient(180deg, transparent, hsl(var(--kaari-cream) / ${props.opacity}), transparent)`,
        filter: "blur(0.5px)",
        rotate: `${props.rotation}deg`,
      }}
      initial={{ y: "110vh", x: 0, opacity: 0 }}
      animate={{
        y: "-10vh",
        x: [0, props.drift, -props.drift / 2, 0],
        opacity: [0, props.opacity, props.opacity, 0],
      }}
      transition={{
        duration: props.duration,
        delay: props.delay,
        repeat: Infinity,
        ease: "linear",
        x: {
          duration: props.duration,
          delay: props.delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
};

const HeroSection = () => {
  const fibers = useMemo(() => Array.from({ length: 25 }, (_, i) => i), []);

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

      {/* Floating yarn fibers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {fibers.map((i) => (
          <YarnFiber key={i} index={i} />
        ))}
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
