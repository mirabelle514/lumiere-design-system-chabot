import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereButton } from './LumiereButton';

const meta: Meta<typeof LumiereButton> = {
  title: 'Lumiere/LumiereButton',
  component: LumiereButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should take full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
  render: (args) => (
    <div className="space-y-4 w-80">
      <LumiereButton {...args} />
      <LumiereButton {...args} variant="secondary" />
      <LumiereButton {...args} variant="tertiary" />
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button Example',
    fullWidth: false,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-x-2">
          <LumiereButton variant="primary">Primary</LumiereButton>
          <LumiereButton variant="secondary">Secondary</LumiereButton>
          <LumiereButton variant="tertiary">Tertiary</LumiereButton>
          <LumiereButton variant="destructive">Destructive</LumiereButton>
        </div>
        <div className="space-x-2">
          <LumiereButton variant="primary" size="sm">Small</LumiereButton>
          <LumiereButton variant="primary" size="md">Medium</LumiereButton>
          <LumiereButton variant="primary" size="lg">Large</LumiereButton>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Full Width Examples:</h4>
        <div className="space-y-2 w-80">
          <LumiereButton variant="primary" fullWidth>Full Width Primary</LumiereButton>
          <LumiereButton variant="secondary" fullWidth>Full Width Secondary</LumiereButton>
          <LumiereButton variant="tertiary" fullWidth>Full Width Tertiary</LumiereButton>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereButton {...args} />
      </div>
    </div>
  ),
}; 