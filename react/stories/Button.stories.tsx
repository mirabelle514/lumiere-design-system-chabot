import type { Meta, StoryObj } from '@storybook/react';
import { LumiereButton } from '../src/components/lumiere/LumiereButton';

const meta = {
  title: 'Lumière Design System/Button',
  component: LumiereButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Beautiful French-inspired button component matching the Lumière design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof LumiereButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Get Started',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="space-y-4 w-64">
      <LumiereButton variant="primary" fullWidth>
        Primary Button
      </LumiereButton>
      <LumiereButton variant="secondary" fullWidth>
        Secondary Button
      </LumiereButton>
      <LumiereButton variant="tertiary" fullWidth>
        Tertiary Button
      </LumiereButton>
    </div>
  ),
};
