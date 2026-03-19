import { motion } from "framer-motion";

export default function Photobooth() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -4, y: 30 }}
      animate={{ opacity: 1, rotate: -2, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="relative hover:rotate-0 transition-transform duration-700 w-full md:w-auto mx-auto"
    >
      {/* Washi Tape Top */}
      <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-14 md:w-20 h-6 md:h-8 bg-secondary/40 backdrop-blur-sm -rotate-2 z-10 rounded-sm" />

      <div className="bg-background p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full md:w-56 lg:w-64 rounded-lg flex flex-col gap-2 md:gap-3">
        {/* Photos: row on mobile, column on desktop */}
        <div className="flex flex-row md:flex-col gap-2 md:gap-3">
          {["/foto3.jpg", "/foto2.jpg", "/foto3.jpg"].map((src, i) => (
            <div
              key={i}
              className="flex-1 aspect-square md:aspect-[4/3] bg-muted relative overflow-hidden rounded-md"
            >
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] rounded-md" />
            </div>
          ))}
        </div>

        <p className="font-pacifico text-center text-muted-foreground text-[10px] md:text-sm pt-1 md:pt-2">
          Eid 1445H — Prettiest Girl ✨
        </p>
      </div>

      {/* Washi Tape Bottom */}
      <div className="absolute -bottom-1 md:-bottom-2 right-3 md:right-4 w-10 md:w-16 h-4 md:h-6 bg-accent/60 backdrop-blur-sm rotate-12 rounded-sm" />
    </motion.div>
  );
}
