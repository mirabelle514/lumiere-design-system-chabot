import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereSpacing } from './LumiereSpacing';

/**
 * LumiereSpacing Component Stories
 * 
 * The LumiereSpacing component showcases the comprehensive spacing system within
 * the Lumiere Design System. It provides visual representations, usage guidelines,
 * and practical examples for maintaining consistent spacing across applications.
 * 
 * ## Design Principles
 * - **Consistent Scale**: 8-point grid system for predictable spacing relationships
 * - **Visual Hierarchy**: Clear spacing levels that guide user attention
 * - **Mobile First**: Touch-friendly spacing that works across all devices
 * - **Accessibility**: Proper spacing for readability and interaction
 * - **Design System Integration**: Seamless integration with Lumiere tokens
 * 
 * ## Spacing Scale
 * - **XS (4px)**: Icon padding, small gaps, inline element spacing
 * - **SM (8px)**: Button padding, form spacing, touch element gaps
 * - **MD (16px)**: Card padding, section gaps, content margins
 * - **LG (24px)**: Page margins, large spacing, major section breaks
 * - **XL (32px)**: Section padding, hero spacing, content separation
 * - **2XL (48px)**: Major section breaks, page-level spacing
 * - **3XL (64px)**: Page-level spacing, hero section margins
 * 
 * ## Usage Guidelines
 * - Use consistent spacing within related content groups
 * - Maintain proper touch target sizes (minimum 44px)
 * - Apply spacing systematically across similar components
 * - Consider content hierarchy when choosing spacing values
 * - Test spacing on various screen sizes and devices
 */
const meta: Meta<typeof LumiereSpacing> = {
  title: 'Lumiere/LumiereSpacing',
  component: LumiereSpacing,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The LumiereSpacing component showcases the comprehensive spacing system within the Lumiere
Design System. It provides visual representations, usage guidelines, and practical examples
for maintaining consistent spacing across applications.

## Key Features
- **Visual Spacing Examples**: Clear visual representation of each spacing value
- **Usage Guidelines**: Practical examples of when to use each spacing size
- **Mobile-First Approach**: Touch target and content spacing guidelines
- **Design System Consistency**: Uses Lumiere color tokens and typography
- **Accessibility**: Proper labeling and screen reader support
- **Interactive Controls**: Adjust spacing display and guidelines visibility

## Spacing System
- **XS (4px)**: Icon padding, small gaps, inline element spacing
- **SM (8px)**: Button padding, form spacing, touch element gaps
- **MD (16px)**: Card padding, section gaps, content margins
- **LG (24px)**: Page margins, large spacing, major section breaks
- **XL (32px)**: Section padding, hero spacing, content separation
- **2XL (48px)**: Major section breaks, page-level spacing
- **3XL (64px)**: Page-level spacing, hero section margins

## Mobile Guidelines
- Minimum 44px for primary actions
- 32px for secondary actions
- 8px spacing between touch elements
- 16px margins from screen edges

## Content Spacing Guidelines
- 24px between major sections
- 16px between related elements
- 8px between form fields
- 4px for inline element spacing

## When to Use
- **Design System Documentation**: Showcasing spacing values and usage
- **Component Development**: Understanding spacing relationships
- **Layout Planning**: Planning consistent spacing across interfaces
- **Design Reviews**: Ensuring spacing consistency in designs
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'The specific spacing size to display (overrides showAll when set)',
      table: {
        type: { summary: 'SpacingSize' },
        category: 'Display',
      },
    },
    showAll: {
      control: { type: 'boolean' },
      description: 'Whether to show all spacing sizes or just the selected size',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Display',
      },
    },
    showGuidelines: {
      control: { type: 'boolean' },
      description: 'Whether to show spacing guidelines and best practices',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the spacing container',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * All Spacing - Complete System
 * 
 * Shows all spacing values in the Lumiere Design System with guidelines,
 * providing a comprehensive overview of the complete spacing scale.
 */
export const AllSpacing: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive view displays all spacing values in the Lumiere Design System, from XS (4px) to 3XL (64px). It includes usage guidelines and mobile best practices for complete spacing understanding.',
      },
    },
  },
};

