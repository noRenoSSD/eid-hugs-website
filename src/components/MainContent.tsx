import Photobooth from "./Photobooth";
import { motion } from "framer-motion";
import { Moon, Star, Heart, Flower2 } from "lucide-react";

const floatingIcons = [
  { Icon: Heart, color: "#22c55e" },
  { Icon: Flower2, color: "#f472b6" },
  { Icon: Moon, color: "hsl(var(--accent))" },
];

export default function MainContent() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* ── Curved Background Photo – Left Side ── */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curve-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.78,0 C 1.12,0.2 1.12,0.8 0.78,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-y-0 left-0 w-[38%] md:w-[55%] pointer-events-none"
        style={{ clipPath: "url(#curve-clip)" }}
      >
        <img src="/foto1.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* ── Content Grid – always 2 columns ── */}
      <div className="relative max-w-5xl mx-auto px-3 md:px-6 py-10 md:py-24 grid grid-cols-2 gap-3 md:gap-16 items-center min-h-svh">
        {/* Photobooth */}
        <div className="flex justify-center">
          <Photobooth />
        </div>

        {/* Message */}
        <div className="space-y-3 md:space-y-8">
          <header className="relative">
            {/* Floating Moon – desktop only */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -left-4 md:-left-8 text-accent hidden md:block"
            >
              <Moon size={36} fill="currentColor" strokeWidth={0} />
            </motion.div>

            {/* Floating Stars – desktop only */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-6 right-4 text-secondary hidden md:block"
            >
              <Star size={20} fill="currentColor" strokeWidth={0} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-8 -right-2 text-primary hidden md:block"
            >
              <Star size={14} fill="currentColor" strokeWidth={0} />
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="mb-2 md:mb-5 flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="font-pacifico text-foreground leading-tight"
              style={{
                fontSize: "clamp(0.95rem, 4.5vw, 4rem)",
                textWrap: "balance",
                letterSpacing: "-0.02em",
              }}
            >
              Selamat Idul Fitri,{" "}
              <span className="text-secondary">Sayang!</span>{" "}
              <Moon
                size={18}
                className="inline-block align-middle text-accent md:hidden"
                fill="currentColor"
                strokeWidth={0}
              />
              <Moon
                size={36}
                className="hidden md:inline-block align-middle text-accent"
                fill="currentColor"
                strokeWidth={0}
              />
            </motion.h1>
          </header>

          <motion.div
            className="bg-primary/20 p-2.5 md:p-8 rounded-xl md:rounded-[2rem] border border-primary/30 md:border-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="text-[10px] leading-relaxed md:text-xl md:leading-relaxed text-foreground font-medium"
              style={{ textWrap: "pretty" }}
            >
              Mohon maaf lahir dan batin ya. Terima kasih sudah menjadi bagian
              terindah di tahun ini. Semoga berkah Idul Fitri menyertai hubungan
              kita selamanya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-2 md:gap-4 items-center"
          >
            {floatingIcons.map(({ Icon, color }, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                style={{ color }}
              >
                <Icon
                  size={18}
                  className="md:!w-7 md:!h-7"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
