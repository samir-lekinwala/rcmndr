// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import ConfirmScan from './ConfirmScan'
import { renderComponent } from '../../test-utils'

describe('ConfirmScan', () => {
  it('name of the user should be rendered', async () => {
    renderComponent(<ConfirmScan name="jared" handleFollow={() => { }} />)
    const user = screen.getByText('jared')
    expect(user).toBeInTheDocument()
  })

  it('event handler should be called when Follow button is clicked', async () => {
    const handleFollow = vi.fn()
    const { user } = renderComponent(
      <ConfirmScan name="jared" handleFollow={handleFollow} />
    )

    const followButton = screen.getByText('Follow')
    await user.click(followButton)

    expect(handleFollow).toHaveBeenCalled()
  })
})
