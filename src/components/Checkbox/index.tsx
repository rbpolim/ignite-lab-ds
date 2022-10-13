import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps { }

export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className='h-6 w-6 p-[2px] bg-black rounded'
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}