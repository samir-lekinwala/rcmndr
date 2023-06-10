// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import ConfirmScan from './ConfirmScan'
import { renderComponent } from '../../test-utils'

describe('ConfirmScan', () => {
  it('name of the user should be rendered', async () => {
    renderComponent(<ConfirmScan name="jared" handleFollow={() => { }} />)
    const user = screen.getByText('jared')
    expect(user).toBeInTheDocument()
  })

  it('should render the follow button', async () => {
    renderComponent(
      <ConfirmScan name="not used here" handleFollow={() => { }} />
    )

    const button = screen.getByRole('button', { name: 'Follow' })
    expect(button).toBeInTheDocument()
  })
})
