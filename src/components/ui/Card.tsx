import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  children: React.ReactNode;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, hover = true, ...props }, ref) => {
    const baseClasses = "rounded-2xl p-6 transition-all duration-300";
    
    const variants = {
      default: "bg-white/5 backdrop-blur-sm border border-white/10",
      glass: "glass-card",
      gradient: "gradient-border bg-white/5 backdrop-blur-sm"
    };

    const MotionComponent = hover ? motion.div : 'div';

    return (
      <MotionComponent
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
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