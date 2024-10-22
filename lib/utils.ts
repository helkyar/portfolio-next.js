import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { DEFAULT_LANGUAGE } from './language'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
/**
 * The cn function calls clsx(inputs) and twMerge together. 
 * -clsx: conditionally join class names together, 
 * will return a single string of class names.
 * -twMerge: merge Tailwind CSS class names intelligently, 
 * resolving conflicts and optimizing final string of classNames
 
  const MyComponent = ({ isActive }: { isActive: boolean }) => {
    return (
      <div className={cn('base-class', { 'active-class': isActive, 'inactive-class': !isActive })}>
        Hello, World!
      </div>
    );
  };
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString(DEFAULT_LANGUAGE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
