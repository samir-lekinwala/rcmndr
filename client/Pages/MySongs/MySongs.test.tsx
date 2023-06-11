// @vitest-environment jsdom
import { describe, it, vi } from 'vitest'
import { screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import MySongs from './MySongs'
import { renderComponent } from '../../test-utils'
import { getSongs } from '../../apis/songs'
import { getUser } from '../../apis/user'
import * as auth0 from '@auth0/auth0-react'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

vi.mock('../../apis/user')
vi.mock('../../apis/songs')
vi.mock('@auth0/auth0-react')

describe('MySongs', () => {
  it('component should display a list of songs asynchronously', async () => {
    vi.mocked(getSongs).mockResolvedValue([
      {
        id: '1',
        title: 'Song 1',
        artist: 'Artist 1',
        genre: 'Genre 1',
        link: 'Link 1',
      },
    ])
    vi.mocked(getUser).mockResolvedValue({
      nickname: 'testuser',
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ; (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
        getAccessTokenSilently: vi.fn().mockResolvedValue('dummy token'),
        user: {
          sub: 'dummy auth0 id',
        },
      })

    const queryClient = new QueryClient()
    renderComponent(
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createMemoryRouter(
            createRoutesFromElements(<Route path="/" element={<MySongs />} />)
          )}
        />
      </QueryClientProvider>
    )

    await screen.findByText('Song 1')
    await screen.findByText('Artist 1')
  })
})
