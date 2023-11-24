import { useQuery } from '@tanstack/react-query'
import { Song } from '../../../types/Song'
import SongListItem from '../../components/SongListItem/SongListItem'
import { getSongs } from '../../apis/songs'
import { useAuth0 } from '@auth0/auth0-react'

function MySongs() {
  // const data: Song[] = [
  //   {
  //     id: '1',
  //     title: 'Hengelo',
  //     artist: 'Spring Offensive',
  //     genre: 'Indie Rock',
  //     link: 'https://open.spotify.com/track/4rqpg85XNApASjAvqjHlb1?si=2bdc00343f3e47f2',
  //   },
  // ]

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['mySongs'],
    queryFn: () => getAccessTokenSilently().then((token) => getSongs(token)),
  })

  console.log(data)

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  if (isLoading) {
    return <p>loading...</p>
  }

  if (isError) {
    return <p>something went wrong</p>
  }

  function handleEditSong() {}

  function handleDeleteSong() {}

  return (
    <div>
      <h1>My Songs</h1>
      <div>
        {data &&
          data.map((track) => {
            return (
              <SongListItem
                key={track.id}
                handleEditSong={handleEditSong}
                handleDeleteSong={handleDeleteSong}
                song={track}
              />
            )
          })}
      </div>
    </div>
  )
}

export default MySongs
