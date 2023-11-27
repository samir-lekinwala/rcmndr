import { describe, it, expect, vi } from 'vitest'
import { waitFor } from '@testing-library/react'
import nock from 'nock'

import { renderWithQuery } from '../../test-utils'
import Songs from './Songs'

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: {
      sub: 'auth0|123',
      email: '',
    },
    isAuthenticated: true,
    getAccessTokenSilently: vi.fn(() => 'token'),
  }),
}))

describe('Songs', () => {
  it('should render song form', async () => {
    const scope = nock('http://localhost').get('/api/v1/songs').reply(200)

    const container = renderWithQuery(<Songs />)
    await waitFor(() => expect(scope.isDone()).toBeTruthy())

    const title = container.getByLabelText(/song title/i)
    const artist = container.getByLabelText(/artist/i)
    const genre = container.getByLabelText(/genre/i)
    const link = container.getByLabelText(/link/i)
    const comments = container.getByLabelText(/comment/i)

    expect(title).toBeInTheDocument()
    expect(artist).toBeInTheDocument()
    expect(genre).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(comments).toBeInTheDocument()
  })
})
