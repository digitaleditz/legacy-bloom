import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoImage from "@/assets/kapahi-logo-official.png";

const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary grain overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(0,78%,46%,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsla(42,65%,52%,0.10),transparent_55%)]" />

          {/* Animated rings */}
          <motion.div
            className="absolute w-[360px] h-[360px] rounded-full border border-secondary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[460px] h-[460px] rounded-full border border-gold/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
              <img
                src={logoImage}
                alt="Kapahi Properties"
                className="relative h-32 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl md:text-4xl text-primary-foreground tracking-wide">
                Kapahi <span className="text-gradient-gold italic">Properties</span>
              </h1>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-primary-foreground/60">
                Honoring the Past · Building the Future
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="relative h-px w-56 overflow-hidden bg-primary-foreground/10 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary via-gold to-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
