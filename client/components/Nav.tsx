import { Link } from 'react-router-dom'
import LogoutButton from './Logout'
import LoginButton from './Login'

function Nav() {
  return (
    <nav className="pl-4 pt-3 flex justify-between items-center">
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
          <Link to="show-qr">Share QR code</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
