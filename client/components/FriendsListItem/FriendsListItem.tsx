import { Friend } from '../../../types/User'
import Icon from '../UI/Icon/Icon'

interface Props {
  friend: Friend
  handleDeleteFriend: (friendId: string) => void
}

function FriendsListItem(props: Props) {
  const { friend, handleDeleteFriend } = props
  const { nickname, firstName, lastName,  id } = friend
  return (
    <li className="list-none flex gap-4">
      <div className="self-center flex-none">
        <Icon>
          <i className="fa-solid fa-user text-black" title="friend" />
        </Icon>
      </div>
      <div className="flex flex-col w-36 flex-auto">
        <h3 className="text-white">{nickname}</h3>
        <h4 className="text-xs text-lightPurple">{`${firstName} ${lastName}`}</h4>
      </div>
      <div className="flex flex-row gap-2 self-center flex-none">
        <button onClick={() => handleDeleteFriend(id)}>
          <Icon className="bg-warning">
            <i className="fa-solid fa-trash" title="delete friend" />
          </Icon>
        </button>
      </div>
    </li>
  )
}

export default FriendsListItem
