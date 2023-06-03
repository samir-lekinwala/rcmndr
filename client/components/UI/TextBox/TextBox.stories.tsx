import type { Meta, StoryObj } from '@storybook/react'

import TextBox from './TextBox'
import Background from '../Background/Background'

const meta: Meta<typeof TextBox> = {
  title: 'TextBox',
  component: TextBox,
}

type Story = StoryObj<typeof TextBox>

export const MyPrimary: Story = {
  name: 'Single',
  render: () => (
    <Background>
      <TextBox
        defaultValue="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        placeholder="Enter here"
      />
    </Background>
  ),
}

export default meta
