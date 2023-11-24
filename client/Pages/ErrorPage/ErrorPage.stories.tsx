import type { Meta, StoryObj } from '@storybook/react'

import Button from '../../components/UI/Button/Button'
import Background from '../../components/UI/Background/Background'
import ErrorPage from './ErrorPage'

const meta: Meta<typeof ErrorPage> = {
  title: 'ERROR PAGE <!>',
  component: ErrorPage,
}

type Story = StoryObj<typeof ErrorPage>

export const MyPrimary: Story = {
  name: 'Primary',
  render: () => (
    <Background>
      <ErrorPage />
      <Button>BACK TO HOME </Button>,
    </Background>
  ),
}

export default meta
