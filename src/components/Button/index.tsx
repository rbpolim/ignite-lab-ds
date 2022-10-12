import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={clsx(
        'text-black py-4 px-3 rounded text-sm w-full bg-cyan-500 font-semibold font-sans hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
      )}
    >
      {children}
    </Component>
  )
}