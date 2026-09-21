"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState } from "react";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
};

export function AnimatedSection({ children, delay = 0, ...props }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const [animateOnScroll, setAnimateOnScroll] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setAnimateOnScroll(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const shouldAnimate = animateOnScroll && !reduceMotion;

  return (
    <motion.section
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
