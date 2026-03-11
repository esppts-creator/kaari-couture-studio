import { motion } from "framer-motion";
import productDress from "@/assets/product-dress.jpg";
import productBag from "@/assets/product-bag.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productCustom from "@/assets/product-custom.jpg";

const collections = [
  { name: "Crochet Dresses", image: productDress, count: "12 Pieces" },
  { name: "Crochet Bags", image: productBag, count: "8 Pieces" },
  { name: "Accessories", image: productAccessories, count: "15 Pieces" },
  { name: "Custom Pieces", image: productCustom, count: "Made to Order" },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Explore
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Our Crochet Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-kaari-dark/0 group-hover:bg-kaari-dark/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-full bg-background/90 backdrop-blur-sm text-foreground font-accent text-sm tracking-[0.15em] uppercase py-3 hover:bg-background transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground">{collection.name}</h3>
              <p className="font-accent text-sm text-muted-foreground">{collection.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
