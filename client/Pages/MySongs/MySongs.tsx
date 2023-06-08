import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { getSongs } from '../../apis/songs'
import SongListItem from '../../components/SongListItem/SongListItem'

function MySongs() {
  const { getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: ['getSongs'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await getSongs(token)
    },
  })

  function handleDeleteSong(songId: string) {
    console.log(songId)
  }

  function handleEditSong(songId: string) {
    console.log(songId)
  }

  return (
    <div>
      <div className="pl-4 pr-4 mt-8">
        <h1 className="text-3xl">Brenegade</h1>
        <h2 className="text-xs">These are the tracks you have recommended</h2>
        <ul className="flex flex-col gap-4 mt-6">
          {!isLoading &&
            data &&
            data.map((song) => (
              <li key={song.id} className="flex flex-row gap-2">
                <SongListItem
                  song={song}
                  handleDeleteSong={handleDeleteSong}
                  handleEditSong={handleEditSong}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="fixed bottom-4 right-0">
        <Link to="/add-songs">
          <i className="fa-solid fa-plus text-xl bg-primary w-8 h-8 p-2 rounded-full mr-4"></i>
        </Link>
      </div>
    </div>
  )
}

export default MySongs
