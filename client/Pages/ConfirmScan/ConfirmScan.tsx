import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ConfirmScan from '../../components/ConfirmScan/ConfirmScan'
import { useQuery } from 'react-query'
import { getUser } from '../../apis/user'
import { useAuth0 } from '@auth0/auth0-react'

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

  return data && <ConfirmScan name={data?.nickname} />
}

export default Code