/**
 * Single Spacing - Focused View
 * 
 * Demonstrates a single spacing size for focused examination
 * and understanding of specific spacing values.
 */
export const SingleSpacing: Story = {
  args: {
    size: 'md',
    showAll: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Single spacing view focuses on one specific spacing value (Medium - 16px) for detailed examination. This is useful for understanding individual spacing values and their applications.',
      },
    },
  },
};

/**
 * Small Spacing - Compact Elements
 * 
 * Shows small spacing (8px) which is ideal for button padding,
 * form spacing, and touch element gaps.
 */
export const SmallSpacing: Story = {
  args: {
    size: 'sm',
    showAll: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small spacing (8px) is perfect for compact elements like button padding, form field spacing, and gaps between touch elements. It provides adequate breathing room without excessive space.',
      },
    },
  },
};

/**
 * Large Spacing - Content Separation
 * 
 * Demonstrates large spacing (24px) for page margins,
 * large spacing, and major section breaks.
 */
export const LargeSpacing: Story = {
  args: {
    size: 'xl',
    showAll: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large spacing (32px) creates clear content separation and is ideal for section padding, hero spacing, and major content divisions. It helps establish visual hierarchy.',
      },
    },
  },
};

/**
 * With Guidelines - Best Practices
 * 
 * Shows spacing values with comprehensive guidelines for
 * mobile touch targets and content spacing best practices.
 */
export const WithGuidelines: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Guidelines provide essential best practices for mobile touch targets and content spacing. This includes minimum sizes for interactive elements and recommended spacing between content sections.',
      },
    },
  },
};

/**
 * All Spacing Sizes - Individual Examples
 * 
 * Displays each spacing size individually with clear labels,
 * making it easy to compare and understand the complete scale.
 */
export const AllSpacingSizes: Story = {
  args: {
    showAll: false,
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-heading mb-4">Extra Small (4px)</h3>
        <LumiereSpacing {...args} size="xs" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Small (8px)</h3>
        <LumiereSpacing {...args} size="sm" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Medium (16px)</h3>
        <LumiereSpacing {...args} size="md" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Large (24px)</h3>
        <LumiereSpacing {...args} size="lg" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Extra Large (32px)</h3>
        <LumiereSpacing {...args} size="xl" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">2XL (48px)</h3>
        <LumiereSpacing {...args} size="2xl" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">3XL (64px)</h3>
        <LumiereSpacing {...args} size="3xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive breakdown shows each spacing size individually with clear labels and descriptions. It makes it easy to understand the complete spacing scale and how each value relates to the others.',
      },
    },
  },
};

/**
 * Interactive Example - Complete System
 * 
 * Interactive example that demonstrates the complete spacing system
 * with guidelines in a card-based layout for better organization.
 */
export const InteractiveExample: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-6 bg-card rounded-lg border">
        <h3 className="text-lg font-heading mb-4">Complete Spacing System</h3>
        <LumiereSpacing {...args} />
      </div>
      
      <div className="p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-heading mb-4">Spacing Guidelines</h3>
        <LumiereSpacing showAll={false} showGuidelines={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples demonstrate the complete spacing system in organized, card-based layouts. This makes it easy to understand how spacing works in different contexts and how to apply it effectively.',
      },
    },
  },
};

/**
 * Spacing Comparison - Side by Side
 * 
 * Grid layout showing different spacing sizes side by side
 * for easy comparison and understanding of spacing relationships.
 */
export const SpacingComparison: Story = {
  args: {
    showAll: false,
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-heading mb-4">Small Spacing</h3>
        <LumiereSpacing {...args} size="sm" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Medium Spacing</h3>
        <LumiereSpacing {...args} size="md" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Large Spacing</h3>
        <LumiereSpacing {...args} size="lg" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Extra Large Spacing</h3>
        <LumiereSpacing {...args} size="xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spacing comparison provides a side-by-side view of different spacing values, making it easy to understand the relationships between different sizes and how they work together in layouts.',
      },
    },
  },
}; 