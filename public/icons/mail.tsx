'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface MailIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MailIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MailIcon = forwardRef<MailIconHandle, MailIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          controls.start('animate');
        },
        stopAnimation: () => {
          controls.start('initial');
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('animate');
        }
        onMouseEnter?.(e);
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('initial');
        }
        onMouseLeave?.(e);
      },
      [controls, onMouseLeave]
    );

    const envelopeVariants = {
      initial: {
        pathLength: 0,
        opacity: 0,
      },
      animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    };

    const flapVariants = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.3,
          ease: 'easeInOut',
        },
      },
    };

    return (
      <div
        className={cn(
          `cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center`,
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.rect
            width="20"
            height="16"
            x="2"
            y="4"
            rx="2"
            variants={envelopeVariants}
            initial="initial"
            animate={controls}
          />
          <motion.path
            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            variants={flapVariants}
            initial="initial"
            animate={controls}
          />
        </svg>
      </div>
    );
  }
);

MailIcon.displayName = 'MailIcon';

export { MailIcon };