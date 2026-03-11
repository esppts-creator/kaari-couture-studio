import { motion } from "framer-motion";

interface CrochetDividerProps {
  variant?: "wave" | "chain" | "zigzag";
  flip?: boolean;
}

const CrochetDivider = ({ variant = "wave", flip = false }: CrochetDividerProps) => {
  const patterns = {
    wave: (
      <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
        {/* Yarn thread wave */}
        <motion.path
          d="M0 40 C100 10, 200 70, 300 40 C400 10, 500 70, 600 40 C700 10, 800 70, 900 40 C1000 10, 1100 70, 1200 40"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Crochet loop details */}
        {[150, 450, 750, 1050].map((cx, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={i % 2 === 0 ? 55 : 25}
            r="6"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
          />
        ))}
      </svg>
    ),
    chain: (
      <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
        {/* Chain stitch pattern */}
        <motion.path
          d="M0 30 L1200 30"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <motion.ellipse
            key={i}
            cx={50 + i * 100}
            cy="30"
            rx="18"
            ry="12"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          />
        ))}
      </svg>
    ),
    zigzag: (
      <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
        <motion.path
          d="M0 50 L40 10 L80 50 L120 10 L160 50 L200 10 L240 50 L280 10 L320 50 L360 10 L400 50 L440 10 L480 50 L520 10 L560 50 L600 10 L640 50 L680 10 L720 50 L760 10 L800 50 L840 10 L880 50 L920 10 L960 50 L1000 10 L1040 50 L1080 10 L1120 50 L1160 10 L1200 50"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M20 50 L60 10 L100 50 L140 10 L180 50 L220 10 L260 50 L300 10 L340 50 L380 10 L420 50 L460 10 L500 50 L540 10 L580 50 L620 10 L660 50 L700 10 L740 50 L780 10 L820 50 L860 10 L900 50 L940 10 L980 50 L1020 10 L1060 50 L1100 10 L1140 50 L1180 10"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    ),
  };

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none py-2 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <div className="container mx-auto px-6">
        {patterns[variant]}
      </div>
    </div>
  );
};

export default CrochetDivider;
