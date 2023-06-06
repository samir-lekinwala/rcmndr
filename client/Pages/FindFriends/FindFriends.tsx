import MyFriends from '../MyFriends/MyFriends'
import TextBox from '../../components/UI/TextBox/TextBox'

function FindFriends() {
  return (
    <div className="p-4 mt-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">My friends</h1>
        <h2 className="text-xl font-semibold">Follow a new friend</h2>
        <div className="flex items-baseline gap-4">
          <i className="fa-solid fa-search" />
          <TextBox placeholder="Search by a genre, nickname or a real name" />
        </div>
      </div>
      <div>
        <MyFriends />
      </div>
    </div>
  )
}

export default FindFriends
