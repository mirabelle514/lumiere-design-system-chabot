import React from 'react';
import { cn } from '@/lib/utils';

interface LumiereCardProps {
  children: React.ReactNode;
  variant?: 'standard' | 'featured';
  className?: string;
  hover?: boolean;
}

export const LumiereCard: React.FC<LumiereCardProps> = ({
  children,
  variant = 'standard',
  className,
  hover = true
}) => {
  const baseClasses = `
    rounded-2xl p-6
    border border-[var(--lumiere-gold)]
    shadow-[var(--shadow-card)]
    transition-transform duration-300 ease-in-out
  `;

  const variantClasses = {
    standard: 'bg-[var(--lumiere-ivory)]',
    featured: `
      bg-gradient-to-br from-[var(--lumiere-ivory)] to-[var(--lumiere-grey)]
      border-2 border-[var(--lumiere-gold)]
    `
  };

  const hoverClasses = hover ? 'hover:-translate-y-1' : '';

  return (
    <div className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}>
      {children}
    </div>
  );
};

interface LumiereCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const LumiereCardTitle: React.FC<LumiereCardTitleProps> = ({
  children,
  className
}) => {
  return (
    <h3 className={cn(
      'font-heading text-xl text-[var(--lumiere-navy)] mb-2',
      className
    )}>
      {children}
    </h3>
  );
};

interface LumiereCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const LumiereCardContent: React.FC<LumiereCardContentProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn(
      'text-[var(--lumiere-navy)] opacity-80',
      className
    )}>
      {children}
    </div>
  );
};