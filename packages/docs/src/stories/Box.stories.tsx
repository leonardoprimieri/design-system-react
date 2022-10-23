import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    children: (
      <>
        <Text>Box Element</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
