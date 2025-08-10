import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereCard, LumiereCardHeader, LumiereCardTitle, LumiereCardContent } from './LumiereCard';

/**
 * LumiereCard Component Stories
 * 
 * The LumiereCard component provides a flexible container system for organizing and
 * presenting content with French-inspired design aesthetics. It offers multiple
 * variants, interactive states, and consistent spacing patterns.
 * 
 * ## Design Principles
 * - **Content Hierarchy**: Clear visual separation between header, title, and content
 * - **Consistent Spacing**: Uniform padding and margins following design system tokens
 * - **Visual Emphasis**: Variants provide different levels of visual prominence
 * - **Interactive Feedback**: Subtle hover effects for clickable cards
 * 
 * ## Usage Guidelines
 * - Use **Standard** cards for basic content presentation and information display
 * - Use **Featured** cards for highlighted content, promotions, or special features
 * - Use **Elevated** cards for important content that needs visual prominence
 * - Use **Interactive** state for cards that are clickable or have actions
 * 
 * ## Component Composition
 * - **LumiereCard**: Main container with variant styling and interactive states
 * - **LumiereCardHeader**: Header section for titles and metadata
 * - **LumiereCardTitle**: Consistent title styling with heading font
 * - **LumiereCardContent**: Content area with proper typography and spacing
 */
const meta: Meta<typeof LumiereCard> = {
  title: 'Lumiere/LumiereCard',
  component: LumiereCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereCard component provides a flexible container system for organizing and presenting content
with consistent styling and multiple visual variants. It follows the Lumiere design system's spacing
and typography principles while offering interactive capabilities.

## Key Features
- **3 Variants**: Standard, Featured, and Elevated with distinct visual styles
- **Interactive States**: Optional hover effects for clickable cards
- **Flexible Layout**: Header, title, and content sub-components for structured layouts
- **Design System Integration**: Uses Lumiere color tokens, spacing, and typography
- **Accessibility**: Proper semantic HTML structure and focus management

## Card Variants
- **Standard**: Clean white background with subtle border for basic content
- **Featured**: Gradient background with gold accent border for highlighted content
- **Elevated**: White background with enhanced shadows for important content

## When to Use
- **Standard**: Basic information display, lists, and general content
- **Featured**: Promotional content, featured items, and special announcements
- **Elevated**: Critical information, forms, and content requiring attention
- **Interactive**: Clickable cards, navigation items, and actionable content
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'featured', 'elevated'],
      description: 'Visual style variant that determines the card\'s appearance and emphasis',
      table: {
        type: { summary: 'CardVariant' },
        defaultValue: { summary: 'standard' },
        category: 'Appearance',
      },
    },
    elevated: {
      control: { type: 'boolean' },
      description: 'Whether to show enhanced shadow effects for additional depth',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Effects',
      },
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the card has hover interactions and clickable styling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Interaction',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the card container',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    children: {
      description: 'Card content including header, title, and content sections',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Standard Card - Basic Content
 * 
 * Standard cards provide a clean, minimal design for basic content presentation.
 * They use subtle borders and white backgrounds for a professional appearance.
 */
export const Standard: Story = {
  args: {
    variant: 'standard',
    children: (
      <>
        <LumiereCardTitle>Standard Card</LumiereCardTitle>
        <LumiereCardContent>
          <p>This is a standard card with clean, minimal styling. Perfect for basic content presentation.</p>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard cards are the foundation of the card system, providing clean and minimal styling for basic content presentation. They work well for lists, information display, and general content organization.',
      },
    },
  },
};

/**
 * Featured Card - Highlighted Content
 * 
 * Featured cards use enhanced styling with gradient backgrounds and golden
 * accent borders to draw attention to important or promotional content.
 */
export const Featured: Story = {
  args: {
    variant: 'featured',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Featured Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This featured card has enhanced styling with a gradient background and golden border accents.</p>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Featured cards use gradient backgrounds and golden accents to create visual hierarchy and draw attention to important content. They\'re ideal for promotions, featured items, and content that needs to stand out.',
      },
    },
  },
};

