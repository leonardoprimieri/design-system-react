import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'Custom title',
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
