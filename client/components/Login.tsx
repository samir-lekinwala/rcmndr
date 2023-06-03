import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button/Button'

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>
}

export default LoginButton
