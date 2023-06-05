import { useAuth0 } from '@auth0/auth0-react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'

import ConfirmScan from '../../components/ConfirmScan/ConfirmScan'
import { followUser, getUser } from '../../apis/user'

function Code() {
  const { getAccessTokenSilently } = useAuth0()
  const { code } = useParams()
  const mutation = useMutation({
    mutationFn: ({ auth0, token }: { auth0: string; token: string }) =>
      followUser(auth0, token),
  })

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getUser'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (code && token) {
        return await getUser(code, token)
      }
    },
  })

  async function handleFollow() {
    const token = await getAccessTokenSilently()
    mutation.mutate({ auth0: data?.auth0, token })
  }

  return (
    <>
      {data && (
        <ConfirmScan name={data?.nickname} handleFollow={handleFollow} />
      )}
      {isLoading && <p>loading</p>}
      {isError && <p>Unable to load information</p>}
    </>
  )
}

export default Code
