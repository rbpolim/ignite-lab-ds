import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type TextProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  className?: string;
}

export function Text({ children, size = 'md', asChild, className }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}