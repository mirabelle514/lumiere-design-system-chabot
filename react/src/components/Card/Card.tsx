import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cardVariants = cva(
  [
    'transition-all duration-300 ease-in-out',
    'overflow-hidden',
    'relative',
    'rounded-card',
    'p-6',
    'shadow-card',
    'hover:shadow-gold hover:-translate-y-1',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-lumiere-ivory',
          'border border-lumiere-gold',
        ],
        featured: [
          'bg-gradient-to-br from-lumiere-ivory to-lumiere-grey',
          'border-2 border-lumiere-gold',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface LumiereCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  children: React.ReactNode;
}

export const LumiereCard = forwardRef<HTMLDivElement, LumiereCardProps>(
  ({ className, variant, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        {title && (
          <h3 className="font-heading text-heading-3 text-lumiere-navy mb-sm">
            {title}
          </h3>
        )}
        <div className="text-lumiere-navy opacity-80">
          {children}
        </div>
      </div>
    );
  }
);

LumiereCard.displayName = 'LumiereCard';
