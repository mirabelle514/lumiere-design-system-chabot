# Contributing to Lumière Design System

Thank you for your interest in contributing to Lumière! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository**

   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/lumiere-design-system.git
   cd lumiere-design-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

## Contribution Guidelines

### Code Style

- Use TypeScript for all new components
- Follow existing naming conventions
- Use Tailwind CSS classes with CSS variables
- Maintain mobile-first responsive design
- Ensure accessibility standards (WCAG 2.1 AA)

### Component Development

When creating new components:

1. **Create the component file** in `src/components/lumiere/`
2. **Follow the naming pattern**: `LumiereComponentName.tsx`
3. **Include proper TypeScript interfaces**
4. **Add accessibility attributes**
5. **Test on mobile devices**
6. **Document usage in the showcase**

### Example Component Structure

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface LumiereComponentProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export const LumiereComponent: React.FC<LumiereComponentProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'base-classes',
        variant === 'primary' && 'primary-classes',
        variant === 'secondary' && 'secondary-classes',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
```

### Design System Rules

#### Colors

- **Never use gold (#C6A664) for text** - borders and accents only
- Use navy (#22304A) for primary text
- Maintain proper contrast ratios
- Test with color blindness simulators

#### Typography

- Playfair Display for headings only
- Open Sans for body text
- Open Sans Italic for subtle emphasis
- Maintain proper line heights (150% body, 120% headings)

#### Spacing

- Follow 8px grid system
- Minimum 44px touch targets for primary actions
- 32px for secondary actions
- 8px minimum spacing between touch elements

#### Mobile-First

- Design for 320px width minimum
- Test on actual mobile devices
- Optimize for touch interactions
- Consider thumb reach zones

## Testing

### Manual Testing Checklist

- [ ] Component works on mobile (320px+)
- [ ] Component works on tablet (768px+)
- [ ] Component works on desktop (1024px+)
- [ ] Keyboard navigation works
- [ ] Screen reader accessible
- [ ] Color contrast meets WCAG AA
- [ ] Touch targets are 44px minimum
- [ ] Hover states work on desktop
- [ ] Focus states are visible

### Accessibility Testing

- Use axe-core browser extension
- Test with keyboard only
- Test with screen reader (NVDA/JAWS/VoiceOver)
- Verify color contrast ratios
- Check focus management

## Documentation

### Adding New Components

1. Create the component in `src/components/lumiere/`
2. Add usage example in `ComponentShowcase.tsx`
3. Update the README if needed
4. Add to the navigation if it's a major component

### Documentation Standards

- Include prop descriptions
- Provide usage examples
- Document accessibility features
- Show responsive behavior
- Include do's and don'ts

## Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Device/Browser**: Testing environment
- **Code example**: Minimal reproduction case

## Feature Requests

For new features:

- **Use case**: Why is this needed?
- **Proposed solution**: How should it work?
- **Alternatives**: Other solutions considered
- **Mobile considerations**: How does it work on mobile?
- **Accessibility**: Any a11y considerations

## Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly** on multiple devices
3. **Follow commit message format**:

   ```jsx
   type(scope): description
   
   feat(button): add loading state variant
   fix(modal): resolve focus trap issue
   docs(readme): update installation instructions
   ```

4. **Fill out PR template** completely
5. **Request review** from maintainers
6. **Address feedback** promptly

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Mobile testing completed
- [ ] Accessibility testing completed
- [ ] No breaking changes (or properly documented)

## Design Contributions

### Figma Files

- Follow existing design patterns
- Maintain color palette consistency
- Consider mobile-first approach
- Include accessibility annotations

### Design Review Process

1. Create design proposal
2. Share in GitHub Discussions
3. Gather feedback from community
4. Iterate based on feedback
5. Create implementation ticket

## Getting Help

- **GitHub Discussions**: For questions and ideas
- **GitHub Issues**: For bugs and feature requests
- **Code Review**: Tag maintainers for review

## Recognition

Contributors will be:

- Listed in the README
- Mentioned in release notes
- Invited to join the maintainer team (for significant contributions)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

