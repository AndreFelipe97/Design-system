import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@andre-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/AndreFelipe97.png',
    alt: 'André Felipe',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
