import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

/**
 * Executive Motion Design Constants
 * Optimized for 60FPS continuous bidirectional scrolling (scroll up AND down)
 */
export const MOTION_CONFIG = {
  // Dynamic smooth cubic-bezier curve
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  // Executive spring physics alternative
  spring: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  },
  duration: 0.5, // 0.4s - 0.6s range
  stagger: 0.08, // Sequential delay step
  viewportAmount: {
    desktop: 0.2,
    mobile: 0.15,
  },
};

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'none';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  amount?: number;
  useSpring?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. ScrollReveal Wrapper
 * Bidirectional continuous scroll reveal with graceful entry and exit.
 * Operates strictly on GPU-accelerated transform & opacity.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = MOTION_CONFIG.duration,
  distance = 30,
  scale = 0.98,
  amount,
  useSpring = false,
  className = '',
  style = {},
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const viewportAmount = amount ?? (isMobile ? MOTION_CONFIG.viewportAmount.mobile : MOTION_CONFIG.viewportAmount.desktop);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0, scale };
      case 'down':
        return { y: -distance, x: 0, scale };
      case 'left':
        return { x: distance, y: 0, scale };
      case 'right':
        return { x: -distance, y: 0, scale };
      case 'zoom':
        return { x: 0, y: 0, scale: 0.94 };
      case 'fade':
      case 'none':
      default:
        return { x: 0, y: 0, scale: 1 };
    }
  };

  const initialProps = {
    opacity: 0,
    ...getInitialPosition(),
  };

  const transitionConfig: Transition = useSpring
    ? {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        delay,
      }
    : {
        duration,
        ease: MOTION_CONFIG.ease,
        delay,
      };

  return (
    <motion.div
      initial={initialProps}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: false, // CONTINUOUS BIDIRECTIONAL TRIGGERING
        amount: viewportAmount,
      }}
      transition={transitionConfig}
      className={className}
      style={{
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  amount?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 2. StaggerContainer Wrapper
 * Orchestrates child elements (StaggerItem) with 0.08s sequential delays.
 * Fully bidirectional: retriggers continuously on both scroll down & scroll up.
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = MOTION_CONFIG.stagger,
  delayChildren = 0,
  amount,
  className = '',
  style = {},
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const viewportAmount = amount ?? (isMobile ? MOTION_CONFIG.viewportAmount.mobile : MOTION_CONFIG.viewportAmount.desktop);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false, // CONTINUOUS BIDIRECTIONAL TRIGGERING
        amount: viewportAmount,
      }}
      variants={containerVariants}
      className={className}
      style={{
        willChange: 'opacity',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'none';
  distance?: number;
  scale?: number;
  duration?: number;
  useSpring?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 3. StaggerItem Wrapper
 * Designed for grid cards, skills, and project list items.
 * Smoothly cascades in and out as the container enters/leaves the viewport.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  direction = 'up',
  distance = 30,
  scale = 0.98,
  duration = MOTION_CONFIG.duration,
  useSpring = false,
  className = '',
  style = {},
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0, scale };
      case 'down':
        return { y: -distance, x: 0, scale };
      case 'left':
        return { x: distance, y: 0, scale };
      case 'right':
        return { x: -distance, y: 0, scale };
      case 'zoom':
        return { x: 0, y: 0, scale: 0.94 };
      case 'none':
      default:
        return { x: 0, y: 0, scale: 1 };
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      transition: {
        duration: 0.35,
        ease: MOTION_CONFIG.ease,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: useSpring
        ? {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            mass: 0.8,
          }
        : {
            duration,
            ease: MOTION_CONFIG.ease,
          },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={{
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export interface MotionScaleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}

/**
 * 4. MotionScale
 * Premium subtle zoom & glow card entrance
 */
export const MotionScale: React.FC<MotionScaleProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  className = '',
  amount,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const viewportAmount = amount ?? (isMobile ? 0.15 : 0.2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: viewportAmount }}
      transition={{ duration, ease: MOTION_CONFIG.ease, delay }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};
