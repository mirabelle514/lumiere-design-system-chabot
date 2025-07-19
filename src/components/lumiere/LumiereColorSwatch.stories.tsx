import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereColorSwatch } from './LumiereColorSwatch';

/**
 * Storybook configuration for LumiereColorSwatch component
 * 
 * This meta object configures how the component appears in Storybook:
 * - Title: Groups it under "Lumiere" category
 * - Layout: Centers the component in the preview
 * - Autodocs: Automatically generates documentation
 * - Controls: Allows interactive editing of swatchStyle prop
 */
const meta: Meta<typeof LumiereColorSwatch> = {
  title: 'Lumiere/LumiereColorSwatch',
  component: LumiereColorSwatch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    swatchStyle: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Story - Single Swatch Example
 * 
 * Shows a basic LumiereColorSwatch with all standard features:
 * - Color display area
 * - Color name and hex code
 * - Usage note/description
 * - Card styling with border and shadow
 */
export const Default: Story = {
  args: {
    name: 'Ivory White',
    hex: '#FAF8F3',
    note: 'Primary background color for cards and main content areas',
  },
};

/**
 * LumiereColorPalette Story - Complete Color System
 * 
 * Demonstrates the full Lumiere color palette in a professional documentation format.
 * This story shows:
 * - All 6 Lumiere colors with their hex codes
 * - Detailed usage notes for each color
 * - Professional presentation with headers and descriptions
 * - Responsive grid layout for different screen sizes
 */
export const LumiereColorPalette: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="mb-4 text-2xl font-heading">Lumiere Design System Color Palette</h2>
        <p className="mb-6 text-body text-muted-foreground">
          A French-inspired color palette designed for elegant mobile applications. 
          Each color serves a specific purpose in the design system.
        </p>
      </div>
      
      {/* Color Grid */}
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
  ),
};

/**
 * ColorUsageExamples Story - Usage Guidelines
 * 
 * Educational story that teaches when and how to use each color.
 * Organized by color categories to help designers and developers understand:
 * - Primary colors for main UI elements
 * - Accent colors for interactive elements
 * - Supporting colors for secondary elements
 */
export const ColorUsageExamples: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-6xl">
      {/* Header */}
      <div>
        <h2 className="mb-4 text-2xl font-heading">Color Usage Guidelines</h2>
        <p className="mb-6 text-body text-muted-foreground">
          Understanding when and how to use each color in the Lumiere design system.
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Primary Colors Section */}
        <div>
          <h3 className="mb-3 text-lg font-heading">Primary Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LumiereColorSwatch
              name="Ivory White"
              hex="#FAF8F3"
              note="Use for main backgrounds, cards, and content areas"
              swatchStyle={{ borderRadius: '0' }}
            />
            <LumiereColorSwatch
              name="Parisian Navy"
              hex="#22304A"
              note="Use for headings, body text, and primary actions"
              swatchStyle={{ borderRadius: '0' }}
            />
          </div>
        </div>
        
        {/* Accent Colors Section */}
        <div>
          <h3 className="mb-3 text-lg font-heading">Accent Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LumiereColorSwatch
              name="Antique Gold"
              hex="#C6A664"
              note="Use for buttons, links, and interactive highlights"
              swatchStyle={{ borderRadius: '0' }}
            />
            <LumiereColorSwatch
              name="Sage Green"
              hex="#A6B89A"
              note="Use for success messages and positive feedback"
              swatchStyle={{ borderRadius: '0' }}
            />
          </div>
        </div>
        
        {/* Supporting Colors Section */}
        <div>
          <h3 className="mb-3 text-lg font-heading">Supporting Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LumiereColorSwatch
              name="Burgundy"
              hex="#7C3048"
              note="Use for errors, warnings, and destructive actions"
              swatchStyle={{ borderRadius: '0' }}
            />
            <LumiereColorSwatch
              name="Dove Grey"
              hex="#E5E2DD"
              note="Use for subtle backgrounds, borders, and disabled states"
              swatchStyle={{ borderRadius: '0' }}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * SwatchVariations Story - Component Flexibility
 * 
 * Demonstrates the different styling options available with the component:
 * - Rectangular swatches with full card styling
 * - Rounded swatches without borders for cleaner presentation
 * Shows how the component can adapt to different use cases and design needs.
 */
export const SwatchVariations: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      {/* Header */}
      <div>
        <h2 className="mb-4 text-2xl font-heading">Swatch Style Variations</h2>
        <p className="mb-6 text-body text-muted-foreground">
          The LumiereColorSwatch component supports different styling options for various use cases.
        </p>
      </div>
      
      {/* Style Variations Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Rectangular Style */}
        <div>
          <h3 className="mb-3 text-lg font-heading">Rectangular</h3>
          <LumiereColorSwatch
            name="Antique Gold"
            hex="#C6A664"
            note="Clean rectangular swatches for documentation"
            swatchStyle={{ borderRadius: '0' }}
          />
        </div>
        
        {/* Rounded Style */}
        <div>
          <h3 className="mb-3 text-lg font-heading">Rounded</h3>
          <LumiereColorSwatch
            name="Parisian Navy"
            hex="#22304A"
            note="Rounded corners for softer presentation"
            swatchStyle={{ borderRadius: '12px' }}
            noBorder={true}
          />
        </div>
      </div>
    </div>
  ),
};