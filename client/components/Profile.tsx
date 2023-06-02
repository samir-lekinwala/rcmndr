import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  console.log({ user, isAuthenticated, isLoading })
  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  return (
    <div>
      <p>{user?.email}</p>
    </div>
  )
}

export default Profile
