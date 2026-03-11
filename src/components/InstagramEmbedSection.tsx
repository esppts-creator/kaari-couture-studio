import { motion } from "framer-motion";
import { useEffect } from "react";
import woolTexture from "@/assets/wool-texture-bg.jpg";

const InstagramEmbedSection = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Wool texture background */}
      <div className="absolute inset-0">
        <img src={woolTexture} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-accent mb-4">
            @kaari.handmade
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            See Our Crochet In Motion
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div
            className="rounded-sm overflow-hidden shadow-luxury"
            dangerouslySetInnerHTML={{
              __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DVkQ2BjD-k9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"><a href="https://www.instagram.com/reel/DVkQ2BjD-k9/" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"></a></div></blockquote>`
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramEmbedSection;
