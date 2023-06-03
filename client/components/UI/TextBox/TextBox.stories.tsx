import type { Meta, StoryObj } from '@storybook/react'

import TextBox from './TextBox'

const meta: Meta<typeof TextBox> = {
  title: 'Text Box',
  component: TextBox,
}

type Story = StoryObj<typeof TextBox>

export const MyPrimary: Story = {
  name: 'Input',
  render: () => (
    <TextBox defaultValue="sdfsdfsdf sd fsdf" placeholder="Enter here" />
  ),
}

export default meta
