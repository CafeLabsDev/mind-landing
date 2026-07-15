"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealTag = "div" | "h2" | "p";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger index — mirrors the mockup's `--i` * 90ms transition-delay */
  index?: number;
  as?: RevealTag;
};

// Pre-created, stable motion components — framer-motion's `motion.create`
// factory must not be called during render (it would mint a new component
// identity on every render and reset internal state).
const MOTION_TAGS = {
  div: motion.div,
  h2: motion.h2,
  p: motion.p,
} as const;

/**
 * Fade-up-on-scroll wrapper, replacing the mockup's IntersectionObserver
 * `.reveal` class with Framer Motion's `whileInView`. When the user prefers
 * reduced motion, content renders in its final state immediately — no
 * opacity/transform animation at all, matching the mockup's blanket
 * `prefers-reduced-motion` reset.
 */
export function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const MotionComponent = MOTION_TAGS[as];

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.09 }}
    >
      {children}
    </MotionComponent>
  );
}
