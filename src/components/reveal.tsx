'use client';

import {motion, useReducedMotion} from 'framer-motion';
import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({children, className, delay = 0}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.25}}
      transition={{duration: 0.32, ease: [0.22, 1, 0.36, 1], delay}}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
