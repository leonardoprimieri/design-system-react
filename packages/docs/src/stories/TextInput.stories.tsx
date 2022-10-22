import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type your name',
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com',
  },
}

export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    label: 'Name',
  },
}
