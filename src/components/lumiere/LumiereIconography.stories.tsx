import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereIconography } from './LumiereIconography';

const meta: Meta<typeof LumiereIconography> = {
  title: 'Lumiere/LumiereIconography',
  component: LumiereIconography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: { type: 'select' },
      options: ['navigation', 'action', 'content', 'media'],
      description: 'The category of icons to display',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the icons',
    },
    showNames: {
      control: { type: 'boolean' },
      description: 'Whether to show icon names',
    },
    showGuidelines: {
      control: { type: 'boolean' },
      description: 'Whether to show guidelines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  args: {
    showNames: true,
    showGuidelines: true,
  },
};

export const NavigationIcons: Story = {
  args: {
    category: 'navigation',
    showNames: true,
  },
};

export const ActionIcons: Story = {
  args: {
    category: 'action',
    showNames: true,
  },
};

export const ContentIcons: Story = {
  args: {
    category: 'content',
    showNames: true,
  },
};

export const MediaIcons: Story = {
  args: {
    category: 'media',
    showNames: true,
  },
};

export const LargeIcons: Story = {
  args: {
    size: 'lg',
    showNames: true,
  },
};

export const SmallIcons: Story = {
  args: {
    size: 'sm',
    showNames: true,
  },
};

export const IconsOnly: Story = {
  args: {
    showNames: false,
  },
};

export const WithGuidelines: Story = {
  args: {
    showGuidelines: true,
  },
};

export const AllVariants: Story = {
  args: {
    category: 'navigation',
    size: 'md',
    showNames: true,
    showGuidelines: false,
  },
  render: (args) => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-heading mb-4">Navigation Icons</h3>
        <LumiereIconography {...args} category="navigation" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Action Icons</h3>
        <LumiereIconography {...args} category="action" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Content Icons</h3>
        <LumiereIconography {...args} category="content" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Media Icons</h3>
        <LumiereIconography {...args} category="media" />
      </div>
    </div>
  ),
};

export const SizeComparison: Story = {
  args: {
    showNames: true,
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-heading mb-4">Small Icons (16px)</h3>
        <LumiereIconography {...args} size="sm" category="navigation" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Medium Icons (20px)</h3>
        <LumiereIconography {...args} size="md" category="navigation" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Large Icons (24px)</h3>
        <LumiereIconography {...args} size="lg" category="navigation" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Extra Large Icons (32px)</h3>
        <LumiereIconography {...args} size="xl" category="navigation" />
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  args: {
    category: 'action',
    size: 'lg',
    showNames: true,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-6 bg-card rounded-lg border">
        <h3 className="text-lg font-heading mb-4">Interactive Icon Grid</h3>
        <LumiereIconography {...args} />
      </div>
      
      <div className="p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-heading mb-4">With Guidelines</h3>
        <LumiereIconography {...args} showGuidelines />
      </div>
    </div>
  ),
}; 