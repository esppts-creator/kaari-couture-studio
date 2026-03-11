import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Beautiful handcrafted crochet design. The attention to detail is extraordinary — every stitch tells a story.",
    author: "Priya S.",
    location: "Mumbai",
  },
  {
    text: "Unique and elegant handmade piece. I received so many compliments at the wedding. Truly one of a kind.",
    author: "Ananya M.",
    location: "Delhi",
  },
  {
    text: "Amazing custom crochet dress. The team understood exactly what I wanted and delivered beyond expectations.",
    author: "Riya K.",
    location: "Raipur",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Love Notes
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-accent text-base text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="font-accent text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
