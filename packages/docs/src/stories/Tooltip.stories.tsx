import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@andre-ignite-ui/react'

export default {
  title: 'Information/Tooltip',
  component: Tooltip,
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    description: '26 de Outubro - Disponível',
  },
}
