import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function for combining CSS classes with Tailwind CSS
 * 
 * This function merges multiple class names and resolves Tailwind CSS conflicts.
 * It uses clsx for conditional class logic and tailwind-merge for deduplication.
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns string - Merged and deduplicated class string
 * 
 * @example
 * cn('text-red-500', 'text-blue-500') // Returns 'text-blue-500' (last wins)
 * cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4' (merges properly)
 * cn('text-red-500', { 'text-blue-500': isActive }) // Conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 