import React, { forwardRef } from 'react';
import { cn } from './utils.js';

/**
 * Props for individual tab items in the LumiereTabBar
 */
export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Display text for the tab */
  label: string;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

/**
 * Props for the LumiereTabBar component
 */
export interface LumiereTabBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of tab items to display */
  tabs: TabItem[];
  /** ID of the currently active tab */
  activeTab: string;
  /** Callback when tab selection changes */
  onTabChange: (tabId: string) => void;
  /** Tab bar layout direction */
  orientation?: 'horizontal' | 'vertical';
  /** Visual style variant for the tab bar */
  variant?: 'default' | 'text-only';
}

/**
 * LumiereTabBar Component
 * 
 * A design system tab bar component that provides navigation between different
 * content sections. Features French-inspired styling with smooth transitions
 * and accessibility support.
 * 
 * Features:
 * - Horizontal and vertical orientation support
 * - Active tab highlighting with smooth transitions
 * - Disabled tab states
 * - Keyboard navigation support
 * - Consistent spacing and typography
 * - Accessibility with proper ARIA attributes
 * 
 * @example
 * ```tsx
 * const tabs = [
 *   { id: 'tab1', label: 'Overview' },
 *   { id: 'tab2', label: 'Details' },
 *   { id: 'tab3', label: 'Settings', disabled: true }
 * ];
 * 
 * <LumiereTabBar
 *   tabs={tabs}
 *   activeTab={activeTab}
 *   onTabChange={setActiveTab}
 *   orientation="horizontal"
 * />
 * ```
 */
export const LumiereTabBar = forwardRef<HTMLDivElement, LumiereTabBarProps>(
  ({ className, tabs, activeTab, onTabChange, orientation = 'horizontal', variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          // Base tab bar styling with flex layout
          'flex',
          
          // Orientation-specific styling
          orientation === 'horizontal' 
            ? 'flex-row space-x-1' 
            : 'flex-col space-y-1',
          
          className
        )}
        {...props}
      >
        {/* Render each tab item */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-disabled={tab.disabled}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onTabChange(tab.id)}
            className={cn(
              // Base tab button styling
              'px-4 py-2 text-sm font-medium transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              
              // Variant-specific styling
              variant === 'default' && [
                'rounded-lg',
                // Active tab styling with background and text color
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              ],
              
              variant === 'text-only' && [
                'border-b-2 border-transparent',
                // Active tab styling with underline only
                activeTab === tab.id
                  ? 'text-foreground border-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              ],
              
              // Disabled tab styling
              tab.disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-muted-foreground'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereTabBar.displayName = 'LumiereTabBar';