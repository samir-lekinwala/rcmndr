import { Song } from '../../../types/Song'
import SongListItem from '../../components/SongListItem/SongListItem'

function MySongs() {
  const fakeTrack: Song = {
    id: '1',
    title: 'Hengelo',
    artist: 'Spring Offensive',
    genre: 'Indie Rock',
    link: 'https://open.spotify.com/track/4rqpg85XNApASjAvqjHlb1?si=2bdc00343f3e47f2',
  }

  function handleEditSong() {}

  function handleDeleteSong() {}

  return (
    <div>
      <h1>My Songs</h1>
      <div>
        <SongListItem
          handleEditSong={handleEditSong}
          handleDeleteSong={handleDeleteSong}
          song={fakeTrack}
        />
      </div>
    </div>
  )
}

export default MySongs
