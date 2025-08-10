import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereAnimation } from './LumiereAnimation';

/**
 * LumiereAnimation Component Stories
 * 
 * The LumiereAnimation component showcases the animation system within the Lumiere Design System.
 * It provides interactive demonstrations of micro-interactions, loading states, and performance
 * guidelines for creating smooth, accessible animations.
 * 
 * ## Design Principles
 * - **Performance First**: Optimized animations that work smoothly on all devices
 * - **Accessibility**: Respects prefers-reduced-motion and provides user controls
 * - **Consistency**: All animations follow the same timing and easing principles
 * - **Guidance**: Built-in best practices and performance considerations
 * 
 * ## Animation Guidelines
 * - **Micro-interactions**: 100-200ms for button hovers and quick feedback
 * - **UI Transitions**: 200-300ms for component state changes
 * - **Page Transitions**: 300-500ms for navigation and layout changes
 * - **Complex Animations**: 500-800ms for multi-step animations
 * 
 * ## Performance Best Practices
 * - Use CSS transforms and opacity for smooth animations
 * - Avoid animating layout properties (width, height, position)
 * - Respect user preferences for reduced motion
 * - Test animations on low-end mobile devices
 */
const meta: Meta<typeof LumiereAnimation> = {
  title: 'Lumiere/LumiereAnimation',
  component: LumiereAnimation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The LumiereAnimation component demonstrates the animation system of the Lumiere Design System.
It provides interactive examples of different animation types, performance guidelines, and best practices
for creating smooth, accessible user experiences.

## Key Features
- **4 Animation Types**: Playground, Micro-interactions, Loading, and Guidelines
- **Interactive Controls**: Play/pause functionality for demonstration purposes
- **Performance Guidelines**: Built-in best practices for mobile optimization
- **Accessibility**: Respects prefers-reduced-motion and provides user controls
- **Design System Integration**: Uses Lumiere color tokens and spacing consistently

## Animation Types
- **Playground**: Interactive animation demonstrations with controls
- **Micro-interactions**: Button hovers, card interactions, and quick feedback
- **Loading**: Pulse animations, skeleton screens, and loading states
- **Guidelines**: Duration recommendations and easing function guidance

## When to Use
- **Development**: Testing and demonstrating animation concepts
- **Design Reviews**: Showcasing animation timing and behavior
- **Documentation**: Providing examples of animation best practices
- **Performance Testing**: Validating animations on different devices
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['micro-interaction', 'loading', 'playground', 'guidelines'],
      description: 'The type of animation to display and demonstrate',
      table: {
        type: { summary: 'AnimationType' },
        defaultValue: { summary: 'playground' },
        category: 'Animation',
      },
    },
    isPlaying: {
      control: { type: 'boolean' },
      description: 'Whether the animation is currently playing (controlled mode)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
        category: 'State',
      },
    },
    showControls: {
      control: { type: 'boolean' },
      description: 'Whether to show play/pause controls for the animation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Controls',
      },
    },
    showGuidelines: {
      control: { type: 'boolean' },
      description: 'Whether to display animation guidelines and best practices',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Documentation',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the animation container',
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
 * Animation Playground - Interactive Demo
 * 
 * The playground provides an interactive animation demonstration with controls
 * to play and pause the animation. This is the default animation type.
 */
export const Playground: Story = {
  args: {
    type: 'playground',
    showControls: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The playground story demonstrates the basic interactive animation with play/pause controls. This is ideal for testing animation behavior and understanding the component\'s core functionality.',
      },
    },
  },
};

/**
 * Micro-interactions - Quick Feedback
 * 
 * Micro-interactions demonstrate quick, subtle animations that provide
 * immediate feedback to user actions like button hovers and card interactions.
 */
export const MicroInteractions: Story = {
  args: {
    type: 'micro-interaction',
  },
  parameters: {
    docs: {
      description: {
        story: 'Micro-interactions showcase quick feedback animations that enhance user experience without being distracting. These animations should be fast (100-200ms) and provide clear visual feedback.',
      },
    },
  },
};

/**
 * Loading States - Progress Indicators
 * 
 * Loading states demonstrate various animation patterns for indicating
 * progress, loading, and skeleton screens.
 */
export const LoadingStates: Story = {
  args: {
    type: 'loading',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading states provide visual feedback during asynchronous operations. These animations should be subtle and not interfere with the user\'s ability to understand the interface.',
      },
    },
  },
};

/**
 * With Guidelines - Best Practices
 * 
 * This story shows the animation component with performance guidelines
 * and best practices displayed for reference.
 */
export const WithGuidelines: Story = {
  args: {
    type: 'playground',
    showControls: true,
    showGuidelines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The guidelines story is perfect for developers and designers who want to understand animation best practices, timing recommendations, and performance considerations while seeing them in action.',
      },
    },
  },
};

/**
 * Controlled Animation - External State
 * 
 * This story demonstrates how to control the animation state externally,
 * useful for integrating with parent component state management.
 */
export const ControlledAnimation: Story = {
  args: {
    type: 'playground',
    isPlaying: true,
    showControls: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled animations allow parent components to manage animation state. This is useful for coordinating animations across multiple components or integrating with complex state management.',
      },
    },
  },
};

/**
 * All Animation Types - Complete Overview
 * 
 * This comprehensive story displays all animation types in one view,
 * making it easy to compare and understand the different animation categories.
 */
export const AllAnimationTypes: Story = {
  args: {
    showControls: true,
    showGuidelines: true,
  },
  render: (args) => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-lg font-heading">Animation Playground</h3>
        <LumiereAnimation {...args} type="playground" />
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-heading">Micro-interactions</h3>
        <LumiereAnimation {...args} type="micro-interaction" />
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-heading">Loading States</h3>
        <LumiereAnimation {...args} type="loading" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive showcase displays all animation types in one view, making it easy to understand the complete animation system and how different types work together.',
      },
    },
  },
};

/**
 * Interactive Example - Enhanced Context
 * 
 * This story provides enhanced context and styling to show how the
 * animation component can be integrated into real application layouts.
 */
export const InteractiveExample: Story = {
  args: {
    type: 'playground',
    showControls: true,
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-6 rounded-lg border bg-card">
        <h3 className="mb-4 text-lg font-heading">Interactive Animation Playground</h3>
        <LumiereAnimation {...args} />
      </div>
      
      <div className="p-6 rounded-lg bg-muted">
        <h3 className="mb-4 text-lg font-heading">With Performance Guidelines</h3>
        <LumiereAnimation {...args} showGuidelines />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The interactive example demonstrates how the animation component can be styled and integrated into different layout contexts, showing practical usage patterns.',
      },
    },
  },
};

/**
 * Animation States - State Management
 * 
 * This story demonstrates different animation states and how they
 * can be controlled programmatically or through user interaction.
 */
export const AnimationStates: Story = {
  args: {
    type: 'playground',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-heading">Idle State</h3>
        <LumiereAnimation {...args} isPlaying={false} showControls={false} />
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-heading">Playing State</h3>
        <LumiereAnimation {...args} isPlaying={true} showControls={false} />
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-heading">With Controls</h3>
        <LumiereAnimation {...args} showControls={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Animation states demonstrate how the component can be controlled programmatically and how different states affect the visual presentation and user interaction.',
      },
    },
  },
}; 