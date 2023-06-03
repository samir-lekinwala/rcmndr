import type { Meta, StoryObj } from '@storybook/react'

import TextBox from './TextBox'
import Background from '../Background/Background'

const meta: Meta<typeof TextBox> = {
  title: 'Text Box',
  component: TextBox,
}

type Story = StoryObj<typeof TextBox>

export const MyPrimary: Story = {
  name: 'Input',
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
