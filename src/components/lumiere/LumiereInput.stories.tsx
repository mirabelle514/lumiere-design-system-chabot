import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereInput } from './LumiereInput';

/**
 * LumiereInput Component Stories
 * 
 * The LumiereInput component provides a comprehensive form input system with
 * consistent styling, accessibility features, and error handling. It follows
 * the Lumiere design system's principles for form elements.
 * 
 * ## Design Principles
 * - **Accessibility First**: Complete ARIA support and screen reader compatibility
 * - **Consistent Styling**: Uniform appearance across all input types and states
 * - **Error Handling**: Clear visual feedback for validation errors
 * - **User Guidance**: Helper text and required field indicators
 * 
 * ## Usage Guidelines
 * - Always provide labels for better accessibility and user experience
 * - Use helper text to guide users on input requirements
 * - Implement proper error handling with descriptive error messages
 * - Use appropriate input types for better mobile experience and validation
 * 
 * ## Accessibility Features
 * - Proper label association with `htmlFor` and `id` attributes
 * - ARIA attributes for error states and required fields
 * - Screen reader announcements for errors and helper text
 * - Focus management with visible focus rings
 * - Auto-generated unique IDs to prevent conflicts
 */
const meta: Meta<typeof LumiereInput> = {
  title: 'Lumiere/LumiereInput',
  component: LumiereInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereInput component provides a comprehensive form input system with consistent styling,
accessibility features, and error handling. It follows the Lumiere design system's principles
for form elements and provides a solid foundation for building accessible forms.

## Key Features
- **Multiple Input Types**: Text, email, password, number, tel, url, search, date, time
- **Accessibility**: Complete ARIA support and screen reader compatibility
- **Error Handling**: Visual error states with proper messaging and ARIA attributes
- **Form Integration**: Works seamlessly with form libraries and validation systems
- **Design System Integration**: Uses Lumiere color tokens, typography, and spacing
- **Auto-generated IDs**: Unique IDs for accessibility (no ID conflicts)

## Input Types
- **Text**: General text input for names, titles, and descriptions
- **Email**: Email addresses with appropriate mobile keyboard
- **Password**: Secure password input with masking
- **Number**: Numeric input with increment/decrement controls
- **Tel**: Phone number input with appropriate mobile keyboard
- **URL**: Web address input with validation
- **Search**: Search queries with appropriate styling
- **Date/Time**: Date and time selection with native pickers

## When to Use
- **Form Fields**: Any input field in forms, surveys, or data entry
- **User Settings**: Profile information, preferences, and account details
- **Data Input**: Configuration, settings, and administrative interfaces
- **Search Interfaces**: Search bars and filtering inputs
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'],
      description: 'The HTML input type that determines behavior and mobile keyboard',
      table: {
        type: { summary: 'HTMLInputType' },
        defaultValue: { summary: 'text' },
        category: 'Input',
      },
    },
    label: {
      description: 'Text label displayed above the input field for accessibility',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      description: 'Placeholder text shown when the input is empty',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required (adds red asterisk to label)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validation',
      },
    },
    error: {
      description: 'Error message displayed below the input with error styling',
      table: {
        type: { summary: 'string' },
        category: 'Validation',
      },
    },
    helperText: {
      description: 'Helper text displayed below the input for guidance',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled and non-interactive',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the input is read-only (display only, no editing)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    value: {
      description: 'The current value of the input field',
      table: {
        type: { summary: 'string | number' },
        category: 'Value',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the input container',
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
 * Default Input - Basic Usage
 * 
 * Shows a basic LumiereInput with standard styling and placeholder text.
 * This is the foundation for all other input variations.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default input provides a clean, accessible foundation for text input. It includes proper focus states, hover effects, and follows the Lumiere design system\'s visual language.',
      },
    },
  },
};

/**
 * With Label - Enhanced Accessibility
 * 
 * Demonstrates an input with a label above it for better user experience
 * and accessibility compliance.
 */
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Inputs with labels provide better accessibility and user experience. The label is properly associated with the input using htmlFor/id attributes, making it screen reader friendly.',
      },
    },
  },
};

/**
 * Required Field - Validation Indicator
 * 
 * Shows how required fields are indicated with a red asterisk (*) to
 * clearly communicate validation requirements to users.
 */
export const RequiredField: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Required fields are clearly marked with a red asterisk, helping users understand which fields must be completed. This is also communicated to screen readers via aria-required.',
      },
    },
  },
};

/**
 * With Helper Text - User Guidance
 * 
 * Demonstrates helper text below the input for additional guidance
 * and instruction without cluttering the interface.
 */
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be at least 3 characters long',
  },
  parameters: {
    docs: {
      description: {
        story: 'Helper text provides additional context and guidance to users without overwhelming the interface. It\'s styled with muted colors to maintain visual hierarchy.',
      },
    },
  },
};

/**
 * Error State - Validation Feedback
 * 
 * Shows how error states are displayed with red borders and error
 * messages for clear user feedback on validation issues.
 */
export const ErrorState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error states provide clear visual feedback with red borders and descriptive error messages. The error is announced to screen readers and includes proper ARIA attributes for accessibility.',
      },
    },
  },
};

/**
 * Disabled State - Non-Interactive
 * 
 * Demonstrates the disabled state styling for inputs that are
 * temporarily unavailable or not applicable.
 */
export const DisabledState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    disabled: true,
    value: 'user@example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled inputs show a clear visual indication that they\'re not interactive. They maintain their value but prevent user input, useful for read-only data or conditional form fields.',
      },
    },
  },
};

/**
 * Read Only State - Display Only
 * 
 * Shows the read-only state for displaying data without allowing
 * edits, useful for confirmation or review screens.
 */
export const ReadOnlyState: Story = {
  args: {
    label: 'Account ID',
    value: 'ACC-12345',
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Read-only inputs display data without allowing user modification. They\'re styled differently from disabled inputs to indicate they\'re informational rather than unavailable.',
      },
    },
  },
};

/**
 * Form Example - Complete Context
 * 
 * Demonstrates multiple inputs working together in a form context,
 * showing how the component integrates with real-world form layouts.
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
  parameters: {
    docs: {
      description: {
        story: 'This form example demonstrates how multiple LumiereInput components work together in a real form context. It shows proper spacing, validation states, and how different input types complement each other.',
      },
    },
  },
}; 