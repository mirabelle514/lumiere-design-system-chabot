import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const typographyVariants = cva(
  ['text-lumiere-navy'],
  {
    variants: {
      variant: {
        'heading-1': [
          'font-heading font-bold text-heading-1',
          'leading-tight tracking-tight',
        ],
        'heading-2': [
          'font-heading font-bold text-heading-2',
          'leading-tight tracking-tight',
        ],
        'heading-3': [
          'font-heading font-semibold text-heading-3',
          'leading-snug',
        ],
        'body': [
          'font-body text-body',
          'leading-relaxed',
        ],
        'caption': [
          'font-body text-caption',
          'leading-normal opacity-75',
        ],
        'accent': [
          'font-accent italic text-accent',
          'leading-relaxed',
        ],
      },
      color: {
        default: 'text-lumiere-navy',
        navy: 'text-lumiere-navy',
        burgundy: 'text-lumiere-burgundy',
        sage: 'text-lumiere-sage',
        muted: 'text-lumiere-navy opacity-70',
      },
    },
    defaultVariants: {
      variant: 'body',
      color: 'default',
    },
  }
);

const elementMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'caption': 'span',
  'accent': 'span',
} as const;

export interface LumiereTypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const LumiereTypography = forwardRef<HTMLElement, LumiereTypographyProps>(
  ({ className, variant = 'body', color, as, children, ...props }, ref) => {
    const Element = as || (variant && elementMap[variant]) || 'p';

    return (
      <Element
        ref={ref}
        className={cn(typographyVariants({ variant, color }), className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

LumiereTypography.displayName = 'LumiereTypography';
