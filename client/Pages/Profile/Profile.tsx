import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'

import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { ProfileDraft } from '../../../types/Profile'
import { createUser } from '../../apis/user'

function Profile() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: ProfileDraft; token: string }) =>
      createUser(form, token),
    onSuccess: () => {
      navigate('/my-songs')
    },
  })

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: ProfileDraft) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
    navigate('/my-songs')
  }

  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default Profile
