import React from 'react';
import { cn } from '@/lib/utils';

interface LumiereInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const LumiereInput: React.FC<LumiereInputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block font-heading text-sm text-[var(--lumiere-navy)] mb-1">
          {label}
        </label>
      )}
      <input
        className={cn(
          `w-full px-4 py-3 
          border border-[var(--lumiere-gold)] rounded-lg
          bg-[var(--lumiere-ivory)]
          font-body text-base text-[var(--lumiere-navy)]
          transition-colors duration-300
          focus:outline-none focus:border-[var(--lumiere-navy)]
          focus:shadow-[0_0_0_2px_rgba(34,48,74,0.1)]
          placeholder:text-[var(--lumiere-navy)] placeholder:opacity-50`,
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

interface LumiereTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const LumiereTextarea: React.FC<LumiereTextareaProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block font-heading text-sm text-[var(--lumiere-navy)] mb-1">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          `w-full px-4 py-3 
          border border-[var(--lumiere-gold)] rounded-lg
          bg-[var(--lumiere-ivory)]
          font-body text-base text-[var(--lumiere-navy)]
          transition-colors duration-300
          focus:outline-none focus:border-[var(--lumiere-navy)]
          focus:shadow-[0_0_0_2px_rgba(34,48,74,0.1)]
          placeholder:text-[var(--lumiere-navy)] placeholder:opacity-50
          resize-vertical`,
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};