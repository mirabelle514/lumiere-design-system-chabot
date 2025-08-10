import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereButton } from './LumiereButton';

/**
 * LumiereButton Component Stories
 * 
 * The LumiereButton is a foundational component in the Lumiere Design System that provides
 * consistent, accessible button styling with smooth animations and full ARIA support.
 * 
 * ## Design Principles
 * - **Consistency**: All buttons follow the same visual language and behavior patterns
 * - **Accessibility**: Built with accessibility-first design, including proper focus management
 * - **Animation**: Subtle hover effects with lift animation for enhanced user experience
 * - **Responsiveness**: Adapts to different screen sizes and touch targets
 * 
 * ## Usage Guidelines
 * - Use **Primary** buttons for main actions (Submit, Continue, Save)
 * - Use **Secondary** buttons for alternative actions (Cancel, Back)
 * - Use **Tertiary** buttons for less prominent actions (Learn More, View Details)
 * - Use **Destructive** buttons for dangerous actions (Delete, Remove)
 * 
 * ## Accessibility
 * - All buttons support keyboard navigation
 * - Proper focus rings for visual focus indication
 * - ARIA attributes for screen readers
 * - Disabled state handling with appropriate styling
 */
const meta: Meta<typeof LumiereButton> = {
  title: 'Lumiere/LumiereButton',
  component: LumiereButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereButton component provides a consistent button interface across the Lumiere Design System.
It supports multiple variants, sizes, and states while maintaining accessibility standards and smooth animations.

## Key Features
- **4 Variants**: Primary, Secondary, Tertiary, and Destructive
- **3 Sizes**: Small (sm), Medium (md), and Large (lg)
- **Full Width Support**: Option to expand button to container width
- **Disabled State**: Proper handling of disabled interactions
- **Accessibility**: Full ARIA support and keyboard navigation
- **Animations**: Smooth hover effects with lift animation

## When to Use
- **Primary**: Main actions that users should take
- **Secondary**: Alternative or less prominent actions
- **Tertiary**: Text-like buttons for supplementary actions
- **Destructive**: Actions that could have negative consequences
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Visual style variant that determines the button\'s appearance and emphasis',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button affecting padding, font size, and minimum height',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'md' },
        category: 'Appearance',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled and non-interactive',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should expand to fill its container width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
    children: {
      description: 'Content to display inside the button (text, icons, etc.)',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the button',
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
 * Primary Button - Default Variant
 * 
 * The primary button is used for the main action on a page or form.
 * It has the highest visual weight and should be used sparingly.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons represent the main action users should take. Use them for submit buttons, primary CTAs, and key user actions.',
      },
    },
  },
};

/**
 * Secondary Button - Alternative Action
 * 
 * Secondary buttons are used for alternative actions that are less prominent
 * than the primary action but still important.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons provide alternative actions without competing with the primary button. Common uses include Cancel, Back, or secondary CTAs.',
      },
    },
  },
};

/**
 * Tertiary Button - Text Link Style
 * 
 * Tertiary buttons have minimal visual weight and are used for supplementary
 * actions that don\'t need to compete for attention.
 */
export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary buttons are styled like text links and are used for less prominent actions such as "Learn More", "View Details", or supplementary information.',
      },
    },
  },
};

/**
 * Destructive Button - Dangerous Actions
 * 
 * Destructive buttons are used for actions that could have negative consequences
 * such as deleting data or removing items.
 */
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Destructive buttons should be used sparingly and only for actions that could have negative consequences. Consider adding confirmation dialogs for critical destructive actions.',
      },
    },
  },
};

/**
 * Small Size Button
 * 
 * Small buttons are used in compact interfaces or when space is limited.
 * They maintain touch target accessibility while taking up less space.
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small buttons are ideal for compact interfaces, inline forms, or when you need to conserve space while maintaining accessibility standards.',
      },
    },
  },
};

/**
 * Large Size Button
 * 
 * Large buttons provide prominent touch targets and are ideal for mobile
 * interfaces or when you want to emphasize the button\'s importance.
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large buttons are perfect for mobile interfaces, hero sections, or when you want to create a prominent call-to-action that\'s easy to interact with.',
      },
    },
  },
};

/**
 * Disabled State Button
 * 
 * Disabled buttons indicate that an action is not currently available.
 * They maintain visual consistency while clearly showing the unavailable state.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons should be used when an action is temporarily unavailable. They maintain the button\'s visual structure while clearly indicating the unavailable state.',
      },
    },
  },
};

/**
 * Full Width Button
 * 
 * Full width buttons expand to fill their container, making them ideal
 * for mobile interfaces or when you want to maximize touch target size.
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
  render: (args) => (
    <div className="space-y-4 w-80">
      <LumiereButton {...args} />
      <LumiereButton {...args} variant="secondary" />
      <LumiereButton {...args} variant="tertiary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full width buttons are excellent for mobile interfaces, form submissions, or when you want to maximize the touch target area. They work well in narrow containers.',
      },
    },
  },
};

/**
 * All Variants Showcase
 * 
 * This story demonstrates all button variants, sizes, and states in one view
 * to help designers and developers understand the complete button system.
 */
export const AllVariants: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button Example',
    fullWidth: false,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-x-2">
          <LumiereButton variant="primary">Primary</LumiereButton>
          <LumiereButton variant="secondary">Secondary</LumiereButton>
          <LumiereButton variant="tertiary">Tertiary</LumiereButton>
          <LumiereButton variant="destructive">Destructive</LumiereButton>
        </div>
        <div className="space-x-2">
          <LumiereButton variant="primary" size="sm">Small</LumiereButton>
          <LumiereButton variant="primary" size="md">Medium</LumiereButton>
          <LumiereButton variant="primary" size="lg">Large</LumiereButton>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Full Width Examples:</h4>
        <div className="space-y-2 w-80">
          <LumiereButton variant="primary" fullWidth>Full Width Primary</LumiereButton>
          <LumiereButton variant="secondary" fullWidth>Full Width Secondary</LumiereButton>
          <LumiereButton variant="tertiary" fullWidth>Full Width Tertiary</LumiereButton>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereButton {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive showcase displays all button variants, sizes, and states in one view. Use this story to understand the complete button system and how different combinations work together.',
      },
    },
  },
}; 