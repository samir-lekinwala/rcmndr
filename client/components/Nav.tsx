import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Nav() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/my-songs`,
      },
    })
  }

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  return (
    <nav className="pt-16 flex items-center align-middle">
      <ul className="text-3xl">
        <li>
          <Link to="profile">My tracks</Link>
        </li>
        <li>
          <Link to="my-tracks">My friends</Link>
        </li>
        <li>
          <Link to="edit-profile">Edit my profile</Link>
        </li>
        <li>
          <Link to="scan">Scan</Link>
        </li>
        <li>
          <Link to="show-qr">Share QR code</Link>
        </li>
        <li>
          {!isAuthenticated && <button onClick={handleLogin}>Log in</button>}
        </li>
        <li>
          {isAuthenticated && <button onClick={handleLogout}>Log out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
