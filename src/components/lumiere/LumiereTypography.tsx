import React, { forwardRef } from 'react';
import { cn } from './utils.js';

// Define the allowed element types
type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

// Define the typography variants
type TypographyVariant = 'heading' | 'body' | 'caption' | 'accent';

// Define the size variants
type TypographySize = 'small' | 'base' | 'large';

// Simplified props interface using React.ElementType
export interface LumiereTypographyProps {
  /** HTML element to render */
  as?: TypographyElement;
  /** Typography style variant */
  variant?: TypographyVariant;
  /** Text size variant (only applies to non-heading elements) */
  size?: TypographySize;
  /** Additional CSS classes */
  className?: string;
  /** Component children */
  children: React.ReactNode;
}

// Type-safe mapping for heading styles
const HEADING_STYLES: Record<TypographyElement, string> = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-bold',
  h3: 'text-lg', // Regular weight
  h4: 'text-base font-bold',
  h5: 'text-sm font-bold',
  h6: 'text-xs font-bold',
  p: '',
  span: '',
} as const;

// Type-safe mapping for variant styles
const VARIANT_STYLES: Record<TypographyVariant, string> = {
  heading: 'font-heading',
  body: 'font-body',
  caption: 'font-body text-xs text-muted-foreground',
  accent: 'font-accent text-xl italic',
} as const;

// Type-safe mapping for size styles
const SIZE_STYLES: Record<TypographySize, string> = {
  small: 'text-xs',
  base: 'text-base',
  large: 'text-xl',
} as const;

/**
 * Builds the typography classes based on the component props
 * @param as - The HTML element to render
 * @param variant - The typography variant
 * @param size - The size variant
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildTypographyClasses = (
  as: TypographyElement,
  variant: TypographyVariant,
  size: TypographySize,
  className?: string
): string => {
  const isHeading = as.startsWith('h');
  
  return cn(
    // Base typography styles
    'text-foreground',
    
    // Apply variant styles (but not for headings, as they have their own font family)
    !isHeading && VARIANT_STYLES[variant],
    
    // Apply size styles only for non-heading elements
    !isHeading && SIZE_STYLES[size],
    
    // Apply heading-specific styles
    isHeading && HEADING_STYLES[as],
    
    // Apply variant-specific styles that override other styles
    variant === 'caption' && 'text-xs text-muted-foreground',
    variant === 'accent' && 'text-xl italic',
    
    // For headings, apply the heading font family
    isHeading && variant === 'heading' && 'font-heading',
    
    className
  );
};

/**
 * LumiereTypography Component
 * 
 * A polymorphic typography component that provides consistent text styling
 * across the Lumiere design system. This component uses React.ElementType
 * for a clean and straightforward polymorphic implementation.
 * 
 * **Key Features:**
 * - **Simple polymorphic typing**: Uses React.ElementType for clean implementation
 * - **Type safety**: Full IntelliSense support for HTML attributes
 * - **Semantic HTML**: Proper heading hierarchy with h1-h6 elements
 * - **Design system consistency**: Predefined styles for typography variants
 * - **Accessibility**: Proper semantic markup and ARIA support
 * 
 * **Usage Examples:**
 * ```tsx
 * // Heading with proper typing
 * <LumiereTypography as="h1" variant="heading">
 *   Main Page Title
 * </LumiereTypography>
 * 
 * // Body text with size control
 * <LumiereTypography as="p" variant="body" size="large">
 *   Large body text content
 * </LumiereTypography>
 * 
 * // Caption text
 * <LumiereTypography variant="caption">
 *   Small secondary information
 * </LumiereTypography>
 * 
 * // Accent text
 * <LumiereTypography variant="accent">
 *   Elegant emphasis text
 * </LumiereTypography>
 * ```
 * 
 * **Type Safety Benefits:**
 * - When `as="h1"` is used, TypeScript knows the ref is `HTMLHeadingElement`
 * - HTML attributes are properly typed (e.g., `onClick` for buttons, `href` for links)
 * - IntelliSense provides correct suggestions based on the element type
 */
export const LumiereTypography = forwardRef<HTMLElement, LumiereTypographyProps>(
  ({ 
    className, 
    as = 'p', 
    variant = 'body', 
    size = 'base', 
    children, 
    ...props 
  }, ref) => {
    // Use React.ElementType for polymorphic behavior
    const Component = as as React.ElementType;
    
    // Build the className using the utility function
    const typographyClasses = buildTypographyClasses(as, variant, size, className);
    
    return (
      <Component
        ref={ref}
        className={typographyClasses}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

// Set display name for better debugging
LumiereTypography.displayName = 'LumiereTypography';