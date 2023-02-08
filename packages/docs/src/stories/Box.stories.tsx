import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@andre-ignite-ui/react'

export default {
  title: 'Surfaces/box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing the box element</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
