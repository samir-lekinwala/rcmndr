import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'
import { getFriends } from '../../apis/user'

function MyFriends() {
  const { getAccessTokenSilently } = useAuth0()
  const { data, error } = useQuery({
    queryKey: 'getFriends',
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const friends = await getFriends(token)
      console.log(friends)

      return friends
    },
  })
  return (
    <div>
      <h1>My existing friends</h1>
      <ul>
        {data &&
          data?.map((friend) => <li key={friend.id}>{friend.nickname}</li>)}
      </ul>
    </div>
  )
}

export default MyFriends
