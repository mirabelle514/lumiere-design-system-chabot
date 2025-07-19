import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereInput } from './LumiereInput';

/**
 * Storybook configuration for LumiereInput component
 */
const meta: Meta<typeof LumiereInput> = {
  title: 'Lumiere/LumiereInput',
  component: LumiereInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Story - Basic Input
 * 
 * Shows a basic LumiereInput with standard styling and placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here',
  },
};

/**
 * With Label Story - Input with Label
 * 
 * Demonstrates an input with a label above it for better user experience.
 */
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

/**
 * Required Field Story - Required Input
 * 
 * Shows how required fields are indicated with a red asterisk (*).
 */
export const RequiredField: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
};

/**
 * With Helper Text Story - Input with Helper
 * 
 * Demonstrates helper text below the input for additional guidance.
 */
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be at least 3 characters long',
  },
};

/**
 * Error State Story - Input with Error
 * 
 * Shows how error states are displayed with red borders and error messages.
 */
export const ErrorState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
};

/**
 * Disabled State Story - Disabled Input
 * 
 * Demonstrates the disabled state styling.
 */
export const DisabledState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    disabled: true,
    value: 'user@example.com',
  },
};

/**
 * Read Only State Story - Read Only Input
 * 
 * Shows the read-only state for displaying data without allowing edits.
 */
export const ReadOnlyState: Story = {
  args: {
    label: 'Account ID',
    value: 'ACC-12345',
    readOnly: true,
  },
};

/**
 * Form Example Story - Complete Form
 * 
 * Demonstrates multiple inputs working together in a form context.
 */
export const FormExample: Story = {
  args: {
    label: 'Example Input',
    placeholder: 'This input responds to controls',
    type: 'text',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-4 w-80">
        <LumiereInput
          label="First Name"
          placeholder="Enter your first name"
          required={true}
        />
        
        <LumiereInput
          label="Last Name"
          placeholder="Enter your last name"
          required={true}
        />
        
        <LumiereInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          required={true}
          helperText="We'll never share your email"
        />
        
        <LumiereInput
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          helperText="Optional - for account recovery"
        />
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereInput {...args} />
      </div>
    </div>
  ),
}; 