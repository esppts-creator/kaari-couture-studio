import { Instagram, Phone } from "lucide-react";

const footerLinks = ["Shop", "Custom Orders", "Our Story", "Contact"];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-background mb-2">Kaari</h3>
            <p className="font-accent text-xs tracking-[0.3em] uppercase text-background/50 mb-4">Handmade</p>
            <p className="font-accent text-sm text-background/60 leading-relaxed">
              Pyar Se Buni Gayi Khaas Designs
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-accent text-sm tracking-[0.1em] uppercase text-background/60 hover:text-kaari-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <a
              href="https://instagram.com/kaari.handmade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/60 hover:text-kaari-gold transition-colors"
            >
              <Instagram size={18} />
              <span className="font-accent text-sm">@kaari.handmade</span>
            </a>
            <a
              href="https://wa.me/919131548788"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/60 hover:text-kaari-gold transition-colors"
            >
              <Phone size={18} />
              <span className="font-accent text-sm">+91 9131548788</span>
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-accent text-xs text-background/40 tracking-wider">
            © 2026 Kaari Handmade. All rights reserved. Powered by Tales of Chhattisgarh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
