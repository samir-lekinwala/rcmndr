import { useState } from 'react'
import Icon from '../components/UI/Icon/Icon'

function MyTracks() {
  const initial = [
    {
      id: 1,
      name: 'Fell the Fire',
      artist: 'Shihad',
    },
    {
      id: 2,
      name: 'Time After Time',
      artist: 'Gunship',
    },
    {
      id: 3,
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
    },
  ]
  const [tracks, setTracks] = useState(initial)
  return (
    <div>
      <h1 className="text-3xl">Brenegade</h1>
      <h2 className="text-xs">These are the tracks you have recommended</h2>
      <ul className="flex flex-col gap-4 mt-8">
        {tracks.map((track) => (
          <li key={track.id} className="flex flex-row gap-2">
            <div className="self-center flex-none">
              <Icon>
                <i className="fa-solid fa-play text-black" />
              </Icon>
            </div>
            <div className="flex flex-col w-36 flex-auto">
              <h3>{track.name}</h3>
              <h4 className="text-xs text-lightPurple">{track.artist}</h4>
            </div>
            <div className="flex flex-row gap-2 self-center flex-none">
              <Icon>
                <i className="fa-solid fa-pen" />
              </Icon>
              <Icon>
                <i className="fa-solid fa-trash" />
              </Icon>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyTracks
