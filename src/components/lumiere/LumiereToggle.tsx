import React, { forwardRef } from 'react';
import { cn } from './utils.js';

// Define the toggle variants
type ToggleVariant = 'switch' | 'checkbox';

// Define the ARIA roles
type AriaRole = 'switch' | 'checkbox';

// Base props interface
interface BaseToggleProps {
  /** Whether the toggle is in the "on" state */
  pressed: boolean;
  /** Visual style variant for the toggle */
  variant?: ToggleVariant;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML button attributes
export interface LumiereToggleProps extends BaseToggleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessibility label for screen readers */
  'aria-label'?: string;
  /** Description for screen readers */
  'aria-describedby'?: string;
}

// Type-safe ARIA attributes mapping
const ARIA_ATTRIBUTES: Record<ToggleVariant, { role: AriaRole; 'aria-checked': boolean }> = {
  switch: { role: 'switch', 'aria-checked': false },
  checkbox: { role: 'checkbox', 'aria-checked': false }
} as const;

// Base styles that apply to all toggles
const BASE_TOGGLE_STYLES = 'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

// Switch variant styles
const SWITCH_STYLES = 'relative w-11 h-6 rounded-full';
const SWITCH_PRESSED_STYLES = 'bg-primary';
const SWITCH_UNPRESSED_STYLES = 'bg-muted';

// Checkbox variant styles
const CHECKBOX_STYLES = 'relative w-4 h-4 rounded border-2';
const CHECKBOX_PRESSED_STYLES = 'bg-primary border-primary';
const CHECKBOX_UNPRESSED_STYLES = 'bg-background border-muted-foreground';

// Switch thumb styles
const SWITCH_THUMB_STYLES = 'absolute top-0.5 left-0.5 w-5 h-5 bg-background rounded-full transition-transform duration-200';
const SWITCH_THUMB_PRESSED_STYLES = 'translate-x-5';

// Checkbox checkmark styles
const CHECKBOX_CHECKMARK_STYLES = 'flex absolute inset-0 justify-center items-center text-xs font-bold text-primary-foreground';

/**
 * Gets the appropriate ARIA attributes based on the toggle variant
 * @param variant - The toggle variant
 * @param pressed - Whether the toggle is pressed
 * @returns Object with ARIA attributes
 */
const getAriaAttributes = (variant: ToggleVariant, pressed: boolean) => {
  const baseAttributes = ARIA_ATTRIBUTES[variant];
  return {
    role: baseAttributes.role,
    'aria-checked': pressed
  };
};

/**
 * Builds the toggle classes based on the component props
 * @param variant - The toggle variant
 * @param pressed - Whether the toggle is pressed
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildToggleClasses = (
  variant: ToggleVariant,
  pressed: boolean,
  className?: string
): string => {
  const isSwitch = variant === 'switch';
  const isCheckbox = variant === 'checkbox' || !variant;
  
  return cn(
    BASE_TOGGLE_STYLES,
    isSwitch && SWITCH_STYLES,
    isSwitch && (pressed ? SWITCH_PRESSED_STYLES : SWITCH_UNPRESSED_STYLES),
    isCheckbox && CHECKBOX_STYLES,
    isCheckbox && (pressed ? CHECKBOX_PRESSED_STYLES : CHECKBOX_UNPRESSED_STYLES),
    className
  );
};

/**
 * Builds the switch thumb classes
 * @param pressed - Whether the toggle is pressed
 * @returns The combined className string
 */
const buildSwitchThumbClasses = (pressed: boolean): string => {
  return cn(
    SWITCH_THUMB_STYLES,
    pressed && SWITCH_THUMB_PRESSED_STYLES
  );
};

/**
 * LumiereToggle Component
 * 
 * A design system toggle component that provides a switch-like interface
 * for boolean state changes. This component offers two distinct visual variants
 * with full accessibility support and smooth animations.
 * 
 * **Key Features:**
 * - **Type-safe variants**: Switch and checkbox variants with compile-time validation
 * - **Accessibility**: Complete ARIA support with proper roles and states
 * - **Smooth animations**: Elegant transitions for state changes
 * - **Design system consistency**: Uses Lumiere color tokens and spacing
 * - **Flexible styling**: Supports both switch and checkbox visual styles
 * 
 * **Usage Examples:**
 * ```tsx
 * // Switch variant (default)
 * <LumiereToggle
 *   variant="switch"
 *   pressed={isEnabled}
 *   onPressedChange={setIsEnabled}
 *   aria-label="Enable notifications"
 * />
 * 
 * // Checkbox variant
 * <LumiereToggle
 *   variant="checkbox"
 *   pressed={isChecked}
 *   onPressedChange={setIsChecked}
 *   aria-label="Accept terms and conditions"
 * />
 * 
 * // With custom styling
 * <LumiereToggle
 *   variant="switch"
 *   pressed={isActive}
 *   className="w-16 h-8"
 * />
 * ```
 * 
 * **Accessibility Features:**
 * - Proper ARIA roles (`switch` or `checkbox`)
 * - `aria-checked` state management
 * - Focus management with visible focus rings
 * - Keyboard navigation support
 * - Screen reader compatibility
 * 
 * **Toggle Variants:**
 * - **Switch**: Sliding toggle with thumb animation
 * - **Checkbox**: Square checkbox with checkmark
 */
export const LumiereToggle = forwardRef<HTMLButtonElement, LumiereToggleProps>(
  ({ 
    className, 
    pressed, 
    variant = 'checkbox', 
    children, 
    'aria-label': ariaLabel, 
    'aria-describedby': ariaDescribedby, 
    ...props 
  }, ref) => {
    // Get ARIA attributes based on variant
    const ariaAttributes = getAriaAttributes(variant, pressed);
    
    // Build the toggle classes
    const toggleClasses = buildToggleClasses(variant, pressed, className);
    
    // Build the switch thumb classes
    const switchThumbClasses = buildSwitchThumbClasses(pressed);

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        data-state={pressed ? 'on' : 'off'}
        {...ariaAttributes}
        className={toggleClasses}
        {...props}
      >
        {/* Switch thumb */}
        {variant === 'switch' && (
          <div className={switchThumbClasses} />
        )}
        
        {/* Checkbox checkmark */}
        {(variant === 'checkbox' || !variant) && pressed && (
          <div className={CHECKBOX_CHECKMARK_STYLES}>
            ✓
          </div>
        )}
        
        {children}
      </button>
    );
  }
);

// Set display name for better debugging
LumiereToggle.displayName = 'LumiereToggle';