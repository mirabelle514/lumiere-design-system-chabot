
import React from 'react';
import './App.css';
import { LumiereButton } from './components/lumiere/LumiereButton';
import { LumiereToggle } from './components/lumiere/LumiereToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lumiere Design System</h1>
        <p>French-inspired design system for elegant mobile applications</p>
      </header>
      
      {/* Test section for fullWidth prop */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Button fullWidth Test</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <h3 className="font-medium mb-2">Regular Button:</h3>
            <LumiereButton variant="primary">Regular Button</LumiereButton>
          </div>
          <div>
            <h3 className="font-medium mb-2">Full Width Button:</h3>
            <LumiereButton variant="primary" fullWidth>Full Width Button</LumiereButton>
          </div>
          <div>
            <h3 className="font-medium mb-2">Secondary Full Width:</h3>
            <LumiereButton variant="secondary" fullWidth>Secondary Full Width</LumiereButton>
          </div>
        </div>
      </section>
      
      {/* Toggle test section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Toggle Test</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <LumiereToggle variant="switch" pressed={false} aria-label="Test switch" />
            <span>Switch Toggle</span>
          </div>
          <div className="flex items-center gap-4">
            <LumiereToggle variant="checkbox" pressed={false} aria-label="Test checkbox" />
            <span>Checkbox Toggle</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;