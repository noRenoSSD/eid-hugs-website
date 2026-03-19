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
      {/* ── SVG Clip Path ── */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curve-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.78,0 C 1.12,0.2 1.12,0.8 0.78,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── Background Photo – desktop only ── */}
      <div
        className="absolute inset-y-0 left-0 w-[55%] pointer-events-none hidden md:block"
        style={{ clipPath: "url(#curve-clip)" }}
      >
        <img src="/foto1.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* ── Content Grid ──
           Mobile : 1 col  →  header (top) · photobooth (mid) · message (bot)
           Desktop: 2 col  →  photobooth (left, row-span-2) · header + message (right) -->
      */}
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start md:items-center min-h-svh">
        {/* ── Photobooth
               Mobile : order-2 (middle)
               Desktop: col-1, row 1-2  ── */}
        <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2 flex justify-center">
          <Photobooth />
        </div>

        {/* ── Header: Logo + Heading
               Mobile : order-1 (top)
               Desktop: col-2, row-1  ── */}
        <div className="order-1 md:col-start-2 md:row-start-1 relative space-y-4 pt-8 md:pt-0">
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
            className="flex items-center justify-center"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-pacifico text-foreground leading-tight text-center md:text-left"
            style={{
              fontSize: "clamp(1.5rem, 6vw, 4rem)",
              textWrap: "balance",
              letterSpacing: "-0.02em",
            }}
          >
            Selamat Idul Fitri, <span className="text-secondary">Sayang!</span>{" "}
            <Moon
              size={26}
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
        </div>

        {/* ── Message Card + Icons
               Mobile : order-3 (bottom)
               Desktop: col-2, row-2  ── */}
        <div className="order-3 md:col-start-2 md:row-start-2 space-y-4 md:space-y-8 pb-8 md:pb-0">
          <motion.div
            className="bg-primary/20 p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-primary/30 md:border-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="text-sm md:text-xl leading-relaxed text-foreground font-medium text-center md:text-left"
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
            className="flex gap-3 md:gap-4 items-center justify-center md:justify-start"
          >
            {floatingIcons.map(({ Icon, color }, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                style={{ color }}
              >
                <Icon size={24} fill="currentColor" strokeWidth={0} />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
