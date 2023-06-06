import MyFriends from '../MyFriends/MyFriends'
import TextBox from '../../components/UI/TextBox/TextBox'

function FindFriends() {
  return (
    <div className="p-4 mt-10 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold">My friends</h1>
        <h2>Follow a new friend</h2>
        <TextBox placeholder="Search by a genre, nickname or a real name" />
      </div>
      <div>
        <MyFriends />
      </div>
    </div>
  )
}

export default FindFriends
