import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { searchFriends } from '../apis/user'

function useSearchFrends(searchValue: string) {
  const { user, getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: ['searchFriends'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await searchFriends(searchValue, accessToken)
        return response
      }
    },
  })

  return { data, isLoading }
}

export default useSearchFrends
