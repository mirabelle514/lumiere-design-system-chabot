import React, { forwardRef, useId } from 'react';
import { cn } from './utils.js';

// Base props interface
interface BaseTextareaProps {
  /** Error message to display below the textarea */
  error?: string;
  /** Label text to display above the textarea */
  label?: string;
  /** Whether the field is required (adds asterisk to label) */
  required?: boolean;
  /** Helper text to display below the textarea */
  helperText?: string;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML textarea attributes
export interface LumiereTextareaProps extends BaseTextareaProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Base styles that apply to all textareas
const BASE_TEXTAREA_STYLES = 'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground';

// Focus state styles
const FOCUS_STYLES = 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

// Disabled state styles
const DISABLED_STYLES = 'disabled:cursor-not-allowed disabled:opacity-50';

// Read-only state styles
const READONLY_STYLES = 'read-only:bg-muted read-only:cursor-default';

// Resize styles
const RESIZE_STYLES = 'resize-vertical';

// Error state styles
const ERROR_STYLES = 'border-destructive focus:ring-destructive';

// Label styles
const LABEL_STYLES = 'block text-sm font-medium text-foreground';

// Required asterisk styles
const REQUIRED_ASTERISK_STYLES = 'text-destructive ml-1';

// Helper text styles
const HELPER_TEXT_STYLES = 'text-sm font-body';

// Error text styles
const ERROR_TEXT_STYLES = 'text-destructive';

/**
 * Builds the textarea classes based on the component props
 * @param error - Whether there's an error
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildTextareaClasses = (
  error?: string,
  className?: string
): string => {
  return cn(
    BASE_TEXTAREA_STYLES,
    FOCUS_STYLES,
    DISABLED_STYLES,
    READONLY_STYLES,
    RESIZE_STYLES,
    error && ERROR_STYLES,
    className
  );
};

/**
 * Builds the helper/error text classes
 * @param isError - Whether this is an error message
 * @returns The appropriate className string
 */
const buildTextClasses = (isError: boolean): string => {
  return cn(
    HELPER_TEXT_STYLES,
    isError ? ERROR_TEXT_STYLES : 'text-muted-foreground'
  );
};

/**
 * Generates unique IDs for accessibility
 * @param baseId - Base ID to use
 * @returns Object with generated IDs
 */
const generateIds = (baseId: string) => ({
  textareaId: baseId,
  labelId: `label-${baseId}`,
  helperTextId: `helper-${baseId}`,
  errorId: `error-${baseId}`
});

/**
 * LumiereTextarea Component
 * 
 * A design system textarea component that provides consistent styling for multi-line
 * text input with French-inspired design language. This component offers comprehensive
 * textarea functionality with full accessibility support.
 * 
 * **Key Features:**
 * - **Type-safe props**: Full TypeScript support with proper HTML textarea attributes
 * - **Accessibility**: Complete ARIA support and screen reader compatibility
 * - **Error handling**: Visual error states with proper messaging
 * - **Form integration**: Works seamlessly with form libraries
 * - **Design system consistency**: Uses Lumiere color tokens and typography
 * - **Auto-generated IDs**: Unique IDs for accessibility (no ID conflicts)
 * - **Resizable**: Vertical resize with proper minimum height
 * 
 * **Usage Examples:**
 * ```tsx
 * // Basic textarea with label
 * <LumiereTextarea
 *   label="Message"
 *   placeholder="Enter your message"
 *   rows={4}
 *   required
 * />
 * 
 * // Textarea with error state
 * <LumiereTextarea
 *   label="Description"
 *   error="Description is required"
 *   helperText="Please provide a detailed description"
 * />
 * 
 * // Disabled textarea
 * <LumiereTextarea
 *   label="Notes"
 *   value="Read-only content"
 *   disabled
 * />
 * 
 * // Textarea with custom styling
 * <LumiereTextarea
 *   label="Custom Textarea"
 *   className="border-2 border-primary"
 * />
 * ```
 * 
 * **Accessibility Features:**
 * - Proper label association with `htmlFor` and `id`
 * - ARIA attributes for error states (`aria-invalid`, `aria-describedby`)
 * - Screen reader announcements for errors (`role="alert"`)
 * - Required field indicators with `aria-required`
 * - Focus management with visible focus rings
 */
export const LumiereTextarea = forwardRef<HTMLTextAreaElement, LumiereTextareaProps>(
  ({ 
    className, 
    error, 
    label, 
    required, 
    helperText, 
    id,
    ...props 
  }, ref) => {
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const textareaId = id || generatedId;
    const { labelId, helperTextId, errorId } = generateIds(textareaId);

    // Build the textarea classes
    const textareaClasses = buildTextareaClasses(error, className);

    return (
      <div className="space-y-2">
        {/* Label with optional required asterisk */}
        {label && (
          <label 
            id={labelId}
            htmlFor={textareaId}
            className={LABEL_STYLES}
          >
            {label}
            {required && (
              <span 
                className={REQUIRED_ASTERISK_STYLES}
                aria-label="required"
              >
                *
              </span>
            )}
          </label>
        )}
        
        {/* Textarea field with conditional error styling */}
        <textarea
          id={textareaId}
          ref={ref}
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={error ? errorId : helperText ? helperTextId : undefined}
          aria-invalid={error ? 'true' : 'false'}
          aria-required={required}
          className={textareaClasses}
          {...props}
        />
        
        {/* Helper text or error message display */}
        {(error || helperText) && (
          <p 
            id={error ? errorId : helperTextId}
            className={buildTextClasses(!!error)}
            role={error ? 'alert' : undefined}
            aria-live={error ? 'polite' : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereTextarea.displayName = 'LumiereTextarea';