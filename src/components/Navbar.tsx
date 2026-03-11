import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import kaariLogo from "@/assets/kaari-logo.png";

const navItems = ["Home", "Collections", "Custom Crochet", "Our Story", "Gallery", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-kaari-cream"}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href="https://instagram.com/kaari.handmade"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:block transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-kaari-cream hover:text-kaari-gold"}`}
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Center logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={kaariLogo}
            alt="Kaari Handmade Logo"
            className={`transition-all duration-500 ${scrolled ? "h-10" : "h-14"}`}
          />
          <div className="text-center">
            <h1 className={`font-heading text-2xl md:text-3xl font-semibold tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-kaari-cream"}`}>
              कारी
            </h1>
            <p className={`font-accent text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-kaari-cream/70"}`}>
              Handmade
            </p>
          </div>
        </a>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/kaari.handmade"
            target="_blank"
            rel="noopener noreferrer"
            className={`lg:hidden transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-kaari-cream hover:text-kaari-gold"}`}
          >
            <Instagram size={20} />
          </a>
          <button className={`transition-colors relative ${scrolled ? "text-foreground hover:text-primary" : "text-kaari-cream hover:text-kaari-gold"}`}>
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex justify-center mt-2 gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={`font-accent text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${scrolled ? "text-muted-foreground hover:text-primary" : "text-kaari-cream/80 hover:text-kaari-gold"}`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-accent text-lg tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
