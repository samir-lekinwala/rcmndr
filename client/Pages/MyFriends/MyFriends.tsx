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
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My existing friends</h1>
      <ul className="space-y-4">
        {data &&
          data?.map((friend) => <li key={friend.id}>{friend.nickname}</li>)}
      </ul>
    </div>
  )
}

export default MyFriends
