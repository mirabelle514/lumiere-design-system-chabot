import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTypography } from './LumiereTypography';

/**
 * LumiereTypography Component Stories
 * 
 * The LumiereTypography component provides a polymorphic typography system that
 * ensures consistent text styling across the Lumiere Design System. It uses
 * French-inspired fonts and maintains proper semantic HTML structure.
 * 
 * ## Design Principles
 * - **Semantic Hierarchy**: Proper heading levels (h1-h6) with consistent styling
 * - **Font Consistency**: Playfair Display for headings, Open Sans for body text
 * - **Type Safety**: Polymorphic component with full IntelliSense support
 * - **Accessibility**: Proper semantic markup and ARIA support
 * 
 * ## Typography Scale
 * - **H1**: 32pt Bold - Main page titles and hero sections
 * - **H2**: 24pt Bold - Section titles and major content divisions
 * - **H3**: 18pt Regular - Subsection titles and card headers
 * - **H4**: 16pt Bold - Card titles and form section headers
 * - **Body**: 16pt Regular - Default content text
 * - **Caption**: 12pt Regular - Secondary information and metadata
 * - **Accent**: 20pt Italic - Emphasis and decorative text
 * 
 * ## Usage Guidelines
 * - Use proper heading hierarchy (h1 → h2 → h3) for content structure
 * - Reserve h1 for main page titles only
 * - Use body text for regular content and descriptions
 * - Use caption text for helper text, metadata, and secondary information
 * - Use accent text sparingly for elegant emphasis
 */
const meta: Meta<typeof LumiereTypography> = {
  title: 'Lumiere/LumiereTypography',
  component: LumiereTypography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereTypography component provides a polymorphic typography system that ensures consistent
text styling across the Lumiere Design System. It uses French-inspired fonts and maintains
proper semantic HTML structure for accessibility and SEO.

## Key Features
- **Polymorphic Design**: Renders as any HTML element (h1-h6, p, span) with proper typing
- **Type Safety**: Full IntelliSense support for HTML attributes based on element type
- **Semantic HTML**: Proper heading hierarchy with consistent styling
- **Font System**: Playfair Display for headings, Open Sans for body text
- **Design System Integration**: Uses Lumiere color tokens and spacing consistently
- **Accessibility**: Proper semantic markup and ARIA support

## Typography Variants
- **Heading**: Uses Playfair Display font family for elegant headings
- **Body**: Uses Open Sans font family for readable content text
- **Caption**: Small text for secondary information and metadata
- **Accent**: Italic emphasis text for decorative purposes

## Element Types
- **H1-H6**: Semantic headings with predefined sizes and weights
- **P**: Paragraph elements for body content
- **Span**: Inline text elements for flexible styling

## When to Use
- **Headings**: Page titles, section headers, and content hierarchy
- **Body Text**: Regular content, descriptions, and general text
- **Captions**: Helper text, metadata, and supplementary information
- **Accent Text**: Elegant emphasis and decorative text elements
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'HTML element to render, determines semantic meaning and default styling',
      table: {
        type: { summary: 'TypographyElement' },
        defaultValue: { summary: 'p' },
        category: 'Semantics',
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['heading', 'body', 'caption', 'accent'],
      description: 'Typography style variant that determines font family and emphasis',
      table: {
        type: { summary: 'TypographyVariant' },
        defaultValue: { summary: 'body' },
        category: 'Appearance',
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'base', 'large'],
      description: 'Text size variant (only applies to non-heading elements)',
      table: {
        type: { summary: 'TypographySize' },
        defaultValue: { summary: 'base' },
        category: 'Appearance',
      },
    },
    children: {
      description: 'Text content to display with the specified typography styling',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the typography element',
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
 * Heading 1 - Main Page Title
 * 
 * H1 elements are used for main page titles and hero sections.
 * They have the largest size (32pt) and bold weight for maximum impact.
 */
export const Heading1: Story = {
  args: {
    as: 'h1',
    variant: 'heading',
    children: 'Heading 1 - Playfair Display Bold (32pt)',
  },
  parameters: {
    docs: {
      description: {
        story: 'H1 headings are the largest typography element and should be used sparingly for main page titles only. They use Playfair Display Bold at 32pt for maximum visual impact and elegant French-inspired styling.',
      },
    },
  },
};

/**
 * Heading 2 - Section Title
 * 
 * H2 elements are used for major section titles and content divisions.
 * They provide clear hierarchy while maintaining readability.
 */
export const Heading2: Story = {
  args: {
    as: 'h2',
    variant: 'heading',
    children: 'Heading 2 - Playfair Display Bold (24pt)',
  },
  parameters: {
    docs: {
      description: {
        story: 'H2 headings create clear content divisions and should be used for major sections within a page. They maintain the elegant Playfair Display font while providing appropriate hierarchy.',
      },
    },
  },
};

/**
 * Heading 3 - Subsection Title
 * 
 * H3 elements are used for subsection titles and card headers.
 * They use regular weight for a softer, more approachable appearance.
 */
export const Heading3: Story = {
  args: {
    as: 'h3',
    variant: 'heading',
    children: 'Heading 3 - Playfair Display Regular (18pt)',
  },
  parameters: {
    docs: {
      description: {
        story: 'H3 headings provide subsection organization and are ideal for card titles and content groupings. They use regular weight for a softer, more approachable appearance.',
      },
    },
  },
};

/**
 * Body Text - Default Content
 * 
 * Body text is the default typography variant used for regular content,
 * descriptions, and general text throughout the application.
 */
export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - Open Sans. This is the default body text style used throughout the application for regular content.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Body text uses Open Sans font family for optimal readability and is the foundation for all content text. It provides good legibility while maintaining the elegant design aesthetic.',
      },
    },
  },
};

