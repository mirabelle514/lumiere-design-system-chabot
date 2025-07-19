import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereMobilePatterns } from './LumiereMobilePatterns';

const meta: Meta<typeof LumiereMobilePatterns> = {
  title: 'Lumiere/LumiereMobilePatterns',
  component: LumiereMobilePatterns,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['search', 'list', 'card-grid', 'action-sheet', 'bottom-navigation'],
      description: 'The type of mobile pattern to display',
    },
    showAll: {
      control: { type: 'boolean' },
      description: 'Whether to show all patterns',
    },
    showGuidelines: {
      control: { type: 'boolean' },
      description: 'Whether to show guidelines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPatterns: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
};

export const SearchPattern: Story = {
  args: {
    type: 'search',
    showAll: false,
  },
};

export const ListPattern: Story = {
  args: {
    type: 'list',
    showAll: false,
  },
};

export const CardGridPattern: Story = {
  args: {
    type: 'card-grid',
    showAll: false,
  },
};

export const ActionSheetPattern: Story = {
  args: {
    type: 'action-sheet',
    showAll: false,
  },
};

export const BottomNavigationPattern: Story = {
  args: {
    type: 'bottom-navigation',
    showAll: false,
  },
};

export const WithGuidelines: Story = {
  args: {
    showAll: true,
    showGuidelines: true,
  },
};

export const AllPatternTypes: Story = {
  args: {
    showAll: false,
  },
  render: (args) => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-heading mb-4">Search & Filter Pattern</h3>
        <LumiereMobilePatterns {...args} type="search" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">List Items Pattern</h3>
        <LumiereMobilePatterns {...args} type="list" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Card Grid Pattern</h3>
        <LumiereMobilePatterns {...args} type="card-grid" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Action Sheet Pattern</h3>
        <LumiereMobilePatterns {...args} type="action-sheet" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Bottom Navigation Pattern</h3>
        <LumiereMobilePatterns {...args} type="bottom-navigation" />
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
        <h3 className="text-lg font-heading mb-4">Complete Mobile Patterns</h3>
        <LumiereMobilePatterns {...args} />
      </div>
      
      <div className="p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-heading mb-4">Mobile Pattern Guidelines</h3>
        <LumiereMobilePatterns showAll={false} showGuidelines={true} />
      </div>
    </div>
  ),
};

export const PatternComparison: Story = {
  args: {
    showAll: false,
  },
  render: (args) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-heading mb-4">Search Pattern</h3>
        <LumiereMobilePatterns {...args} type="search" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">List Pattern</h3>
        <LumiereMobilePatterns {...args} type="list" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Card Grid Pattern</h3>
        <LumiereMobilePatterns {...args} type="card-grid" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Action Sheet Pattern</h3>
        <LumiereMobilePatterns {...args} type="action-sheet" />
      </div>
    </div>
  ),
}; 