import { useAuth0 } from '@auth0/auth0-react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import ConfirmScan from '../../components/ConfirmScan/ConfirmScan'
import { getUser } from '../../apis/user'

function Code() {
  const { getAccessTokenSilently } = useAuth0()
  const { code } = useParams()

  const { data, isLoading, isError, error } = useQuery(
    ['getUser'],
    async () => {
      const token = await getAccessTokenSilently()
      if (code && token) {
        return await getUser(code, token)
      }
    }
  )

  async function handleFollow() {}

  return (
    <>
      {data && <ConfirmScan name={data?.nickname} />}
      {isLoading && <p>loading</p>}
      {isError && <p>Unable to load information</p>}
    </>
  )
}

export default Code