/**
 * Caption Text - Secondary Information
 * 
 * Caption text is used for small, secondary information like helper text,
 * metadata, and supplementary details.
 */
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - Open Sans. Used for small, secondary information.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Caption text provides secondary information without competing with main content. It\'s ideal for form helper text, metadata, and supplementary details that support the primary content.',
      },
    },
  },
};

/**
 * All Variants - Complete System
 * 
 * This story showcases all typography variants in one view, making it easy
 * to compare different styles and understand the complete typography system.
 */
export const AllVariants: Story = {
  args: {
    variant: 'body',
    children: 'This typography element responds to controls',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-6 w-full max-w-2xl">
        <LumiereTypography as="h1" variant="heading">
          Heading 1 - Main Page Title (32pt Bold)
        </LumiereTypography>
        <LumiereTypography as="h2" variant="heading">
          Heading 2 - Section Title (24pt Bold)
        </LumiereTypography>
        <LumiereTypography as="h3" variant="heading">
          Heading 3 - Subsection Title (18pt Regular)
        </LumiereTypography>
        <LumiereTypography as="h4" variant="heading">
          Heading 4 - Card Title (16pt Bold)
        </LumiereTypography>
        <LumiereTypography variant="accent">
          Accent Text - Italic Style (20pt)
        </LumiereTypography>
        <LumiereTypography variant="body">
          Body text - Open Sans. This is the default body text style used throughout the application for regular content, descriptions, and general text. It provides good readability and maintains the elegant French-inspired design aesthetic.
        </LumiereTypography>
        <LumiereTypography variant="caption">
          Caption text - Open Sans. Used for small, secondary information like form helper text, metadata, and supplementary details.
        </LumiereTypography>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereTypography {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive showcase displays all typography variants in one view, making it easy to understand the complete typography system and how different variants work together to create content hierarchy.',
      },
    },
  },
};

/**
 * Custom Styling - Extended Design
 * 
 * Custom styled typography demonstrates how to apply additional styling
 * while maintaining the design system\'s consistency and component structure.
 */
export const WithCustomStyling: Story = {
  args: {
    variant: 'body',
    children: 'This typography element responds to controls',
    className: 'text-antique-gold',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-4">
        <LumiereTypography as="h1" variant="heading" className="text-antique-gold">
          Golden Heading
        </LumiereTypography>
        <LumiereTypography variant="body" className="text-sage-green">
          Green body text for emphasis
        </LumiereTypography>
        <LumiereTypography variant="caption" className="text-burgundy">
          Red caption for warnings
        </LumiereTypography>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereTypography {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom styled typography shows how to extend the component with additional CSS classes while maintaining design system consistency. This is useful for specific branding needs, emphasis, or contextual styling.',
      },
    },
  },
}; 