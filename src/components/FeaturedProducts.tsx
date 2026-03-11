import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import brand1 from "@/assets/kaari-brand-1.jpg";
import brand2 from "@/assets/kaari-brand-2.jpg";
import brand3 from "@/assets/kaari-brand-3.jpg";
import brand4 from "@/assets/kaari-brand-4.jpg";
import brand5 from "@/assets/kaari-brand-5.jpg";
import brand6 from "@/assets/kaari-brand-6.jpg";

const products = [
  { name: "Burgundy Crochet Top", price: "₹2,499", image: brand1 },
  { name: "Cream Boho Dress", price: "₹4,999", image: brand2 },
  { name: "Heritage Shawl", price: "₹3,299", image: brand3 },
  { name: "Vintage Crochet Vest", price: "₹1,999", image: brand4 },
  { name: "Golden Hour Bag", price: "₹2,799", image: brand5 },
  { name: "Classic Crochet Poncho", price: "₹3,999", image: brand6 },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Curated For You
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Signature Pieces
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <Heart size={18} />
                </button>
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-accent text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                  Handmade
                </span>
              </div>
              <h3 className="font-heading text-base font-medium text-foreground mb-1">{product.name}</h3>
              <p className="font-accent text-lg text-primary font-medium">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
