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
    const scope = nock('http://localhost').get('/api/v1/songs/').reply(200, {
      title: 'song title',
      artist: 'song artist',
      genre: 'song genre',
      link: 'song url link',
      comments: 'comment about the song',
    })

    console.log(scope)

    const container = renderWithQuery(<Songs />)
    await waitFor(() => expect(scope.isDone()).toBeTruthy())

    const title = container.getByRole('textbox', { name: /songtitle/i })
    const artist = container.getByRole('textbox', { name: /artist/i })
    const genre = container.getByRole('textbox', { name: /genre/i })
    const link = container.getByRole('textbox', { name: /link/i })
    const comments = container.getByRole('textbox', { name: /comments/i })

    expect(title).toHaveValue('song title')
    expect(artist).toHaveValue('song artist')
    expect(genre).toHaveValue('song genre')
    expect(link).toHaveValue('song url link')
    expect(comments).toHaveValue('comment about the song')
  })
})
