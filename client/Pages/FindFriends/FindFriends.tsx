import { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import TextBox from '../../components/UI/TextBox/TextBox'
import useSearchFrends from '../../hooks/useSearchFrends'
import { useQuery } from '@tanstack/react-query'
import { searchFriends } from '../../apis/user'
import { useAuth0 } from '@auth0/auth0-react'

interface user {
  auth0_id: string
  first_name: string
  last_name: string
  nickname: string
}

function FindFriends() {
  const [input, setInput] = useState('')
  const [searchData, setSearchData] = useState([] as user[])

  const { user, getAccessTokenSilently } = useAuth0()

  // const { data, isLoading } = useQuery({
  //   queryKey: ['searchFriends'],
  //   queryFn: async () => {
  //     const accessToken = await getAccessTokenSilently()
  //     if (user && user.sub) {
  //       const response = await searchFriends(input, accessToken)
  //       return response
  //     }
  //   },
  // })

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(e.currentTarget.value)
    setInput(e.currentTarget.value)
    console.log(input)
  }

  async function handleFind() {
    const accessToken = await getAccessTokenSilently()
    if (user && user.sub) {
      const response = await searchFriends(input, accessToken)
      // console.log(response)
      setSearchData(response)
      console.log('searchData', searchData)
    }
  }

  async function handleFollow() {}

  return (
    <div className="p-4 mt-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">My friends</h1>
        <h2 className="text-xl font-semibold">Follow a new friend</h2>
        <div className="flex items-baseline gap-2">
          <TextBox
            onChange={handleInput}
            placeholder="genre, nickname or a real name"
          />
          <Button onClick={handleFind}>Find</Button>
        </div>
        <p className="pl-10 text-sm text-purple-400 text-center">
          No rcmndrs match your criteria
        </p>
      </div>
      <div className="h-4 border-gray-400">
        <p>Loading...</p>
      </div>
      <ul>
        <li>
          {searchData?.map((u) => (
            <div key={u.auth0_id}>
              <p key={u.auth0_id}>{u.first_name}</p>
              <button onClick={handleFollow}>Follow</button>
            </div>
          ))}
        </li>
      </ul>
      <div>
        <p>Display existing friends here</p>
      </div>
    </div>
  )
}

export default FindFriends
