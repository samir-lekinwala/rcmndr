import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

import MyFriends from '../MyFriends/MyFriends'
import TextBox from '../../components/UI/TextBox/TextBox'
import { searchFriends } from '../../apis/user'
import { useQuery } from 'react-query'

function FindFriends() {
  const { getAccessTokenSilently } = useAuth0()
  const [searchQuery, setSearchQuery] = useState('')

  const { data: suggestedFriends, isLoading } = useQuery({
    queryKey: ['getFriends', searchQuery],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const friends = await searchFriends(searchQuery, token)
      return friends
    },
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(() => e.target.value)
  }

  return (
    <div className="p-4 mt-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">My friends</h1>
        <h2 className="text-xl font-semibold">Follow a new friend</h2>
        <div className="">
          <TextBox
            placeholder="Search by a genre, nickname or a real name"
            onChange={handleChange}
            value={searchQuery}
          />
          <p className="pl-10 text-sm text-purple-400 text-center">
            {suggestedFriends &&
              suggestedFriends.length === 0 &&
              searchQuery.length > 0 &&
              'No rcmndrs match your criteria'}
          </p>
        </div>
      </div>
      <div className="h-4 border-gray-400">
        {isLoading && <p>Loading...</p>}
      </div>
      <ul>
        {suggestedFriends &&
          suggestedFriends.map((friend) => (
            <li key={friend.id}>
              <div className="flex items-center gap-4">
                <p>{friend.nickname}</p>
              </div>
            </li>
          ))}
      </ul>
      <div>
        {suggestedFriends && suggestedFriends.length === 0 && <MyFriends />}
      </div>
    </div>
  )
}

export default FindFriends
