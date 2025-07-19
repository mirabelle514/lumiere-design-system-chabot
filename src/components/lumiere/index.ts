/**
 * Lumiere Design System - Component Library
 * 
 * A comprehensive React component library featuring French-inspired design
 * with elegant styling, accessibility support, and consistent theming.
 * 
 * This module exports all Lumiere design system components for easy importing
 * and usage in React applications.
 */

// Core utility function for combining CSS classes
export { cn } from './utils.js';

// Color system components
export { LumiereColorSwatch, type LumiereColorSwatchProps } from './LumiereColorSwatch';
export { LumiereColorPalette } from './LumiereColorPalette';

// Form and input components
export { LumiereButton, type LumiereButtonProps } from './LumiereButton';
export { LumiereInput, type LumiereInputProps } from './LumiereInput';
export { LumiereTextarea, type LumiereTextareaProps } from './LumiereTextarea';
export { LumiereToggle, type LumiereToggleProps } from './LumiereToggle';

// Layout and container components
export { 
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent,
  type LumiereCardProps 
} from './LumiereCard';
export { LumiereModal, type LumiereModalProps } from './LumiereModal';

// Navigation components
export { LumiereTabBar, type LumiereTabBarProps, type TabItem } from './LumiereTabBar';

// Typography components
export { LumiereTypography, type LumiereTypographyProps } from './LumiereTypography';

// Design system showcase components
export { LumiereIconography, type LumiereIconographyProps } from './LumiereIconography';
export { LumiereAnimation, type LumiereAnimationProps } from './LumiereAnimation';
export { LumiereSpacing, type LumiereSpacingProps } from './LumiereSpacing';
export { LumiereMobilePatterns, type LumiereMobilePatternsProps } from './LumiereMobilePatterns';

// Device and showcase components
export { LumiereMobile, LumiereMobileContent } from './LumiereMobile';

// Design system color constants
export const LUMIERE_COLORS = {
  ivoryWhite: '#FAF8F3',
  parisianNavy: '#22304A',
  antiqueGold: '#C6A664',
  burgundy: '#7C3048',
  sageGreen: '#A6B89A',
  doveGrey: '#E5E2DD',
} as const;

/**
 * Usage Examples:
 * 
 * // Import individual components
 * import { LumiereButton, LumiereCard } from './components/lumiere';
 * 
 * // Import with types
 * import { LumiereButton, type LumiereButtonProps } from './components/lumiere';
 * 
 * // Use color constants
 * import { LUMIERE_COLORS } from './components/lumiere';
 * 
 * // Use utility function
 * import { cn } from './components/lumiere';
 */