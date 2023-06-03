import type { Meta, StoryObj } from '@storybook/react'

import TextBox from './TextBox'
import Background from '../Background/Background'

const meta: Meta<typeof TextBox> = {
  title: 'TextBox',
  component: TextBox,
}

type Story = StoryObj<typeof TextBox>

export const populated: Story = {
  name: 'Populated text box',
  render: () => (
    <Background>
      <TextBox
        defaultValue="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        placeholder="Enter here"
      />
    </Background>
  ),
}

export const emptyTextBox: Story = {
  name: 'Empty text box',
  render: () => (
    <Background>
      <TextBox placeholder="Enter here" />
    </Background>
  ),
}

export const multipleTextBoxes: Story = {
  name: 'Multiple text boxes',
  render: () => (
    <Background>
      <div className="space-y-2">
        <TextBox placeholder="The full title of the song" />
        <TextBox placeholder="Name of the artist / singer / group" />
        <TextBox placeholder="Genre of music (optional)" />
        <TextBox placeholder="A link so others can listen (optional)" />
      </div>
    </Background>
  ),
}

export default meta
