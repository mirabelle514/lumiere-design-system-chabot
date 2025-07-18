import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-heading font-bold',
    'border-0 cursor-pointer',
    'transition-all duration-300 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'text-center whitespace-nowrap select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-lumiere-navy text-white',
          'shadow-soft',
          'hover:bg-opacity-90 hover:-translate-y-0.5',
          'focus:ring-lumiere-navy focus:ring-opacity-20',
        ],
        secondary: [
          'bg-lumiere-ivory text-lumiere-navy',
          'border-2 border-lumiere-gold',
          'hover:bg-lumiere-navy hover:text-white hover:border-lumiere-navy',
          'focus:ring-lumiere-gold focus:ring-opacity-20',
        ],
        tertiary: [
          'bg-transparent text-lumiere-navy',
          'underline underline-offset-2',
          'hover:text-lumiere-burgundy hover:no-underline',
          'focus:ring-lumiere-navy focus:ring-opacity-20',
        ],
      },
      size: {
        small: ['px-4 py-2', 'text-sm', 'min-h-[40px]', 'rounded-lg'],
        medium: ['px-6 py-3', 'text-base', 'min-h-[48px]', 'rounded-button'],
        large: ['px-8 py-4', 'text-lg', 'min-h-[56px]', 'rounded-button'],
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false,
    },
  }
);

export interface LumiereButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const LumiereButton = forwardRef<HTMLButtonElement, LumiereButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LumiereButton.displayName = 'LumiereButton';
