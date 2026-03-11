import { motion } from "framer-motion";
import processYarn from "@/assets/process-yarn.jpg";
import processPattern from "@/assets/process-pattern.jpg";
import processCrafting from "@/assets/process-crafting.jpg";
import processFinished from "@/assets/process-finished.jpg";
import woolTexture from "@/assets/wool-texture-bg.jpg";

const steps = [
  { title: "Selecting Yarn", description: "We handpick the finest yarns — soft, vibrant, and full of character.", image: processYarn },
  { title: "Designing the Pattern", description: "Each design is sketched with care, inspired by heritage and modern aesthetics.", image: processPattern },
  { title: "Hand Crocheting", description: "Our artisans weave every stitch by hand, pouring love into every loop.", image: processCrafting },
  { title: "The Finished Piece", description: "A one-of-a-kind handmade crochet creation, ready to be cherished.", image: processFinished },
];

const CraftProcessSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Wool texture background */}
      <div className="absolute inset-0">
        <img src={woolTexture} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb or-4">
            Our Process
          </
          p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            From Yarn To Art
          </h2>
        </motion.div>

        <div className="relative">
          {/* Thread line connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Step number */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg font-bold">
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="font-accent text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftProcessSection;
