import { InputHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export type TextInputContainerProps = {
  children: React.ReactNode;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

type TextInputIconProps = {
  children: React.ReactNode;
}


function TextInputContainer({ children }: TextInputContainerProps) {
  return (
    <div className="flex font-sans h-12 items-center gap-3 py-4 px-3 rounded bg-black w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

TextInputContainer.displayName = 'TextInput.Container'

function TextInput({ ...props }: TextInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

TextInput.displayName = 'TextInput.Input'

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export const TextField = {
  Root: TextInputContainer,
  Input: TextInput,
  Icon: TextInputIcon
}