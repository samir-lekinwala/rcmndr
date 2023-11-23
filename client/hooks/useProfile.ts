import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { upsertProfile } from '../apis/user'
import { getUser } from '../apis/user'
import { Profile, ProfileDraft } from '../../types/Profile'
import { AddSongDraft } from '../../types/Song'
import { addSong } from '../apis/songs'

function useProfile() {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUser(accessToken)
        return response
      }
    },
  })

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: ProfileDraft | Profile
      token: string
    }) => upsertProfile(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate('/my-songs')
    },
  })

  const addSongMutation = useMutation({
    mutationFn: ({ form, token }: { form: AddSongDraft; token: string }) =>
      addSong(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate('/my-songs')
    },
  })

  return { data, isLoading, mutation, addSongMutation }
}

export default useProfile
