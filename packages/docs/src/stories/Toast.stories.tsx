import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@andre-ignite-ui/react'

export default {
  title: 'Information/Toast',
  component: Toast,
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
