import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
}

export default function MusicToggle({ isPlaying, setIsPlaying }: MusicToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 25 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-background/70 backdrop-blur-md border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
}
