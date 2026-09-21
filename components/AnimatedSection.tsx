"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
};

export function AnimatedSection({ children, delay = 0, ...props }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
