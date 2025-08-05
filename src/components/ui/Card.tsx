import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef<HTMLDivElement, any>(
  ({ className, variant = 'default', children, hover = true, ...props }, ref) => {
    const baseClasses = "rounded-2xl p-6 transition-all duration-300";

    const variants: Record<string, string> = {
      default: "bg-white/5 backdrop-blur-sm border border-white/10",
      glass: "glass-card",
      gradient: "gradient-border bg-white/5 backdrop-blur-sm"
    };

    const MotionComponent = hover ? motion.div : 'div';
    const variantClass = variants[variant] || variants.default;

    return (
      <MotionComponent
        ref={ref}
        className={cn(
          baseClasses,
          variantClass,
          hover && "hover:scale-105 hover:shadow-2xl",
          className
        )}
        whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

Card.displayName = 'Card';

export { Card }; 