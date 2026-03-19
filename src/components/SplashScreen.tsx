import { motion } from "framer-motion";

interface SplashScreenProps {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: SplashScreenProps) {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary gap-10 p-6"
    >
      {/* Logo */}
      <motion.img
        src="/logo.png"
        alt="Logo"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        className="w-44 h-44 object-cover rounded-full drop-shadow-lg"
      />

      {/* Mulai button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 1 }}
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-1 group cursor-pointer"
      >
        <span className="text-foreground/70 group-hover:text-foreground transition-colors duration-300 font-medium tracking-[0.25em] uppercase text-sm">
          Mulai
        </span>
        <motion.span className="block h-px w-6 bg-foreground/40 group-hover:w-full group-hover:bg-foreground/70 transition-all duration-300 rounded-full" />
      </motion.button>
    </motion.div>
  );
}
