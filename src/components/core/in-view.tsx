'use client';
import { type ReactNode, useRef } from 'react';
import {
  motion,
  useInView,
  type Transition,
  type UseInViewOptions,
  type Variants,
} from 'motion/react';

export type InViewProps = {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  once?: boolean;
  className?: string;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewOptions = { once: true, margin: '0px 0px -80px 0px' },
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
