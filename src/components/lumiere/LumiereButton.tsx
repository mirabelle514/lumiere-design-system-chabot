import React, { forwardRef } from 'react';
import { cn } from './utils.js';

// Define the button variants
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';

// Define the button sizes
type ButtonSize = 'sm' | 'md' | 'lg';

// Base props interface
interface BaseButtonProps {
  /** Visual style variant for the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether button should take full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
}

// Extend with proper HTML button attributes
export interface LumiereButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Description for screen readers */
  'aria-label'?: string;
  /** Expanded state for buttons with popup content */
  'aria-expanded'?: boolean;
  /** Pressed state for toggle buttons */
  'aria-pressed'?: boolean;
  /** Controls ID for buttons that control other elements */
  'aria-controls'?: string;
}

// Type-safe style mappings
const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-foreground text-background hover:bg-foreground/90 shadow-soft hover:shadow-lg hover:-translate-y-0.5',
  secondary: 'bg-background text-foreground border-2 border-primary hover:bg-foreground hover:text-background',
  tertiary: 'bg-transparent text-foreground underline hover:text-destructive hover:no-underline',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft hover:shadow-lg hover:-translate-y-0.5'
} as const;

const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-9',
  md: 'px-6 py-3 text-base min-h-11',
  lg: 'px-8 py-4 text-lg min-h-12'
} as const;

// Base styles that apply to all buttons
const BASE_BUTTON_STYLES = 'inline-flex items-center justify-center rounded-3xl font-heading font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50';

// Disabled state styles
const DISABLED_STYLES = 'bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground hover:translate-y-0 hover:shadow-none';

/**
 * Builds the button classes based on the component props
 * @param variant - The button variant
 * @param size - The button size
 * @param fullWidth - Whether the button should take full width
 * @param disabled - Whether the button is disabled
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth?: boolean,
  disabled?: boolean,
  className?: string
): string => {
  return cn(
    BASE_BUTTON_STYLES,
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    fullWidth && 'w-full',
    disabled && DISABLED_STYLES,
    className
  );
};

/**
 * LumiereButton Component
 * 
 * A design system button component that follows the Lumiere design language.
 * This component provides consistent button styling with full accessibility support
 * and smooth animations.
 * 
 * **Key Features:**
 * - **Type-safe variants**: Four visual variants with compile-time validation
 * - **Responsive sizing**: Three size options with consistent spacing
 * - **Accessibility**: Full ARIA support and keyboard navigation
 * - **Smooth animations**: Elegant hover effects with lift animation
 * - **Design system consistency**: Uses Lumiere color tokens and typography
 * 
 * **Usage Examples:**
 * ```tsx
 * // Primary button with default size
 * <LumiereButton variant="primary" onClick={handleClick}>
 *   Submit Form
 * </LumiereButton>
 * 
 * // Large secondary button with full width
 * <LumiereButton variant="secondary" size="lg" fullWidth>
 *   Continue
 * </LumiereButton>
 * 
 * // Small destructive button
 * <LumiereButton variant="destructive" size="sm" onClick={handleDelete}>
 *   Delete
 * </LumiereButton>
 * 
 * // Tertiary button (text link style)
 * <LumiereButton variant="tertiary">
 *   Learn More
 * </LumiereButton>
 * ```
 * 
 * **Accessibility Features:**
 * - Proper focus management with visible focus rings
 * - ARIA attributes for screen readers
 * - Keyboard navigation support
 * - Disabled state handling
 * - Semantic HTML button element
 */
export const LumiereButton = forwardRef<HTMLButtonElement, LumiereButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth, 
    children, 
    disabled, 
    ...props 
  }, ref) => {
    // Build the className using the utility function
    const buttonClasses = buildButtonClasses(variant, size, fullWidth, disabled, className);
    
    return (
      <button
        ref={ref}
        type="button"
        className={buttonClasses}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Set display name for better debugging
LumiereButton.displayName = 'LumiereButton';