import { ArrowRight } from 'phosphor-react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@andre-ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step <ArrowRight weight="bold" />
      </>
    ),
  },
}
