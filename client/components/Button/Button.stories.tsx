import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Primary Button',
  component: Button,
}

type Story = StoryObj<typeof Button>

export const MyPrimary: Story = {
  name: 'Primary',
  render: () => <Button>Primary</Button>,
}

export default meta
