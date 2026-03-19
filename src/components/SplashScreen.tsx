import { motion } from 'framer-motion';

interface SplashScreenProps {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: SplashScreenProps) {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary p-6"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 text-foreground/60 font-medium tracking-widest uppercase text-xs"
      >
        Click the seal to open your gift
      </motion.p>

      {/* Envelope */}
      <motion.div
        className="relative w-full max-w-sm aspect-[4/3] cursor-pointer"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        onClick={onOpen}
      >
        {/* Envelope Body */}
        <div className="absolute inset-0 rounded-3xl bg-background shadow-2xl overflow-hidden">
          {/* Inner fold lines */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2">
            <div className="absolute inset-0 border-t border-border/50" />
            <div className="absolute top-0 left-0 w-full h-full"
              style={{ clipPath: 'polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)' }}
            >
              <div className="w-full h-full bg-muted/30" />
            </div>
          </div>
        </div>

        {/* Envelope Flap */}
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-background z-10 origin-top shadow-sm"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          }}
          whileHover={{ rotateX: -25 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Wax Seal CTA */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 bg-secondary rounded-full shadow-lg flex items-center justify-center border-4 border-background"
        >
          <div className="w-14 h-14 bg-background/30 rounded-full flex items-center justify-center">
            <span className="text-[9px] font-bold text-secondary-foreground uppercase tracking-[0.15em]">
              Open
            </span>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
