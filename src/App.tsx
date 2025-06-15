import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { ColorPaletteSection } from './components/sections/ColorPaletteSection';
import { TypographySection } from './components/sections/TypographySection';
import { IconographySection } from './components/sections/IconographySection';
import { SpacingSection } from './components/sections/SpacingSection';
import { ComponentShowcase } from './components/sections/ComponentShowcase';
import { MobilePatterns } from './components/sections/MobilePatterns';
import { MobileExample } from './components/sections/MobileExample';
import { ResponsiveSection } from './components/sections/ResponsiveSection';
import { AnimationSection } from './components/sections/AnimationSection';
import { AccessibilitySection } from './components/sections/AccessibilitySection';
import { UsageGuidelines } from './components/sections/UsageGuidelines';
import { FloatingNav } from './components/navigation/FloatingNav';
import './styles/lumiere.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--lumiere-ivory)]">
      <HeroSection />
      <div id="color-palette">
        <ColorPaletteSection />
      </div>
      <div id="typography">
        <TypographySection />
      </div>
      <div id="iconography">
        <IconographySection />
      </div>
      <div id="spacing">
        <SpacingSection />
      </div>
      <ComponentShowcase />
      <div id="mobile-patterns">
        <MobilePatterns />
      </div>
      <div id="mobile-example">
        <MobileExample />
      </div>
      <div id="responsive">
        <ResponsiveSection />
      </div>
      <div id="animation">
        <AnimationSection />
      </div>
      <div id="accessibility">
        <AccessibilitySection />
      </div>
      <UsageGuidelines />
      <FloatingNav />
    </div>
  );
}

export default App;