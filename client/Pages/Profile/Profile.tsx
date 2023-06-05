import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import Form from '../../components/Form/Form'
import { ProfileDraft } from '../../../types/Profile'

function Profile() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const navigate = useNavigate()

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
      navigate('/my-songs')
    }
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default Profile
