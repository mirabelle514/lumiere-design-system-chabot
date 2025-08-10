import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTextarea } from './LumiereTextarea';

/**
 * LumiereTextarea Component Stories
 * 
 * The LumiereTextarea component provides a comprehensive multi-line text input
 * system with consistent styling, accessibility features, and error handling.
 * It follows the Lumiere design system's principles for form elements.
 * 
 * ## Design Principles
 * - **Accessibility First**: Complete ARIA support and screen reader compatibility
 * - **Consistent Styling**: Uniform appearance across all textarea states
 * - **Error Handling**: Clear visual feedback for validation errors
 * - **User Guidance**: Helper text and required field indicators
 * - **Flexible Sizing**: Resizable with proper minimum height constraints
 * 
 * ## Usage Guidelines
 * - Always provide labels for better accessibility and user experience
 * - Use helper text to guide users on input requirements and constraints
 * - Implement proper error handling with descriptive error messages
 * - Set appropriate `rows` for expected content length
 * - Use `required` prop for mandatory fields
 * 
 * ## Accessibility Features
 * - Proper label association with `htmlFor` and `id` attributes
 * - ARIA attributes for error states and required fields
 * - Screen reader announcements for errors and helper text
 * - Focus management with visible focus rings
 * - Auto-generated unique IDs to prevent conflicts
 */
const meta: Meta<typeof LumiereTextarea> = {
  title: 'Lumiere/LumiereTextarea',
  component: LumiereTextarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereTextarea component provides a comprehensive multi-line text input system with
consistent styling, accessibility features, and error handling. It follows the Lumiere
design system's principles for form elements and provides a solid foundation for building
accessible multi-line text inputs.

## Key Features
- **Multi-line Input**: Supports longer text content with proper line breaks
- **Accessibility**: Complete ARIA support and screen reader compatibility
- **Error Handling**: Visual error states with proper messaging and ARIA attributes
- **Form Integration**: Works seamlessly with form libraries and validation systems
- **Design System Integration**: Uses Lumiere color tokens, typography, and spacing
- **Auto-generated IDs**: Unique IDs for accessibility (no ID conflicts)
- **Resizable**: Vertical resize with proper minimum height constraints

## Textarea States
- **Default**: Clean, accessible textarea with proper focus states
- **With Helper Text**: Additional guidance for users on input requirements
- **Error State**: Clear visual feedback for validation errors
- **Disabled**: Non-interactive state for read-only content
- **Required**: Visual indication of mandatory fields

## When to Use
- **Long Text Input**: Messages, descriptions, comments, and detailed content
- **Form Fields**: Multi-line form inputs that require extended text
- **Content Creation**: Article writing, note-taking, and documentation
- **User Feedback**: Contact forms, reviews, and feedback systems
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text label displayed above the textarea for accessibility',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when the textarea is empty',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the textarea for guidance',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    error: {
      control: { type: 'text' },
      description: 'Error message displayed below the textarea with error styling',
      table: {
        type: { summary: 'string' },
        category: 'Validation',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled and non-interactive',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
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
    rows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of visible text lines (affects initial height)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
        category: 'Appearance',
      },
    },
    value: {
      description: 'The current value of the textarea field',
      table: {
        type: { summary: 'string' },
        category: 'Value',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the textarea container',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    onChange: {
      description: 'Change handler for textarea value updates',
      table: {
        type: { summary: 'ChangeEventHandler' },
        category: 'Events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Textarea - Basic Usage
 * 
 * Shows a basic LumiereTextarea with standard styling and placeholder text.
 * This is the foundation for all other textarea variations.
 */
export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default textarea provides a clean, accessible foundation for multi-line text input. It includes proper focus states, hover effects, and follows the Lumiere design system\'s visual language.',
      },
    },
  },
};

/**
 * With Helper Text - User Guidance
 * 
 * Demonstrates helper text below the textarea for additional guidance
 * and instruction without cluttering the interface.
 */
export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Maximum 500 characters',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Helper text provides additional context and guidance to users without overwhelming the interface. It\'s styled with muted colors to maintain visual hierarchy and is ideal for character limits, formatting instructions, or helpful hints.',
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
export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    error: 'Description is required',
    rows: 3,
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
 * Demonstrates the disabled state styling for textareas that are
 * temporarily unavailable or display read-only content.
 */
export const Disabled: Story = {
  args: {
    label: 'Read-only Content',
    value: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled textareas show a clear visual indication that they\'re not interactive. They maintain their content but prevent user input, useful for displaying read-only information or conditional form fields.',
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
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required...',
    required: true,
    rows: 3,
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
 * Large Textarea - Extended Content
 * 
 * Demonstrates a larger textarea suitable for longer content like
 * articles, detailed descriptions, or extensive user input.
 */
export const LargeTextarea: Story = {
  args: {
    label: 'Long Content',
    placeholder: 'Enter a longer piece of content...',
    rows: 8,
    helperText: 'Perfect for longer content like articles or detailed descriptions',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large textareas are ideal for extended content input. They provide ample space for users to write longer pieces while maintaining the same accessibility and styling features.',
      },
    },
  },
};

/**
 * All States - Complete System
 * 
 * This story showcases all textarea states in one view, making it easy
 * to compare different states and understand the complete textarea system.
 */
export const AllStates: Story = {
  args: {
    label: 'Example Textarea',
    placeholder: 'This textarea responds to controls',
    rows: 3,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-6 w-full max-w-2xl">
        <LumiereTextarea
          label="Default State"
          placeholder="Default textarea"
          rows={3}
        />
        
        <LumiereTextarea
          label="With Helper Text"
          placeholder="Textarea with helper text"
          helperText="This is helpful information"
          rows={3}
        />
        
        <LumiereTextarea
          label="With Error"
          placeholder="Textarea with error"
          error="This field has an error"
          rows={3}
        />
        
        <LumiereTextarea
          label="Disabled"
          value="This textarea is disabled"
          disabled
          rows={3}
        />
        
        <LumiereTextarea
          label="Required Field"
          placeholder="This field is required"
          required
          rows={3}
        />
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereTextarea {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive showcase displays all textarea states in one view, making it easy to understand the complete textarea system and how different states work together to provide comprehensive user feedback.',
      },
    },
  },
}; 