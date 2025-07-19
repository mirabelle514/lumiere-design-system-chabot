import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTypography } from './LumiereTypography';

const meta: Meta<typeof LumiereTypography> = {
  title: 'Lumiere/LumiereTypography',
  component: LumiereTypography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'HTML element to render',
    },
    variant: {
      control: { type: 'select' },
      options: ['heading', 'body', 'caption', 'accent'],
      description: 'Typography style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'base', 'large'],
      description: 'Text size variant (only applies to non-heading elements)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    as: 'h1',
    variant: 'heading',
    children: 'Heading 1 - Playfair Display Bold (32pt)',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    variant: 'heading',
    children: 'Heading 2 - Playfair Display Bold (24pt)',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    variant: 'heading',
    children: 'Heading 3 - Playfair Display Regular (18pt)',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - Open Sans. This is the default body text style used throughout the application for regular content.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - Open Sans. Used for small, secondary information.',
  },
};

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
};

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
}; 