import { motion } from "framer-motion";
import artisanHands from "@/assets/artisan-hands.jpg";

const BrandStory = () => {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={artisanHands}
              alt="Artisan crocheting handmade piece"
              className="w-full aspect-[4/5] object-cover shadow-luxury"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Handcrafted<br />With Love
            </h2>
            <p className="font-accent text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Kaari Handmade is a family-driven crochet studio creating timeless handcrafted 
              designs woven with patience and love. Each piece celebrates slow fashion, 
              craftsmanship, and individuality.
            </p>
            <p className="font-accent text-lg text-muted-foreground leading-relaxed mb-8">
              Every stitch tells a story of dedication, heritage, and the beauty of 
              handmade artistry passed through generations.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-primary">100%</span>
                <p className="font-accent text-xs tracking-wider uppercase text-muted-foreground mt-1">Handmade</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-primary">50+</span>
                <p className="font-accent text-xs tracking-wider uppercase text-muted-foreground mt-1">Designs</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-primary">500+</span>
                <p className="font-accent text-xs tracking-wider uppercase text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
