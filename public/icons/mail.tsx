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
  className?: string;
}

const MailIcon = forwardRef<MailIconHandle, MailIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          controls.start({
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.5 }
          });
        },
        stopAnimation: () => {
          controls.start({
            pathLength: 0,
            opacity: 0,
            transition: { duration: 0.5 }
          });
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start({
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.5 }
          });
        }
        onMouseEnter?.(e);
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start({
            pathLength: 0,
            opacity: 0,
            transition: { duration: 0.5 }
          });
        }
        onMouseLeave?.(e);
      },
      [controls, onMouseLeave]
    );

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
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
          />
          <motion.path
            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.3 }}
          />
        </svg>
      </div>
    );
  }
);

MailIcon.displayName = 'MailIcon';

export { MailIcon };