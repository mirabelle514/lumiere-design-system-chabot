
import React from 'react';
import './App.css';
import { HeroSection } from './components/sections/HeroSection';
import { ColorPaletteSection } from './components/sections/ColorPaletteSection';
import { TypographySection } from './components/sections/TypographySection';
import { SpacingSection } from './components/sections/SpacingSection';
import { IconographySection } from './components/sections/IconographySection';
import { ComponentShowcase } from './components/sections/ComponentShowcase';
import { MobileExample } from './components/sections/MobileExample';
import { MobilePatterns } from './components/sections/MobilePatterns';
import { ResponsiveSection } from './components/sections/ResponsiveSection';
import { AnimationSection } from './components/sections/AnimationSection';
import { AccessibilitySection } from './components/sections/AccessibilitySection';
import { UsageGuidelines } from './components/sections/UsageGuidelines';
import LumiereChatbot from './components/LumiereChatbot';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ColorPaletteSection />
      <TypographySection />
      <SpacingSection />
      <IconographySection />
      <ComponentShowcase />
      <MobileExample />
      <MobilePatterns />
      <ResponsiveSection />
      <AnimationSection />
      <AccessibilitySection />
      <UsageGuidelines />
      <LumiereChatbot />
    </div>
  );
}

export default App;