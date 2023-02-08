import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@andre-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium doloremque quod fugit impedit odio soluta, quidem laboriosam tenetur.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
