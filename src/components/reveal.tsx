'use client';

import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({children, className, delay = 0}: RevealProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 32, scale: 0.985, filter: 'blur(6px)'}}
      whileInView={{opacity: 1, y: 0, scale: 1, filter: 'blur(0px)'}}
      viewport={{once: true, amount: 0.25}}
      transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1], delay}}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
