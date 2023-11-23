import { useAuth0 } from '@auth0/auth0-react'
import { AddSongDraft } from '../../../types/Song'
import AddSong from '../../components/AddSong/AddSong'
import useProfile from '../../hooks/useProfile'

function Songs() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { isLoading, mutation } = useProfile()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: AddSongDraft) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
  }

  return (
    <div>
      <h1>Add new song</h1>
      <h2>Fill in the details below to add a new song to your list</h2>
      <AddSong handleSubmit={handleSubmit} />
    </div>
  )
}

export default Songs
