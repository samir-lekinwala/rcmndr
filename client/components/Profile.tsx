import { useAuth0 } from '@auth0/auth0-react'
import Form from './From'
import { ProfileDraft } from '../../models/Profile'

function Profile() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  console.log({ user, isAuthenticated, isLoading })
  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: ProfileDraft) {
    const token = await getAccessTokenSilently()
    const response = await fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    })

    if (response.ok) {
      console.log('success')
    }
  }

  return (
    <div>
      <p>{user?.email}</p>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default Profile
