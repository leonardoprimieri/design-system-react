import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    size: '2xl',
    children: 'H1 Heading',
    as: 'h1',
  },
}
