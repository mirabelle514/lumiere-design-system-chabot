import React from 'react';
import { cn } from '@/lib/utils';

interface LumiereToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const LumiereToggle: React.FC<LumiereToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className
}) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {label && (
        <label className="font-heading text-sm text-[var(--lumiere-navy)]">
          {label}
        </label>
      )}
      <div className="relative inline-block w-15 h-8">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="opacity-0 w-0 h-0"
        />
        <span
          className={cn(
            `absolute cursor-pointer top-0 left-0 right-0 bottom-0
            bg-[var(--lumiere-grey)] rounded-full
            transition-colors duration-400
            before:absolute before:content-[''] before:h-6 before:w-6
            before:left-1 before:bottom-1 before:bg-white before:rounded-full
            before:transition-transform before:duration-400`,
            checked && 'bg-[var(--lumiere-sage)]',
            checked && 'before:translate-x-7',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          onClick={() => !disabled && onChange(!checked)}
        />
      </div>
    </div>
  );
};