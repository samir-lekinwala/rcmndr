import { Song } from '../../../../types/Song'

interface Props {
  song: Song
}

function Spotify({ song }: Props) {
  const checked = song.link?.includes('spotify')

  if (song && checked) {
    const spotify = song.link?.split('.')

    const track = spotify && spotify[2].split('/')

    const splitTrack = track && track[2].split('?')

    const spotifyID = splitTrack && splitTrack[0]

    return (
      <iframe
        title={song.title}
        className="p-4"
        src={`https://open.spotify.com/embed/track/${spotifyID}?utm_source=generator`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    )
  }
}

export default Spotify
