import React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface LumiereModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const LumiereModal: React.FC<LumiereModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={cn(
        `relative bg-[var(--lumiere-ivory)] rounded-2xl
        w-full max-w-md mx-4 overflow-hidden
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        border border-[var(--lumiere-gold)]`,
        className
      )}>
        {title && (
          <div className="bg-[var(--lumiere-burgundy)] text-white p-6 text-center relative">
            <h3 className="font-heading text-xl">{title}</h3>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2
                       text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};