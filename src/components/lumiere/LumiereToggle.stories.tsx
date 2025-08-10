import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereToggle } from './LumiereToggle';

/**
 * LumiereToggle Component Stories
 * 
 * The LumiereToggle component provides a flexible toggle interface for boolean
 * state changes with two distinct visual variants: switch and checkbox. It
 * includes comprehensive accessibility features and smooth animations.
 * 
 * ## Design Principles
 * - **Accessibility First**: Complete ARIA support with proper roles and states
 * - **Visual Clarity**: Clear indication of toggle state through design and animation
 * - **Consistent Behavior**: Uniform interaction patterns across all variants
 * - **Smooth Transitions**: Elegant animations that enhance user experience
 * 
 * ## Toggle Variants
 * - **Switch**: Sliding toggle with thumb animation for on/off states
 * - **Checkbox**: Square checkbox with checkmark for checked/unchecked states
 * 
 * ## Accessibility Features
 * - Proper ARIA roles (\`switch\` or \`checkbox\`)
 * - \`aria-checked\` state management
 * - Focus management with visible focus rings
 * - Keyboard navigation support (Space, Enter)
 * - Screen reader compatibility
 * - Minimum 44x44px touch target size
 * 
 * ## Usage Guidelines
 * - Use **Switch** variant for on/off toggles (settings, features)
 * - Use **Checkbox** variant for selection states (agreements, options)
 * - Always provide descriptive \`aria-label\` for screen readers
 * - Use \`aria-describedby\` for additional context when needed
 * - Test with keyboard navigation and screen readers
 */
