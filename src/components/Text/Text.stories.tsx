import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from './index'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm"
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg"
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Custom component</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}