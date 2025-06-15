import React from 'react';
import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  icon: React.ReactNode;
  label?: string;
}

interface LumiereTabBarProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const LumiereTabBar: React.FC<LumiereTabBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className
}) => {
  return (
    <div className={cn(
      `bg-[var(--lumiere-navy)] rounded-xl p-2
      flex justify-around items-center`,
      className
    )}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={cn(
            `text-[var(--lumiere-grey)] p-2 rounded-lg
            font-heading text-sm transition-all duration-300
            flex items-center justify-center relative
            hover:bg-white/10`,
            activeTab === item.id && `
              text-white bg-white/10
              after:absolute after:bottom-[-2px] after:left-1/2 
              after:transform after:-translate-x-1/2
              after:w-5 after:h-0.5 after:bg-white after:rounded-sm
            `
          )}
        >
          <span className="w-5 h-5">
            {item.icon}
          </span>
          {item.label && (
            <span className="ml-2">{item.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};