import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereSpacing } from './LumiereSpacing';

const meta: Meta<typeof LumiereSpacing> = {
  title: 'Lumiere/LumiereSpacing',
  component: LumiereSpacing,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'The spacing size to display',
    },
    showAll: {
      control: { type: 'boolean' },
      description: 'Whether to show all spacing sizes',
    },
    showGuidelines: {
      control: { type: 'boolean' },
      description: 'Whether to show guidelines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
};

export const SingleSpacing: Story = {
  args: {
    size: 'md',
    showAll: false,
  },
};

export const SmallSpacing: Story = {
  args: {
    size: 'sm',
    showAll: false,
  },
};

export const LargeSpacing: Story = {
  args: {
    size: 'xl',
    showAll: false,
  },
};

export const WithGuidelines: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
};

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
};

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
};

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
}; 