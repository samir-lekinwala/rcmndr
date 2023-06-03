import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="pt-3 flex justify-between items-center">
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
          <button>Log in</button>
        </li>
        <li>
          <button>Log out</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
