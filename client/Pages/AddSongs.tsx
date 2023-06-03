import { useMutation, useQueryClient } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { addSong } from '../apis/songs'
import { SongDraft } from '../../types/Song'
import Button from '../components/UI/Button/Button'
import TextBox from '../components/UI/TextBox/TextBox'

function AddSongs() {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: ({ song, token }: { song: SongDraft; token: string }) =>
      addSong(song, token),
    onSuccess: () => {
      queryClient.invalidateQueries('getSongs')
    },
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const title = formData.get('name') as string
    const artist = formData.get('artist') as string
    const link = formData.get('link') as string
    const genre = formData.get('generes') as string

    const song: SongDraft = {
      title,
      artist,
      link,
      genre,
    }

    const token = await getAccessTokenSilently()
    mutation.mutate({ song, token })
  }

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Add new song</h1>
      <p className="text-xs">
        Fill in the details below to add a new song to your list
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="title">Title *</label>
          <TextBox name="title" id="title" required />
        </div>
        <div>
          <label htmlFor="artist">Artist *</label>
          <TextBox name="artist" id="artist" required />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <TextBox name="genre" id="genre" required />
        </div>
        <div>
          <label htmlFor="link">Link</label>
          <TextBox name="link" id="link" required />
        </div>
        <Button>Save</Button>
      </form>
    </main>
  )
}

export default AddSongs
