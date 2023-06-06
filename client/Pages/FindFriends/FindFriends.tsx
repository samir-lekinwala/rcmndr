import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

import MyFriends from '../MyFriends/MyFriends'
import TextBox from '../../components/UI/TextBox/TextBox'
import { searchFriends } from '../../apis/user'
import { Friend } from '../../../types/User'

function FindFriends() {
  const { getAccessTokenSilently } = useAuth0()
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestedFriends, setSuggestedFriends] = useState([] as Friend[])

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(() => e.target.value.trim())
    const token = await getAccessTokenSilently()
    const suggestions = await searchFriends(e.target.value.trim(), token)
    console.log(suggestions)

    setSuggestedFriends(() => suggestions)
  }

  return (
    <div className="p-4 mt-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">My friends</h1>
        <h2 className="text-xl font-semibold">Follow a new friend</h2>
        <div className="flex items-baseline gap-4">
          <i className="fa-solid fa-search" />
          <TextBox
            placeholder="Search by a genre, nickname or a real name"
            onChange={handleChange}
            value={searchQuery}
          />
        </div>
      </div>
      <ul>
        {suggestedFriends.map((friend) => (
          <li key={friend.id}>
            <div className="flex items-center gap-4">
              <p>{friend.nickname}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <MyFriends />
      </div>
    </div>
  )
}

export default FindFriends
