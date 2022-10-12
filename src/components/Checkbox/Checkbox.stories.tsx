import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index'

import { Text } from '../Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembre-me em 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta

export const Default: StoryObj = {}
