import { motion } from 'framer-motion';

export default function Photobooth() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -4, y: 30 }}
      animate={{ opacity: 1, rotate: -2, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="relative hover:rotate-0 transition-transform duration-700 mx-auto"
    >
      {/* Washi Tape Top */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-secondary/40 backdrop-blur-sm -rotate-2 z-10 rounded-sm" />

      <div className="bg-background p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-56 sm:w-64 flex flex-col gap-3 rounded-lg">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="aspect-[4/3] bg-muted relative overflow-hidden rounded-md"
          >
            <div className="absolute inset-0 animate-pulse flex items-center justify-center text-xs text-muted-foreground font-medium">
              [FOTO {i}]
            </div>
            <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] rounded-md" />
          </div>
        ))}
        <p className="font-pacifico text-center text-muted-foreground text-sm pt-2">
          Eid 1445H — Our Best Moments ✨
        </p>
      </div>

      {/* Washi Tape Bottom */}
      <div className="absolute -bottom-2 right-4 w-16 h-6 bg-accent/60 backdrop-blur-sm rotate-12 rounded-sm" />
    </motion.div>
  );
}
