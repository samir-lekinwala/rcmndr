import { Song } from '../../../types/Song'
interface Props {
  song: Song
}

function AddSong(props: Props) {
  const { song } = props
  return (
    <li className="list-none flex gap-4">
      <div className="self-center flex-none">
        <i className="fa-solid fa-play text-black" />
      </div>
      <div className="flex flex-col w-36 flex-auto">
        <h3 className="text-white">{song.title}</h3>
        <h4 className="text-xs text-lightPurple">{song.artist}</h4>
      </div>
      <div className="flex flex-row gap-2 self-center flex-none">
        <button></button>
      </div>
    </li>
  )
}

export default AddSong
