import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereToggle } from './LumiereToggle';

const meta: Meta<typeof LumiereToggle> = {
  title: 'Lumiere/LumiereToggle',
  component: LumiereToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['switch', 'checkbox'],
    },
    pressed: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple story that directly uses args - this will work with controls
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
};

// Switch variant story
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
};

// Checkbox variant story
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
};

// All variants story
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
};

// Disabled states
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
};

// Interactive story with state management (kept for demonstration)
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
}; 


//For toggle controls, several key accessibility considerations are essential:

//Semantic Structure
//- Use proper ARIA roles like `role="switch"` for on/off toggles or `role="button"` with `aria-pressed` for toggle buttons
//- Ensure the toggle has an accessible name via `aria-label`, `aria-labelledby`, or associated label text
//- Include `aria-describedby` if additional context is needed

//State Communication
//- Use `aria-checked="true/false"` for switch roles or `aria-pressed="true/false"` for toggle buttons
//- Ensure state changes are announced to screen readers when toggled
//- Consider using `aria-live` regions for important state changes that affect other content

//Keyboard Navigation
//- Make toggles focusable with `tabindex="0"` (or use native focusable elements)
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
//- Consider animation preferences (`prefers-reduced-motion`)
//- Ensure toggles work without JavaScript for critical functionality
//- Group related toggles logically with fieldsets when appropriate