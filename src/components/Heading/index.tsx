import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type HeadingProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function Heading({ children, size = 'md', asChild }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {children}
    </Component>
  )
}