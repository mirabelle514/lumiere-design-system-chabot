import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTabBar } from './LumiereTabBar';

/**
 * LumiereTabBar Component Stories
 * 
 * The LumiereTabBar component provides a flexible navigation system for organizing
 * content into logical sections. It features French-inspired styling with smooth
 * transitions and comprehensive accessibility support.
 * 
 * ## Design Principles
 * - **Clear Navigation**: Visual hierarchy that clearly indicates active states
 * - **Smooth Transitions**: Elegant animations for state changes and interactions
 * - **Accessibility First**: Complete ARIA support and keyboard navigation
 * - **Flexible Layout**: Support for both horizontal and vertical orientations
 * - **Consistent Styling**: Uniform appearance across all variants and states
 * 
 * ## Tab Bar Variants
 * - **Default**: Rounded tabs with background highlighting for active state
 * - **Text-only**: Minimal tabs with underline indicators for active state
 * 
 * ## Accessibility Features
 * - Proper ARIA roles (`tablist`, `tab`, `aria-selected`)
 * - Keyboard navigation support (Arrow keys, Home, End)
 * - Focus management with visible focus rings
 * - Screen reader compatibility
 * - Disabled state support
 * 
 * ## Usage Guidelines
 * - Use **Default** variant for primary navigation and content organization
 * - Use **Text-only** variant for secondary navigation or minimal interfaces
 * - Always provide descriptive labels for each tab
 * - Implement proper `onTabChange` handlers for state management
 * - Consider orientation based on available space and content layout
 */
const meta: Meta<typeof LumiereTabBar> = {
  title: 'Lumiere/LumiereTabBar',
  component: LumiereTabBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LumiereTabBar component provides a flexible navigation system for organizing content
into logical sections. It features French-inspired styling with smooth transitions and
comprehensive accessibility support for modern web applications.

## Key Features
- **2 Visual Variants**: Default (rounded with background) and Text-only (underline)
- **Orientation Support**: Horizontal and vertical layout options
- **Accessibility**: Complete ARIA support with proper roles and states
- **Smooth Animations**: Elegant transitions for state changes and interactions
- **Design System Integration**: Uses Lumiere color tokens and spacing consistently
- **Type Safety**: Full TypeScript support with proper HTML attributes
- **Flexible Styling**: Supports custom styling while maintaining design consistency

## Tab Bar Variants
- **Default**: Rounded tabs with background highlighting for active state
- **Text-only**: Minimal tabs with underline indicators for active state

## Orientation Options
- **Horizontal**: Left-to-right tab arrangement (default)
- **Vertical**: Top-to-bottom tab arrangement for side navigation

## Accessibility Features
- Proper ARIA roles (\`tablist\`, \`tab\`, \`aria-selected\`)
- Keyboard navigation support (Arrow keys, Home, End)
- Focus management with visible focus rings
- Screen reader compatibility
- Disabled state support

## When to Use
- **Content Organization**: Dividing content into logical sections
- **Navigation**: Primary or secondary navigation systems
- **Settings Panels**: Organizing configuration options
- **Data Views**: Switching between different data representations
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab items to display with id, label, and optional disabled state',
      table: {
        type: { summary: 'TabItem[]' },
        category: 'Content',
      },
    },
    activeTab: {
      control: { type: 'select' },
      options: ['home', 'profile', 'settings', 'messages'],
      description: 'ID of the currently active tab that determines visual state',
      table: {
        type: { summary: 'string' },
        category: 'State',
      },
    },
    onTabChange: {
      description: 'Callback function called when tab selection changes',
      table: {
        type: { summary: '(tabId: string) => void' },
        category: 'Events',
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Tab bar layout direction (horizontal or vertical)',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
        category: 'Layout',
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'text-only'],
      description: 'Visual style variant that determines tab appearance',
      table: {
        type: { summary: 'default | text-only' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the tab bar container',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock icons for stories
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const defaultItems = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'profile', icon: UserIcon, label: 'Profile' },
  { id: 'settings', icon: SettingsIcon, label: 'Settings' },
  { id: 'messages', icon: MessageIcon, label: 'Messages' }
];

/**
 * Default Tab Bar - Basic Navigation
 * 
 * Shows a basic LumiereTabBar with default styling and horizontal
 * orientation. This is the foundation for all other tab bar variations.
 */
export const Default: Story = {
  args: {
    tabs: defaultItems,
    activeTab: 'home',
    onTabChange: (tabId) => console.log('Tab changed to:', tabId),
  },
  parameters: {
    docs: {
      description: {
        story: 'The default tab bar provides a clean, accessible foundation for navigation. It uses the default variant with rounded tabs and background highlighting for the active state.',
      },
    },
  },
};

/**
 * Active Profile Tab - State Management
 * 
 * Demonstrates how the tab bar responds to different active tab states,
 * showing the profile tab as currently selected.
 */
export const WithActiveProfile: Story = {
  args: {
    tabs: defaultItems,
    activeTab: 'profile',
    onTabChange: (tabId) => console.log('Tab changed to:', tabId),
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows how the tab bar responds to different active tab states. The profile tab is highlighted to indicate it\'s currently selected, demonstrating the component\'s state management capabilities.',
      },
    },
  },
};

/**
 * Active Settings Tab - Different Selection
 * 
 * Shows the settings tab as active, demonstrating how the tab bar
 * visually indicates different selected states.
 */
export const WithActiveSettings: Story = {
  args: {
    tabs: defaultItems,
    activeTab: 'settings',
    onTabChange: (tabId) => console.log('Tab changed to:', tabId),
  },
  parameters: {
    docs: {
      description: {
        story: 'The settings tab is now active, showing how the tab bar maintains visual consistency while highlighting different selections. This demonstrates the component\'s flexibility in managing multiple tab states.',
      },
    },
  },
};

/**
 * Text-Only Variant - Minimal Styling
 * 
 * Demonstrates the text-only variant with minimal styling and
 * underline indicators for active states.
 */
export const TextOnly: Story = {
  args: {
    tabs: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
      { id: 'settings', label: 'Settings' }
    ],
    activeTab: 'overview',
    variant: 'text-only',
    onTabChange: (tabId) => console.log('Tab changed to:', tabId),
  },
  parameters: {
    docs: {
      description: {
        story: 'The text-only variant provides a minimal, clean appearance with underline indicators for active states. This variant is ideal for secondary navigation or interfaces that require a more subtle design approach.',
      },
    },
  },
};

/**
 * Custom Styling - Extended Design
 * 
 * Custom styled tab bar demonstrates how to apply additional styling
 * while maintaining the design system\'s consistency and component structure.
 */
export const WithCustomStyling: Story = {
  args: {
    tabs: defaultItems,
    activeTab: 'home',
    className: 'bg-ivory-white border border-antique-gold',
    onTabChange: (tabId) => console.log('Tab changed to:', tabId),
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom styled tab bars show how to extend the component with additional CSS classes while maintaining design system consistency. This is useful for specific branding needs or contextual styling requirements.',
      },
    },
  },
}; 