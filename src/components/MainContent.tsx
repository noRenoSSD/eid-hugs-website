import Photobooth from './Photobooth';
import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';

export default function MainContent() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-svh">
      {/* Photobooth */}
      <div className="order-2 md:order-1 flex justify-center">
        <Photobooth />
      </div>

      {/* Message */}
      <div className="order-1 md:order-2 space-y-8">
        <header className="relative">
          {/* Floating Moon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-10 -left-4 md:-left-8 text-accent"
          >
            <Moon size={36} fill="currentColor" strokeWidth={0} />
          </motion.div>

          {/* Floating Stars */}
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -top-6 right-4 text-secondary"
          >
            <Star size={20} fill="currentColor" strokeWidth={0} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
            className="absolute top-8 -right-2 text-primary"
          >
            <Star size={14} fill="currentColor" strokeWidth={0} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-pacifico text-foreground leading-tight"
            style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', textWrap: 'balance', letterSpacing: '-0.02em' }}
          >
            Selamat Idul Fitri,{' '}
            <span className="text-secondary">Sayang!</span>{' '}
            <span className="inline-block">🌙</span>
          </motion.h1>
        </header>

        <motion.div
          className="bg-primary/20 p-6 md:p-8 rounded-[2rem] border-2 border-primary/30"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium" style={{ textWrap: 'pretty' }}>
            Mohon maaf lahir dan batin ya. Terima kasih sudah menjadi bagian
            terindah di tahun ini. Semoga berkah Idul Fitri menyertai hubungan
            kita selamanya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3"
        >
          {['💚', '🌸', '🌙'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
