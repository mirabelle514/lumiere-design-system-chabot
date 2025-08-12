import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronUp, ChevronDown, Palette, Type, Smartphone, Code, Accessibility, Zap, BookOpen, Users, Settings } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const LumiereChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour! I'm your Lumiere Design System guide. I can help designers, developers, and product owners navigate our system quickly. What would you like to explore?",
      isUser: false,
      timestamp: new Date(),
      suggestions: ['Design Tokens', 'Components', 'Guidelines', 'Developer Setup', 'Quick Start']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    // Design Tokens & Foundations
    if (input.includes('color') || input.includes('palette') || input.includes('tokens')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Design Tokens & Colors\n\nOur color system includes:\n• Primary: Lumiere Blue (#1E40AF)\n• Secondary: Château Gold (#F59E0B)\n• Neutral: Ivory, Silver, Navy\n• Semantic: Success, Warning, Error\n\nQuick Access: Check the Color Palette section for live examples and hex codes.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Typography', 'Spacing', 'Components']
      };
    }
    
    if (input.includes('typography') || input.includes('font') || input.includes('text')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Typography System\n\nHeadings: Playfair Display (elegant serif)\n• H1: 48px/1.2 • H2: 36px/1.3 • H3: 24px/1.4\n\nBody: Open Sans (clean sans-serif)\n• Body: 16px/1.6 • Small: 14px/1.5\n\nUsage: Maintain hierarchy, ensure contrast ratios meet WCAG AA standards.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Spacing', 'Components', 'Accessibility']
      };
    }
    
    if (input.includes('spacing') || input.includes('layout') || input.includes('grid')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Spacing & Layout System\n\nBase Unit: 8px grid system\n• XS: 4px • S: 8px • M: 16px\n• L: 24px • XL: 32px • XXL: 48px\n\nLayout Patterns:\n• Container max-width: 1280px\n• Section padding: 64px (mobile: 32px)\n• Component spacing: 16px-24px\n\nQuick Tip: Use our spacing tokens for consistent layouts.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Mobile Patterns', 'Responsive']
      };
    }
    
    // Components
    if (input.includes('component') || input.includes('button') || input.includes('input') || input.includes('card')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Component Library\n\nCore Components:\n• Buttons (Primary, Secondary, Ghost)\n• Inputs (Text, Select, Checkbox)\n• Cards (Default, Interactive, Elevated)\n• Navigation (Tabs, Breadcrumbs, Menu)\n\nUsage: All components are mobile-first with accessibility built-in. Check the Component Showcase section for live examples and code snippets.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Mobile Patterns', 'Accessibility', 'Developer Setup']
      };
    }
    
    // Mobile & Responsive
    if (input.includes('mobile') || input.includes('responsive') || input.includes('touch')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Mobile-First Design\n\nBreakpoints:\n• Mobile: 320px+\n• Tablet: 768px+\n• Desktop: 1024px+\n• Large: 1280px+\n\nTouch Targets: Minimum 44px\nGestures: Swipe, pinch, tap optimized\nPerformance: Optimized for mobile devices\n\nQuick Access: Mobile Patterns section shows real examples.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Animation', 'Accessibility']
      };
    }
    
    // Developer Resources
    if (input.includes('developer') || input.includes('code') || input.includes('setup') || input.includes('install')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Developer Resources\n\nInstallation:\nnpm install @lumiere/design-system\n\nQuick Start:\nimport { Button, Card } from '@lumiere/design-system';\n\nDocumentation: Check our Storybook for component examples, props, and usage patterns.\n\nNeed help? Ask about specific components or implementation details.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Storybook', 'Guidelines']
      };
    }
    
    // Accessibility
    if (input.includes('accessibility') || input.includes('a11y') || input.includes('wcag')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Accessibility Standards\n\nWCAG 2.1 AA Compliance:\n• Color contrast: 4.5:1 minimum\n• Keyboard navigation: Full support\n• Screen readers: ARIA labels\n• Focus management: Visible indicators\n\nTesting: Use our accessibility addon in Storybook\nGuidelines: Check Accessibility section for detailed requirements.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Testing', 'Guidelines']
      };
    }
    
    // Animation
    if (input.includes('animation') || input.includes('transition') || input.includes('motion')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Animation & Motion\n\nPrinciples:\n• Purposeful and subtle\n• Performance optimized\n• Respects user preferences\n\nTiming:\n• Fast: 150ms • Normal: 300ms • Slow: 500ms\n\nEasing: Custom cubic-bezier curves\nExamples: Hover states, loading, micro-interactions\n\nQuick Access: Animation section showcases all motion patterns.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Mobile Patterns', 'Guidelines']
      };
    }
    
    // Product Owner Insights
    if (input.includes('product') || input.includes('business') || input.includes('decision') || input.includes('guidelines')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Product & Business Guidelines\n\nDesign Principles:\n• Elegance meets functionality\n• Mobile-first approach\n• Accessibility for all users\n• Consistent brand experience\n\nImplementation Benefits:\n• Faster development cycles\n• Consistent user experience\n• Reduced design debt\n• Better accessibility compliance\n\nQuick Access: Usage Guidelines section has business case studies.",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Accessibility', 'Mobile Patterns']
      };
    }
    
    // Navigation Help
    if (input.includes('navigate') || input.includes('find') || input.includes('where') || input.includes('section')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Quick Navigation Guide\n\nMain Sections:\n• Color Palette - Design tokens & colors\n• Typography - Font system & hierarchy\n• Spacing - Layout & grid system\n• Components - Interactive examples\n• Mobile - Patterns & responsive design\n• Accessibility - Standards & testing\n• Animation - Motion & transitions\n• Guidelines - Usage & best practices\n\nPro Tip: Use the floating navigation for quick access!",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Components', 'Quick Start', 'Developer Setup']
      };
    }
    
    // Help & General
    if (input.includes('help') || input.includes('guide') || input.includes('what') || input.includes('how')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "How I Can Help You\n\nFor Designers: Colors, typography, spacing, components, mobile patterns\nFor Developers: Installation, code examples, component API, Storybook\nFor Product Owners: Business guidelines, implementation benefits, accessibility\n\nQuick Actions:\n• Ask about specific topics\n• Get code examples\n• Navigate to sections\n• Learn best practices\n\nWhat role are you in, and what would you like to explore?",
        isUser: false,
        timestamp: new Date(),
        suggestions: ['Design Tokens', 'Components', 'Developer Setup', 'Guidelines']
      };
    }
    
    // Default response
    return {
      id: (Date.now() + 1).toString(),
      text: "I'd be happy to help you explore the Lumiere Design System! I can guide you through:\n\nDesign: Colors, typography, spacing, components\nDevelopment: Setup, code examples, API docs\nMobile: Patterns, responsive design, touch interactions\nAccessibility: Standards, testing, compliance\nAnimation: Motion, transitions, micro-interactions\nGuidelines: Best practices, business insights\n\nWhat would you like to learn about?",
      isUser: false,
      timestamp: new Date(),
      suggestions: ['Design Tokens', 'Components', 'Developer Setup', 'Quick Start']
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = (e?: React.MouseEvent) => {
    // Prevent any event bubbling issues
    e?.preventDefault();
    e?.stopPropagation();
    
    setIsOpen(prev => !prev);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  if (isMinimized) {
    return (
      <div className="fixed right-6 bottom-6 z-[9999]">
        <button
          onClick={toggleMinimize}
          className="p-3 rounded-full transition-all duration-300 bg-lumiere-navy hover:bg-lumiere-burgundy text-lumiere-ivory shadow-gold hover:scale-110"
          aria-label="Expand chatbot"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed right-6 bottom-6 z-[9999]">
      {isOpen ? (
        <div className="w-80 max-w-sm rounded-2xl border transition-all duration-300 bg-lumiere-ivory shadow-card border-lumiere-grey">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r rounded-t-2xl from-lumiere-navy to-lumiere-burgundy text-lumiere-ivory">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Lumiere Guide</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="p-1 rounded-full transition-colors hover:bg-lumiere-ivory/20"
                aria-label="Minimize chatbot"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => toggleChat(e)}
                className="p-1 rounded-full transition-colors hover:bg-lumiere-ivory/20"
                style={{ pointerEvents: 'auto' }}
                aria-label="Close chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto p-4 space-y-3 h-80">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-lumiere-navy text-lumiere-ivory rounded-br-md'
                        : 'bg-lumiere-grey text-lumiere-navy rounded-bl-md'
                    }`}
                  >
                    <div className="text-sm text-left whitespace-pre-line">{message.text}</div>
                    <div className="mt-1 text-xs text-left opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
                
                {/* Suggestions */}
                {!message.isUser && message.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-0">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-2 py-1 text-xs rounded-full border transition-colors bg-lumiere-gold/10 hover:bg-lumiere-gold/20 text-lumiere-navy border-lumiere-gold/20"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-lumiere-grey">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about design tokens, components, or guidelines..."
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-lumiere-grey focus:outline-none focus:ring-2 focus:ring-lumiere-gold focus:border-transparent bg-lumiere-ivory text-lumiere-navy placeholder-lumiere-navy/60"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 rounded-lg transition-colors bg-lumiere-navy hover:bg-lumiere-burgundy disabled:opacity-50 disabled:cursor-not-allowed text-lumiere-ivory"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={(e) => toggleChat(e)}
          className="p-4 rounded-full transition-all duration-300 bg-lumiere-navy hover:bg-lumiere-burgundy text-lumiere-ivory shadow-gold hover:scale-110"
          style={{ pointerEvents: 'auto' }}
          aria-label="Open chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default LumiereChatbot;
