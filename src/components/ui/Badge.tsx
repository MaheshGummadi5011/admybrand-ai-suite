import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center font-medium rounded-full";
    
    const variants = {
      default: "bg-white/10 text-white border border-white/20",
      primary: "bg-primary-500/20 text-primary-300 border border-primary-500/30",
      secondary: "bg-secondary-500/20 text-secondary-300 border border-secondary-500/30",
      success: "bg-green-500/20 text-green-300 border border-green-500/30",
      warning: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
      error: "bg-red-500/20 text-red-300 border border-red-500/30"
    };
    
    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-2 text-base"
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge }; 