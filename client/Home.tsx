import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

function Home() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    async function getAccessToken() {
      if (!isAuthenticated) return
      const token = await getAccessTokenSilently()
    }
    getAccessToken()
  }, [isAuthenticated])
  return <div>Home</div>
}

export default Home
