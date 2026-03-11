import { motion } from "framer-motion";
import brand7 from "@/assets/kaari-brand-7.jpg";
import brand8 from "@/assets/kaari-brand-8.jpg";
import brand1 from "@/assets/kaari-brand-1.jpg";
import brand3 from "@/assets/kaari-brand-3.jpg";
import brand5 from "@/assets/kaari-brand-5.jpg";
import brand6 from "@/assets/kaari-brand-6.jpg";
import { Instagram } from "lucide-react";

const images = [brand1, brand3, brand5, brand6, brand7, brand8];

const InstagramSection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
            @kaari.handmade
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            From Our Instagram
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/kaari.handmade"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden aspect-square"
            >
              <img
                src={img}
                alt="Kaari Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={24} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
