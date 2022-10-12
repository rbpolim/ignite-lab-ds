import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextField, TextInputContainerProps } from './index'

export default {
  title: 'Components/TextField',
  component: TextField.Root,
  args: {
    children: [
      // Utilizado [] invés de <> (fragment) para evitar erro de type   
      <TextField.Icon>
        <Envelope />
      </TextField.Icon>,

      <TextField.Input placeholder="Placeholder" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  },
} as Meta<TextInputContainerProps>

export const Default: StoryObj<TextInputContainerProps> = {}

export const WithoutIcon: StoryObj<TextInputContainerProps> = {
  args: {
    children:
      <TextField.Input placeholder="Placeholder" />
  },
}
