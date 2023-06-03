import { useState } from 'react'

import Logo from '../Logo/Logo'
import Nav from '../Nav'

function Header() {
  const [navOpened, setNavOpened] = useState(false)

  function toggleMenu() {
    setNavOpened(() => !navOpened)
  }

  return (
    <div className="pl-4 pt-3 flex justify-between items-center">
      <Logo />
      {!navOpened && (
        <button onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
      {navOpened && (
        <button onClick={toggleMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
      )}
      {navOpened && (
        <nav className="fixed top-16 left-4 h-full w-full backdrop-filter backdrop-blur-md bg-opacity-5 bg-gray-100">
          <Nav />
        </nav>
      )}
    </div>
  )
}

export default Header
