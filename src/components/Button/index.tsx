import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={clsx(
        'text-black py-3 px-4 rounded text-sm w-full bg-cyan-500 font-semibold font-sans hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}