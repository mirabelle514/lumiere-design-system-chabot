import React from 'react';
import { LumiereColorSwatch } from './LumiereColorSwatch';

/**
 * LumiereColorPalette Component
 * 
 * A comprehensive color palette display component that showcases all colors
 * in the Lumiere design system. This component serves as a documentation
 * and reference tool for designers and developers.
 * 
 * Features:
 * - Displays all 6 Lumiere colors with their hex codes
 * - Professional documentation layout with headers
 * - Responsive grid layout for different screen sizes
 * - Detailed usage notes for each color
 * - Consistent styling with the design system
 * 
 * Colors included:
 * - Ivory White: Primary background color
 * - Parisian Navy: Primary text and brand color
 * - Antique Gold: Accent color for highlights
 * - Burgundy: Error states and warnings
 * - Sage Green: Success states and feedback
 * - Dove Grey: Secondary backgrounds and borders
 * 
 * @example
 * ```tsx
 * <LumiereColorPalette />
 * ```
 * 
 * @returns JSX.Element
 */
export const LumiereColorPalette: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header section with title and description */}
      <div>
        <h2 className="mb-4 text-2xl font-heading">Lumiere Design System Color Palette</h2>
        <p className="mb-6 text-body text-muted-foreground">
          A French-inspired color palette designed for elegant mobile applications. 
          Each color serves a specific purpose in the design system.
        </p>
      </div>
      
      {/* Color grid with all Lumiere colors */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-6xl md:grid-cols-2 lg:grid-cols-3">
        {/* Primary Background Color */}
        <LumiereColorSwatch
          name="Ivory White"
          hex="#FAF8F3"
          note="Primary background color for cards and main content areas"
          swatchStyle={{ borderRadius: '0' }}
        />
        
        {/* Primary Text Color */}
        <LumiereColorSwatch
          name="Parisian Navy"
          hex="#22304A"
          note="Primary text color and main brand color"
          swatchStyle={{ borderRadius: '0' }}
        />
        
        {/* Accent Color */}
        <LumiereColorSwatch
          name="Antique Gold"
          hex="#C6A664"
          note="Accent color for highlights and interactive elements"
          swatchStyle={{ borderRadius: '0' }}
        />
        
        {/* Error/Warning Color */}
        <LumiereColorSwatch
          name="Burgundy"
          hex="#7C3048"
          note="Error states and warning indicators"
          swatchStyle={{ borderRadius: '0' }}
        />
        
        {/* Success Color */}
        <LumiereColorSwatch
          name="Sage Green"
          hex="#A6B89A"
          note="Success states and positive feedback"
          swatchStyle={{ borderRadius: '0' }}
        />
        
        {/* Secondary Background Color */}
        <LumiereColorSwatch
          name="Dove Grey"
          hex="#E5E2DD"
          note="Secondary backgrounds and subtle borders"
          swatchStyle={{ borderRadius: '0' }}
        />
      </div>
    </div>
  );
}; 