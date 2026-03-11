import { Instagram, Phone } from "lucide-react";
import woolDark from "@/assets/wool-dark-bg.jpg";
import kaariLogo from "@/assets/kaari-logo.png";

const footerLinks = ["Shop", "Custom Orders", "Our Story", "Contact"];

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 overflow-hidden">
      {/* Dark wool texture */}
      <div className="absolute inset-0">
        <img src={woolDark} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-kaari-dark/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img src={kaariLogo} alt="Kaari Logo" className="h-12" />
              <div>
                <h3 className="font-heading text-2xl font-semibold text-kaari-cream">कारी</h3>
                <p className="font-accent text-[10px] tracking-[0.3em] uppercase text-kaari-cream/50">Handmade</p>
              </div>
            </div>
            <p className="font-accent text-sm text-kaari-cream/60 leading-relaxed mt-2">
              प्यार से बुनी गई ख़ास डिज़ाइन्स
            </p>
            <div className="flex gap-4 mt-2">
              <span className="font-accent text-xs text-kaari-gold tracking-wider">Online Orders Accepted</span>
              <span className="text-kaari-cream/30">•</span>
              <span className="font-accent text-xs text-kaari-gold tracking-wider">Customisation Available</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-accent text-sm tracking-[0.1em] uppercase text-kaari-cream/60 hover:text-kaari-gold transition-colors"
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
              className="flex items-center gap-2 text-kaari-cream/60 hover:text-kaari-gold transition-colors"
            >
              <Instagram size={18} />
              <span className="font-accent text-sm">@kaari.handmade</span>
            </a>
            <a
              href="https://wa.me/919131548788"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-kaari-cream/60 hover:text-kaari-gold transition-colors"
            >
              <Phone size={18} />
              <span className="font-accent text-sm">+91 9131548788</span>
            </a>
          </div>
        </div>

        <div className="border-t border-kaari-cream/10 mt-12 pt-8 text-center">
          <p className="font-accent text-xs text-kaari-cream/40 tracking-wider">
            © 2026 Kaari Handmade. All rights reserved. Powered by Tales of Chhattisgarh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
