import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@andre-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um h2, mas pode ser alterado isso com a propriedade as',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
