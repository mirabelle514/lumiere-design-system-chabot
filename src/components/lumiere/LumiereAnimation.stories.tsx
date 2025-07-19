import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereAnimation } from './LumiereAnimation';

const meta: Meta<typeof LumiereAnimation> = {
  title: 'Lumiere/LumiereAnimation',
  component: LumiereAnimation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['micro-interaction', 'loading', 'playground', 'guidelines'],
      description: 'The type of animation to display',
    },
    isPlaying: {
      control: { type: 'boolean' },
      description: 'Whether the animation is currently playing',
    },
    showControls: {
      control: { type: 'boolean' },
      description: 'Whether to show controls',
    },
    showGuidelines: {
      control: { type: 'boolean' },
      description: 'Whether to show guidelines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'playground',
    showControls: true,
  },
};

export const MicroInteractions: Story = {
  args: {
    type: 'micro-interaction',
  },
};

export const LoadingStates: Story = {
  args: {
    type: 'loading',
  },
};

export const WithGuidelines: Story = {
  args: {
    type: 'playground',
    showControls: true,
    showGuidelines: true,
  },
};

export const ControlledAnimation: Story = {
  args: {
    type: 'playground',
    isPlaying: true,
    showControls: false,
  },
};

export const AllAnimationTypes: Story = {
  args: {
    showControls: true,
    showGuidelines: true,
  },
  render: (args) => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-heading mb-4">Animation Playground</h3>
        <LumiereAnimation {...args} type="playground" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Micro-interactions</h3>
        <LumiereAnimation {...args} type="micro-interaction" />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Loading States</h3>
        <LumiereAnimation {...args} type="loading" />
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  args: {
    type: 'playground',
    showControls: true,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-6 bg-card rounded-lg border">
        <h3 className="text-lg font-heading mb-4">Interactive Animation Playground</h3>
        <LumiereAnimation {...args} />
      </div>
      
      <div className="p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-heading mb-4">With Performance Guidelines</h3>
        <LumiereAnimation {...args} showGuidelines />
      </div>
    </div>
  ),
};

export const AnimationStates: Story = {
  args: {
    type: 'playground',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-heading mb-4">Idle State</h3>
        <LumiereAnimation {...args} isPlaying={false} showControls={false} />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Playing State</h3>
        <LumiereAnimation {...args} isPlaying={true} showControls={false} />
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">With Controls</h3>
        <LumiereAnimation {...args} showControls={true} />
      </div>
    </div>
  ),
}; 