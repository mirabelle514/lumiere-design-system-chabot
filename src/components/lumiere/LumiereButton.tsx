import React from 'react';
import { cn } from '@/lib/utils';

interface LumiereButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const LumiereButton: React.FC<LumiereButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-heading font-bold text-center
    border-none cursor-pointer
    transition-all duration-300 ease-in-out
    rounded-3xl
    disabled:cursor-not-allowed
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]'
  };

  const variantClasses = {
    primary: `
      bg-[var(--lumiere-navy)] text-white
      shadow-[var(--shadow-soft)]
      hover:bg-[#2a3a56] hover:-translate-y-0.5
      disabled:bg-[var(--lumiere-grey)] disabled:text-gray-500
    `,
    secondary: `
      bg-[var(--lumiere-ivory)] text-[var(--lumiere-navy)]
      border-2 border-[var(--lumiere-gold)]
      hover:bg-[var(--lumiere-navy)] hover:text-white
      disabled:bg-[var(--lumiere-grey)] disabled:text-gray-500 disabled:border-gray-300
    `,
    tertiary: `
      bg-transparent text-[var(--lumiere-navy)]
      underline border-none
      hover:text-[var(--lumiere-burgundy)]
      disabled:text-gray-500
    `
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};