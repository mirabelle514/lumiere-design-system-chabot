import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereMobile } from './LumiereMobile';

const meta: Meta<typeof LumiereMobile> = {
  title: 'Lumiere/LumiereMobile',
  component: LumiereMobile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['iphone', 'android'],
    },
    showStatusBar: {
      control: { type: 'boolean' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    ariaDescription: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-heading">Standard Mobile Layout</h3>
        <p className="text-body text-muted-foreground">
          This is a standard mobile container with basic styling.
        </p>
      </div>
    ),
  },
};

export const WithAccessibility: Story = {
  args: {
    variant: 'iphone',
    title: 'My App',
    ariaLabel: 'iPhone device frame showing My App interface',
    ariaDescription: 'A realistic iPhone frame containing the My App interface with status bar and navigation',
    interactive: true,
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-heading">Accessible Mobile Layout</h3>
        <p className="text-body text-muted-foreground">
          This mobile container includes full accessibility support with ARIA labels, 
          screen reader announcements, and keyboard navigation.
        </p>
        <div className="mt-4 space-y-2">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Accessible Button
          </button>
          <p className="text-sm text-gray-600">
            Try tabbing through this interface to test keyboard navigation.
          </p>
        </div>
      </div>
    ),
  },
};

export const AndroidVariant: Story = {
  args: {
    variant: 'android',
    title: 'Android App',
    ariaLabel: 'Android device frame showing Android App interface',
    ariaDescription: 'A realistic Android frame containing the Android App interface with status bar and navigation',
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-heading">Android Mobile Layout</h3>
        <p className="text-body text-muted-foreground">
          This Android-style mobile container has distinct styling and accessibility features.
        </p>
      </div>
    ),
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: 'bg-ivory-white border-2 border-antique-gold',
    ariaLabel: 'Custom styled mobile device frame',
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-heading text-parisian-navy">Custom Styled</h3>
        <p className="text-body text-parisian-navy/70">
          This mobile container has custom styling applied while maintaining accessibility.
        </p>
      </div>
    ),
  },
};

export const ComplexContent: Story = {
  args: {
    variant: 'iphone',
    title: 'Lumière Design System',
    ariaLabel: 'iPhone device frame showing Lumière Design System app',
    ariaDescription: 'A realistic iPhone frame containing the Lumière Design System interface with component showcase',
    children: (
      <div className="p-6 space-y-4">
        <div className="flex space-x-3">
          <div>
            <h3 className="text-lg font-heading">Lumière Design</h3>
            <p className="text-sm text-muted-foreground">French-inspired design system</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Components</span>
            <span className="text-sm text-muted-foreground">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Stories</span>
            <span className="text-sm text-muted-foreground">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Documentation</span>
            <span className="text-sm text-muted-foreground">Complete</span>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <button className="px-4 py-2 w-full font-medium rounded-lg transition-colors bg-foreground text-background hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground">
            View Components
          </button>
        </div>
      </div>
    ),
  },
};

export const WithoutStatusBar: Story = {
  args: {
    variant: 'android',
    showStatusBar: false,
    ariaLabel: 'Android device frame without status bar',
    ariaDescription: 'A realistic Android frame without status bar for cleaner presentation',
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-heading">Clean Layout</h3>
        <p className="text-body text-muted-foreground">
          This mobile container has no status bar for a cleaner presentation.
        </p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  args: {
    variant: 'iphone',
    ariaLabel: 'Example mobile device frame',
    ariaDescription: 'A mobile device frame that responds to controls',
    children: (
      <div className="p-4">
        <h4 className="mb-2 font-heading">Controls Example</h4>
        <p className="text-sm text-muted-foreground">This mobile frame responds to the variant control above</p>
      </div>
    ),
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-6 w-full max-w-md">
        <LumiereMobile 
          variant="iphone"
          ariaLabel="iPhone device frame example"
          ariaDescription="A realistic iPhone frame showing basic content"
        >
          <div className="p-4">
            <h4 className="mb-2 font-heading">iPhone</h4>
            <p className="text-sm text-muted-foreground">iPhone-style mobile container with accessibility features</p>
          </div>
        </LumiereMobile>
        
        <LumiereMobile 
          variant="android"
          ariaLabel="Android device frame example"
          ariaDescription="A realistic Android frame showing basic content"
        >
          <div className="p-4">
            <h4 className="mb-2 font-heading">Android</h4>
            <p className="text-sm text-muted-foreground">Android-style mobile container with accessibility features</p>
          </div>
        </LumiereMobile>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="mb-2 font-medium">Controls Example:</h4>
        <LumiereMobile {...args} />
      </div>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-heading">Accessibility Features Demo</h2>
        <p className="text-muted-foreground">
          This demo showcases the accessibility features of the LumiereMobile component.
          Use a screen reader or keyboard navigation to explore the features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <LumiereMobile 
          variant="iphone"
          title="Accessible App"
          interactive={true}
          ariaLabel="Interactive iPhone device frame for accessibility testing"
          ariaDescription="A realistic iPhone frame that can be navigated with keyboard and screen readers"
        >
          <div className="p-4 space-y-4">
            <h3 className="font-heading">Keyboard Navigation</h3>
            <p className="text-sm text-muted-foreground">
              Tab through this interface to test keyboard navigation.
            </p>
            <div className="space-y-2">
              <button className="px-3 py-2 w-full text-sm text-white bg-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                First Button
              </button>
              <button className="px-3 py-2 w-full text-sm text-white bg-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                Second Button
              </button>
              <button className="px-3 py-2 w-full text-sm text-white bg-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
                Third Button
              </button>
            </div>
          </div>
        </LumiereMobile>
        
        <LumiereMobile 
          variant="android"
          title="Screen Reader Demo"
          ariaLabel="Android device frame for screen reader testing"
          ariaDescription="A realistic Android frame with comprehensive ARIA labels and descriptions"
        >
          <div className="p-4 space-y-4">
            <h3 className="font-heading">Screen Reader Support</h3>
            <p className="text-sm text-muted-foreground">
              This interface includes comprehensive ARIA labels and descriptions for screen readers.
            </p>
            <div className="space-y-2">
              <div role="status" aria-live="polite" className="text-sm text-green-600">
                Status: Ready for screen reader testing
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Features:</strong>
                <ul className="mt-1 ml-4 list-disc">
                  <li>ARIA labels for all elements</li>
                  <li>Status announcements</li>
                  <li>Proper heading structure</li>
                  <li>Semantic HTML elements</li>
                </ul>
              </div>
            </div>
          </div>
        </LumiereMobile>
      </div>
    </div>
  ),
};