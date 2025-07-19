import React from 'react';
import { cn } from './utils.js';
import { 
  LumiereButton, 
  LumiereInput, 
  LumiereTextarea,
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent,
  LumiereToggle,
  LumiereTabBar,
  LumiereTypography,
  LumiereColorPalette,
  type TabItem
} from './index';

export interface LumiereShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  showColorPalette?: boolean;
  showTypography?: boolean;
  showButtons?: boolean;
  showFormElements?: boolean;
  showCards?: boolean;
  showTabBar?: boolean;
  showContactForm?: boolean;
}

// Mock icons for tab bar
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

const tabItems: TabItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' }
];

export const LumiereShowcase: React.FC<LumiereShowcaseProps> = ({
  className,
  showColorPalette = true,
  showTypography = true,
  showButtons = true,
  showFormElements = true,
  showCards = true,
  showTabBar = true,
  showContactForm = true,
  ...props
}) => {
  return (
    <div className={cn("p-6 min-h-screen bg-ivory-white", className)} {...props}>
      {/* Header */}
      <div className="mx-auto mb-8 max-w-7xl">
        <LumiereTypography as="h1" variant="heading" className="mb-4 text-center">
          Lumière Design System
        </LumiereTypography>
        <LumiereTypography variant="body" className="text-center text-parisian-navy/70">
          A French-inspired design system for modern web applications
        </LumiereTypography>
      </div>

      {/* Color Palette */}
      {showColorPalette && (
        <div className="mx-auto mb-12 max-w-7xl">
          <LumiereTypography as="h2" variant="heading" className="mb-6">
            Color Palette
          </LumiereTypography>
          <LumiereColorPalette />
        </div>
      )}

      {/* Typography */}
      {showTypography && (
        <div className="mx-auto mb-12 max-w-7xl">
          <LumiereTypography as="h2" variant="heading" className="mb-6">
            Typography
          </LumiereTypography>
          <div className="space-y-4">
            <LumiereTypography as="h1" variant="heading">Heading 1 - Playfair Display Bold (32pt)</LumiereTypography>
            <LumiereTypography as="h2" variant="heading">Heading 2 - Playfair Display Bold (24pt)</LumiereTypography>
            <LumiereTypography as="h3" variant="heading">Heading 3 - Playfair Display Regular (18pt)</LumiereTypography>
            <LumiereTypography variant="body">Body text - Open Sans Regular (16pt). This is the default body text style used throughout the application.</LumiereTypography>
            <LumiereTypography variant="caption">Caption text - Open Sans Regular (12pt). Used for small, secondary information.</LumiereTypography>
            <LumiereTypography variant="accent">Accent text - Open Sans Italic (20pt). For elegant emphasis and subtle decorative elements.</LumiereTypography>
          </div>
        </div>
      )}

      {/* Buttons */}
      {showButtons && (
        <div className="mx-auto mb-12 max-w-7xl">
          <LumiereTypography as="h2" variant="heading" className="mb-6">
            Buttons
          </LumiereTypography>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <LumiereButton variant="primary">Primary</LumiereButton>
              <LumiereButton variant="secondary">Secondary</LumiereButton>
              <LumiereButton variant="tertiary">Tertiary</LumiereButton>
              <LumiereButton variant="destructive">Destructive</LumiereButton>
            </div>
            <div className="flex flex-wrap gap-4">
              <LumiereButton variant="primary" size="sm">Small</LumiereButton>
              <LumiereButton variant="primary" size="md">Medium</LumiereButton>
              <LumiereButton variant="primary" size="lg">Large</LumiereButton>
            </div>
          </div>
        </div>
      )}

      {/* Form Elements */}
      {showFormElements && (
        <div className="mx-auto mb-12 max-w-7xl">
          <LumiereTypography as="h2" variant="heading" className="mb-6">
            Form Elements
          </LumiereTypography>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <LumiereInput
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                helperText="We'll never share your email"
              />
              <LumiereInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                error="Password must be at least 8 characters"
              />
              <LumiereTextarea
                label="Message"
                placeholder="Enter your message"
                rows={4}
                helperText="Maximum 500 characters"
              />
              <div className="flex gap-3 items-center">
                <LumiereToggle
                  pressed={false}
                  aria-label="Subscribe to newsletter"
                  aria-describedby="newsletter-description"
                />
                <div>
                  <div className="font-medium">Subscribe to newsletter</div>
                  <p id="newsletter-description" className="text-sm text-muted-foreground">
                    Get updates about new features
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <LumiereInput
                label="Full Name"
                placeholder="Enter your full name"
                required
              />
              <LumiereInput
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />
              <LumiereInput
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
              />
              <div className="flex gap-3 items-center">
                <LumiereToggle
                  pressed={false}
                  aria-label="I agree to the terms"
                  aria-describedby="terms-description"
                />
                <div>
                  <div className="font-medium">I agree to the terms</div>
                  <p id="terms-description" className="text-sm text-muted-foreground">
                    Required to proceed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      {showCards && (
        <div className="mx-auto mb-12 max-w-7xl">
          <LumiereTypography as="h2" variant="heading" className="mb-6">
            Cards
          </LumiereTypography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <LumiereCard variant="standard">
              <LumiereCardContent>
                <LumiereTypography as="h3" variant="heading" className="mb-2">Standard Card</LumiereTypography>
                <LumiereTypography variant="body">
                  Simple and clean design for basic content presentation.
                </LumiereTypography>
              </LumiereCardContent>
            </LumiereCard>
            
            <LumiereCard variant="featured">
              <LumiereCardHeader>
                <LumiereCardTitle>Featured Card</LumiereCardTitle>
              </LumiereCardHeader>
              <LumiereCardContent>
                <LumiereTypography variant="body">
                  Enhanced styling with header and title for important content.
                </LumiereTypography>
              </LumiereCardContent>
            </LumiereCard>
            
            <LumiereCard variant="elevated">
              <LumiereCardHeader>
                <LumiereCardTitle>Elevated Card</LumiereCardTitle>
              </LumiereCardHeader>
              <LumiereCardContent>
                <LumiereTypography variant="body">
                  Premium styling with enhanced shadows for premium content.
                </LumiereTypography>
              </LumiereCardContent>
            </LumiereCard>
          </div>
        </div>
      )}

      {/* Tab Bar */}
      {showTabBar && (
        <div className="mx-auto mb-12 max-w-7xl">
          <LumiereTypography as="h2" variant="heading" className="mb-6">
            Tab Bar
          </LumiereTypography>
          <LumiereTabBar
            tabs={tabItems}
            activeTab="home"
            onTabChange={() => {}}
            className="max-w-md"
          />
        </div>
      )}

      {/* Contact Form */}
      {showContactForm && (
        <div className="mx-auto max-w-7xl">
          <LumiereCard variant="featured">
            <LumiereCardHeader>
              <LumiereCardTitle>Contact Us</LumiereCardTitle>
            </LumiereCardHeader>
            <LumiereCardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <LumiereInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  required
                />
                <LumiereInput
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <LumiereTextarea
                label="Message"
                placeholder="Enter your message"
                rows={4}
                required
              />
              <div className="flex gap-3">
                <LumiereButton variant="primary" className="flex-1">
                  Send Message
                </LumiereButton>
                <LumiereButton variant="tertiary">
                  Cancel
                </LumiereButton>
              </div>
            </LumiereCardContent>
          </LumiereCard>
        </div>
      )}
    </div>
  );
};

LumiereShowcase.displayName = 'LumiereShowcase'; 