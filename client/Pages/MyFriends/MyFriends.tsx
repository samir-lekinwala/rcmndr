import { useQuery } from '@tanstack/react-query'
import { getFriends } from '../../apis/user'
import useUpdateTitle from '../../hooks/useUpdateTitle'
import { useAuth0 } from '@auth0/auth0-react'
import FriendsListItem from '../../components/FriendsListItem/FriendsListItem'

function MyFriends() {
  useUpdateTitle('MyFriends')
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['myFriends'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const songs = await getFriends(token)
      return songs
    },
  })

  function handleDeleteFriend () {

  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  if (isLoading) {
    return <p>loading...</p>
  }

  if (isError) {
    return <p>something went wrong</p>
  }

  return (
    <div>
      {/* Todo: add search functionality */}
      <h1>My friends</h1>
      <div>
        {data &&
          data.map((friend) => {
            return (
              <FriendsListItem 
              key={friend.id}
              friend={friend}
              handleDeleteFriend={handleDeleteFriend}/>
            )
          })}
      </div>
    </div>
  )
}

export default MyFriends


