import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereCard, LumiereCardHeader, LumiereCardTitle, LumiereCardContent } from './LumiereCard';

const meta: Meta<typeof LumiereCard> = {
  title: 'Lumiere/LumiereCard',
  component: LumiereCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'featured', 'elevated'],
    },
    elevated: {
      control: { type: 'boolean' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    variant: 'standard',
    children: (
      <>
        <LumiereCardTitle>Standard Card</LumiereCardTitle>
        <LumiereCardContent>
          <p>This is a standard card with clean, minimal styling. Perfect for basic content presentation.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const Featured: Story = {
  args: {
    variant: 'featured',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Featured Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This featured card has enhanced styling with a gradient background and golden border accents.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Elevated Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This elevated card has premium styling with enhanced shadows and depth for important content.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: 'featured',
    interactive: true,
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Interactive Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This card has interactive hover effects. Try hovering over it to see the animation.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const WithCustomStyling: Story = {
  args: {
    variant: 'elevated',
    className: 'w-96',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Custom Styled Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This card has custom styling applied while maintaining the design system's consistency.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const AllVariants: Story = {
  args: {
    variant: 'standard',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Controls Example</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This card responds to the variant control above.</p>
        </LumiereCardContent>
      </>
    ),
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl md:grid-cols-3">
        <LumiereCard variant="standard">
          <LumiereCardHeader>
            <LumiereCardTitle>Standard</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent>
            <p>Clean, minimal design for basic content presentation.</p>
          </LumiereCardContent>
        </LumiereCard>
        
        <LumiereCard variant="featured">
          <LumiereCardHeader>
            <LumiereCardTitle>Featured</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent>
            <p>Enhanced styling with gradient background and golden accents.</p>
          </LumiereCardContent>
        </LumiereCard>
        
        <LumiereCard variant="elevated">
          <LumiereCardHeader>
            <LumiereCardTitle>Elevated</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent>
            <p>Premium styling with enhanced shadows for important content.</p>
          </LumiereCardContent>
        </LumiereCard>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereCard {...args} />
      </div>
    </div>
  ),
};

export const ComplexContent: Story = {
  args: {
    variant: 'featured',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Complex Content Card</LumiereCardTitle>
          <p className="text-sm text-muted-foreground">With additional metadata</p>
        </LumiereCardHeader>
        <LumiereCardContent>
          <div className="space-y-4">
            <p>This card demonstrates how to structure complex content with multiple sections.</p>
            <div className="flex justify-between items-center text-sm">
              <span>Status: Active</span>
              <span className="text-green-600">✓ Verified</span>
            </div>
            <div className="pt-4 border-t">
              <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary/90">
                Action Button
              </button>
            </div>
          </div>
        </LumiereCardContent>
      </>
    ),
  },
};

export const FormCard: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Contact Form</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input 
                type="text" 
                className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 w-full text-white rounded-lg bg-primary hover:bg-primary/90"
            >
              Submit
            </button>
          </form>
        </LumiereCardContent>
      </>
    ),
  },
}; 