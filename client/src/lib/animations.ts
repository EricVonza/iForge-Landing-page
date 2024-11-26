import { Variants } from "framer-motion";

// Shared animation durations
const DURATIONS = {
  fast: 0.2,
  default: 0.3,
  slow: 0.5
};

// Shared animation variants for consistent animations across components
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATIONS.default }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATIONS.default }
};

export const staggerChildren = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const pulseAnimation: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATIONS.slow * 4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATIONS.default },
  viewport: { once: true }
};

export const listAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATIONS.default }
};
