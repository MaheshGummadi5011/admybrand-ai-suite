import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef<HTMLButtonElement, any>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    icon,
    loading = false,
    disabled,
    ...props
  }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

    const variants: Record<string, string> = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
      ghost: "text-white hover:bg-white/10"
    };

    const sizes: Record<string, string> = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-xl"
    };

    // Type guards for variant and size
    const variantClass = variants[variant] || variants.primary;
    const sizeClass = sizes[size] || sizes.md;

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variantClass,
          sizeClass,
          className
        )}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };