import React, { forwardRef } from 'react';
import { cn } from './utils.js';

// Define the card variants
type CardVariant = 'standard' | 'featured' | 'elevated';

// Base props interface
interface BaseCardProps {
  /** Card variant style */
  variant?: CardVariant;
  /** Whether to show elevated shadow effect */
  elevated?: boolean;
  /** Whether card has hover interactions */
  interactive?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML div attributes
export interface LumiereCardProps extends BaseCardProps, React.HTMLAttributes<HTMLDivElement> {}

// Type-safe style mappings
const CARD_VARIANTS: Record<CardVariant, string> = {
  standard: 'bg-white border-gray-200',
  featured: 'bg-gradient-to-br from-ivory-white to-dove-grey border-antique-gold/30 shadow-md',
  elevated: 'bg-white border-parisian-navy/20 shadow-lg shadow-parisian-navy/10'
} as const;

// Base styles that apply to all cards
const BASE_CARD_STYLES = 'bg-card text-card-foreground rounded-card border border-border';

// Interactive styles
const INTERACTIVE_STYLES = 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1';

/**
 * Builds the card classes based on the component props
 * @param variant - The card variant
 * @param elevated - Whether the card should be elevated
 * @param interactive - Whether the card should have hover interactions
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildCardClasses = (
  variant: CardVariant,
  elevated?: boolean,
  interactive?: boolean,
  className?: string
): string => {
  return cn(
    BASE_CARD_STYLES,
    CARD_VARIANTS[variant],
    elevated && 'shadow-card',
    interactive && INTERACTIVE_STYLES,
    className
  );
};

/**
 * LumiereCard Component
 * 
 * A design system card component that provides a container for content with
 * French-inspired styling. This component offers consistent card layouts with
 * multiple variants and interactive states.
 * 
 * **Key Features:**
 * - **Type-safe variants**: Three distinct card styles with compile-time validation
 * - **Flexible layout**: Standard, featured, and elevated variants
 * - **Interactive states**: Optional hover effects for clickable cards
 * - **Design system consistency**: Uses Lumiere color tokens and spacing
 * - **Accessibility**: Proper semantic HTML structure
 * 
 * **Usage Examples:**
 * ```tsx
 * // Standard card
 * <LumiereCard variant="standard">
 *   <LumiereCardContent>
 *     <p>Basic content card</p>
 *   </LumiereCardContent>
 * </LumiereCard>
 * 
 * // Featured card with elevation
 * <LumiereCard variant="featured" elevated>
 *   <LumiereCardHeader>
 *     <LumiereCardTitle>Featured Content</LumiereCardTitle>
 *   </LumiereCardHeader>
 *   <LumiereCardContent>
 *     <p>Premium content with enhanced styling</p>
 *   </LumiereCardContent>
 * </LumiereCard>
 * 
 * // Interactive elevated card
 * <LumiereCard variant="elevated" interactive onClick={handleClick}>
 *   <LumiereCardContent>
 *     <p>Clickable card with hover effects</p>
 *   </LumiereCardContent>
 * </LumiereCard>
 * ```
 * 
 * **Card Variants:**
 * - **Standard**: Clean white background with subtle border
 * - **Featured**: Gradient background with gold accent border
 * - **Elevated**: White background with enhanced shadow effects
 */
export const LumiereCard = forwardRef<HTMLDivElement, LumiereCardProps>(
  ({ 
    className, 
    variant = 'standard', 
    elevated = false, 
    interactive = false, 
    children, 
    ...props 
  }, ref) => {
    // Build the className using the utility function
    const cardClasses = buildCardClasses(variant, elevated, interactive, className);
    
    return (
      <div
        ref={ref}
        className={cardClasses}
        {...props}
      >
        {/* Card content with consistent padding */}
        <div className="p-6">
          {children}
        </div>
      </div>
    );
  }
);

/**
 * LumiereCardHeader Component
 * 
 * A sub-component for card headers that provides consistent spacing
 * and styling for card titles and metadata.
 * 
 * **Usage:**
 * ```tsx
 * <LumiereCardHeader>
 *   <LumiereCardTitle>Card Title</LumiereCardTitle>
 *   <p className="text-sm text-muted-foreground">Subtitle</p>
 * </LumiereCardHeader>
 * ```
 */
export const LumiereCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('mb-4', className)} 
      {...props} 
    />
  )
);

/**
 * LumiereCardTitle Component
 * 
 * A sub-component for card titles that uses the Lumiere heading font
 * and appropriate text styling for card headers.
 * 
 * **Usage:**
 * ```tsx
 * <LumiereCardTitle>My Card Title</LumiereCardTitle>
 * ```
 */
export const LumiereCardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn('text-lg font-heading text-foreground', className)} 
      {...props} 
    />
  )
);

/**
 * LumiereCardContent Component
 * 
 * A sub-component for card content that provides consistent text styling
 * with slightly muted foreground color for better readability.
 * 
 * **Usage:**
 * ```tsx
 * <LumiereCardContent>
 *   This is the main content of the card with proper typography.
 * </LumiereCardContent>
 * ```
 */
export const LumiereCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('text-foreground/80 font-body', className)} 
      {...props} 
    />
  )
);

// Set display names for better debugging
LumiereCard.displayName = 'LumiereCard';
LumiereCardHeader.displayName = 'LumiereCardHeader';
LumiereCardTitle.displayName = 'LumiereCardTitle';
LumiereCardContent.displayName = 'LumiereCardContent';