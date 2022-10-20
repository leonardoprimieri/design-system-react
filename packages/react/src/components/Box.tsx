import { ComponentProps } from 'react'
import { styled } from '../styles'
import { ComponentTypeExtension } from '../types/ComponentTypeExtension'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box> & ComponentTypeExtension