const meta: Meta<typeof LumiereToggle> = {
  title: 'Lumiere/LumiereToggle',
  component: LumiereToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereToggle component provides a flexible toggle interface for boolean state changes
with two distinct visual variants: switch and checkbox. It includes comprehensive accessibility
features and smooth animations for enhanced user experience.

## Key Features
- **2 Visual Variants**: Switch (sliding) and Checkbox (square) with distinct behaviors
- **Accessibility**: Complete ARIA support with proper roles and state management
- **Smooth Animations**: Elegant transitions for state changes and interactions
- **Design System Integration**: Uses Lumiere color tokens and spacing consistently
- **Type Safety**: Full TypeScript support with proper HTML button attributes
- **Flexible Styling**: Supports custom styling while maintaining design consistency

## Toggle Variants
- **Switch**: Sliding toggle with thumb animation for on/off states
- **Checkbox**: Square checkbox with checkmark for checked/unchecked states

## Accessibility Features
- Proper ARIA roles (\`switch\` or \`checkbox\`)
- \`aria-checked\` state management
- Focus management with visible focus rings
- Keyboard navigation support (Space, Enter)
- Screen reader compatibility
- Minimum 44x44px touch target size

## When to Use
- **Switch Variant**: Settings toggles, feature enable/disable, on/off states
- **Checkbox Variant**: Selection states, agreements, multiple choice options
- **General**: Any boolean state that needs user interaction
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['switch', 'checkbox'],
      description: 'Visual style variant that determines the toggle\'s appearance and behavior',
      table: {
        type: { summary: 'ToggleVariant' },
        defaultValue: { summary: 'checkbox' },
        category: 'Appearance',
      },
    },
    pressed: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is in the "on" or "pressed" state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled and non-interactive',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    'aria-label': {
      description: 'Accessibility label for screen readers (required for accessibility)',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    'aria-describedby': {
      description: 'ID of element that describes the toggle for additional context',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the toggle button',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    onClick: {
      description: 'Click handler for toggle state changes',
      table: {
        type: { summary: 'MouseEventHandler' },
        category: 'Events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Toggle - Basic Usage
 * 
 * Shows a basic LumiereToggle with default checkbox styling and
 * interactive controls for testing all properties.
 */
export const Default: Story = {
  args: {
    variant: 'switch',
    pressed: false,
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <LumiereToggle
          {...args}
          aria-label="Toggle example"
        />
        <span className="text-sm text-muted-foreground">
          {args.variant || 'default'} - {args.pressed ? 'pressed' : 'unpressed'}
          {args.disabled && ' (disabled)'}
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The default toggle demonstrates the basic functionality with interactive controls. Use the controls panel to test different variants, states, and properties in real-time.',
      },
    },
  },
};

/**
 * Switch Variant - On/Off Toggle
 * 
 * Switch variant provides a sliding toggle interface ideal for
 * on/off states, settings, and feature toggles.
 */
export const Switch: Story = {
  args: {
    variant: 'switch',
    pressed: false,
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <LumiereToggle
          {...args}
          aria-label="Switch toggle"
        />
        <span className="text-sm text-muted-foreground">
          Switch: {args.pressed ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switch toggles are ideal for on/off states, settings, and feature toggles. They provide clear visual feedback with a sliding thumb animation and are commonly used in modern interfaces.',
      },
    },
  },
};

/**
 * Checkbox Variant - Selection Toggle
 * 
 * Checkbox variant provides a traditional checkbox interface for
 * selection states, agreements, and multiple choice options.
 */
export const Checkbox: Story = {
  args: {
    variant: 'checkbox',
    pressed: false,
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <LumiereToggle
          {...args}
          aria-label="Checkbox toggle"
        />
        <span className="text-sm text-muted-foreground">
          Checkbox: {args.pressed ? 'CHECKED' : 'UNCHECKED'}
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox toggles are perfect for selection states, agreements, and multiple choice options. They provide familiar checkbox behavior with enhanced styling and accessibility.',
      },
    },
  },
};

/**
 * All Variants - Complete System
 * 
 * This story showcases all toggle variants in one view, making it easy
 * to compare different styles and understand the complete toggle system.
 */
export const AllVariants: Story = {
  args: {
    variant: 'switch',
    pressed: false,
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="font-medium">Switch Variant</h4>
        <div className="flex gap-4 items-center">
          <LumiereToggle
            {...args}
            variant="switch"
            aria-label="Switch toggle"
          />
          <span className="text-sm text-muted-foreground">
            {args.pressed ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium">Checkbox Variant</h4>
        <div className="flex gap-4 items-center">
          <LumiereToggle
            {...args}
            variant="checkbox"
            aria-label="Checkbox toggle"
          />
          <span className="text-sm text-muted-foreground">
            {args.pressed ? 'CHECKED' : 'UNCHECKED'}
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium">Default (No Variant)</h4>
        <div className="flex gap-4 items-center">
          <LumiereToggle
            {...args}
            aria-label="Default toggle"
          />
          <span className="text-sm text-muted-foreground">
            {args.pressed ? 'CHECKED' : 'UNCHECKED'}
          </span>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereToggle {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive showcase displays all toggle variants in one view, making it easy to understand the complete toggle system and how different variants work together.',
      },
    },
  },
};

/**
 * Disabled States - Non-Interactive
 * 
 * Disabled toggles demonstrate the visual styling for non-interactive
 * states, useful for conditional functionality.
 */
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <LumiereToggle
          variant="switch"
          pressed={false}
          disabled
          aria-label="Disabled switch"
        />
        <span className="text-sm text-muted-foreground">Disabled switch</span>
      </div>

      <div className="flex gap-4 items-center">
        <LumiereToggle
          variant="checkbox"
          pressed={false}
          disabled
          aria-label="Disabled checkbox"
        />
        <span className="text-sm text-muted-foreground">Disabled checkbox</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled toggles show clear visual indication that they\'re not interactive. They maintain their appearance but prevent user interaction, useful for conditional functionality or read-only states.',
      },
    },
  },
};

/**
 * Interactive Examples - State Management
 * 
 * Interactive examples demonstrate how to manage toggle state in
 * real applications with proper event handling.
 */
export const Interactive: Story = {
  render: () => {
    const [switchState, setSwitchState] = React.useState(false);
    const [checkboxState, setCheckboxState] = React.useState(false);
    
    return (
      <div className="space-y-6">
        <div className="mb-4 text-xs text-gray-500">
          <p>Note: This story uses local state and won't respond to controls.</p>
          <p>Use the other stories above for control testing.</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-medium">Interactive Switch</h4>
          <div className="flex gap-4 items-center">
            <LumiereToggle
              variant="switch"
              pressed={switchState}
              onClick={() => setSwitchState(!switchState)}
              aria-label="Interactive switch"
            />
            <span className="text-sm text-muted-foreground">
              {switchState ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-medium">Interactive Checkbox</h4>
          <div className="flex gap-4 items-center">
            <LumiereToggle
              variant="checkbox"
              pressed={checkboxState}
              onClick={() => setCheckboxState(!checkboxState)}
              aria-label="Interactive checkbox"
            />
            <span className="text-sm text-muted-foreground">
              {checkboxState ? 'CHECKED' : 'UNCHECKED'}
            </span>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples demonstrate how to manage toggle state in real applications. They show proper event handling and state management patterns that developers can use in their own implementations.',
      },
    },
  },
};


//For toggle controls, several key accessibility considerations are essential:

//Semantic Structure
//- Use proper ARIA roles like \`role="switch"\` for on/off toggles or \`role="button"\` with \`aria-pressed\` for toggle buttons
//- Ensure the toggle has an accessible name via \`aria-label\`, \`aria-labelledby\`, or associated label text
//- Include \`aria-describedby\` if additional context is needed

//State Communication
//- Use \`aria-checked="true/false"\` for switch roles or \`aria-pressed="true/false"\` for toggle buttons
//- Ensure state changes are announced to screen readers when toggled
//- Consider using \`aria-live\` regions for important state changes that affect other content

//Keyboard Navigation
//- Make toggles focusable with \`tabindex="0"\` (or use native focusable elements)
//- Support Space bar and Enter key activation
//- Provide clear focus indicators that meet WCAG contrast requirements
//- Ensure logical tab order in the interface

//Visual Design
//- Maintain sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
//- Don't rely solely on color to indicate state - use shape, position, or text changes
//- Ensure the clickable/tappable area is at least 44x44 pixels
//- Provide clear visual feedback for hover, focus, and active states

//Screen Reader Support
//- Test with actual screen readers (NVDA, JAWS, VoiceOver)
//- Ensure the purpose and current state are clearly announced
//- Avoid generic labels like "toggle" - be specific about what's being toggled

//Additional Considerations
//- Provide immediate feedback when state changes
//- Consider animation preferences (\`prefers-reduced-motion\`)
//- Ensure toggles work without JavaScript for critical functionality
//- Group related toggles logically with fieldsets when appropriate