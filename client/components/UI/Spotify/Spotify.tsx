import { log } from 'node:console'
import { Song } from '../../../../types/Song'

interface Props {
  song: Song
}

function Spotify({ song }) {
  // check spotify
  function checkSpotify(song) {
    const spotify = song.link.split('.')
    if (spotify[1] === spotify) return true
    else return false
  }

  // create dynamic name

  return (
    <>
      <iframe
        title={song.title}
        className="p-4"
        src="https://open.spotify.com/embed/track/6ICdz2wvVMDC4u801OwHA2?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      {/* {JSON.stringify(song)} */}
    </>
  )
}

export default Spotify