/**
 * Elevated Card - Premium Styling
 * 
 * Elevated cards provide premium styling with enhanced shadows and depth
 * for content that requires visual prominence and attention.
 */
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Elevated Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This elevated card has premium styling with enhanced shadows and depth for important content.</p>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Elevated cards use enhanced shadows and depth to create visual prominence. They\'re perfect for forms, critical information, and content that requires the user\'s attention.',
      },
    },
  },
};

/**
 * Interactive Card - Hover Effects
 * 
 * Interactive cards provide hover animations and visual feedback for
 * clickable content, making them ideal for navigation and actionable items.
 */
export const Interactive: Story = {
  args: {
    variant: 'featured',
    interactive: true,
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Interactive Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This card has interactive hover effects. Try hovering over it to see the animation.</p>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards provide subtle hover effects including shadow changes and slight upward movement. They\'re perfect for clickable content, navigation items, and cards that trigger actions.',
      },
    },
  },
};

/**
 * Custom Styled Card - Flexible Design
 * 
 * Custom styled cards demonstrate how to apply additional styling while
 * maintaining the design system\'s consistency and component structure.
 */
export const WithCustomStyling: Story = {
  args: {
    variant: 'elevated',
    className: 'w-96',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Custom Styled Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This card has custom styling applied while maintaining the design system\'s consistency.</p>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom styled cards show how to extend the component with additional CSS classes while maintaining design system consistency. This is useful for specific layout requirements or branding needs.',
      },
    },
  },
};

/**
 * All Variants - Complete System
 * 
 * This story showcases all card variants in one view, making it easy to
 * compare different styles and understand the complete card system.
 */
export const AllVariants: Story = {
  args: {
    variant: 'standard',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Controls Example</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This card responds to the variant control above.</p>
        </LumiereCardContent>
      </>
    ),
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl md:grid-cols-3">
        <LumiereCard variant="standard">
          <LumiereCardHeader>
            <LumiereCardTitle>Standard</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent>
            <p>Clean, minimal design for basic content presentation.</p>
          </LumiereCardContent>
        </LumiereCard>
        
        <LumiereCard variant="featured">
          <LumiereCardHeader>
            <LumiereCardTitle>Featured</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent>
            <p>Enhanced styling with gradient background and golden accents.</p>
          </LumiereCardContent>
        </LumiereCard>
        
        <LumiereCard variant="elevated">
          <LumiereCardHeader>
            <LumiereCardTitle>Elevated</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent>
            <p>Premium styling with enhanced shadows for important content.</p>
          </LumiereCardContent>
        </LumiereCard>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereCard {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive showcase displays all card variants in one view, making it easy to understand the complete card system and how different variants work together.',
      },
    },
  },
};

/**
 * Complex Content - Rich Information
 * 
 * Complex content cards demonstrate how to structure rich information
 * with multiple sections, metadata, and action buttons.
 */
export const ComplexContent: Story = {
  args: {
    variant: 'featured',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Complex Content Card</LumiereCardTitle>
          <p className="text-sm text-muted-foreground">With additional metadata</p>
        </LumiereCardHeader>
        <LumiereCardContent>
          <div className="space-y-4">
            <p>This card demonstrates how to structure complex content with multiple sections.</p>
            <div className="flex justify-between items-center text-sm">
              <span>Status: Active</span>
              <span className="text-green-600">✓ Verified</span>
            </div>
            <div className="pt-4 border-t">
              <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary/90">
                Action Button
              </button>
            </div>
          </div>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex content cards show how to organize rich information with multiple sections, metadata, and interactive elements. They demonstrate the flexibility of the card system for various content types.',
      },
    },
  },
};

/**
 * Form Card - Interactive Input
 * 
 * Form cards demonstrate how to use cards for form layouts, providing
 * a clean container for input fields and submission controls.
 */
export const FormCard: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Contact Form</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input 
                type="text" 
                className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 w-full text-white rounded-lg bg-primary hover:bg-primary/90"
            >
              Submit
            </button>
          </form>
        </LumiereCardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Form cards provide a clean container for form layouts, making them ideal for contact forms, settings panels, and any interface requiring user input. The elevated variant works well for forms that need visual prominence.',
      },
    },
  },
}; 