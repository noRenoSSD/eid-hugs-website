import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import MainContent from "@/components/MainContent";
import MusicToggle from "@/components/MusicToggle";

const AUDIO_SRC = "/music.mp3";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current && AUDIO_SRC) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMusic = (val: boolean) => {
    setIsPlaying(val);
    if (val) {
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
    }
  };

  return (
    <main className="relative min-h-svh overflow-x-hidden">
      {AUDIO_SRC && <audio ref={audioRef} src={AUDIO_SRC} loop />}

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <SplashScreen key="splash" onOpen={handleOpen} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <MainContent />
            <MusicToggle isPlaying={isPlaying} setIsPlaying={toggleMusic} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
