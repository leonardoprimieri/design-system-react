import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi facilis amet excepturi saepe enim temporibus, mollitia dolorum sint repellat error quidem recusandae aperiam eum fuga ab natus numquam cum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    size: '2xl',
    children: 'Bold Text',
    as: 'strong',
  },
}
