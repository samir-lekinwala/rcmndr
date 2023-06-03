import { useState } from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav'

function Header() {
  const [navOpened, setNavOpened] = useState(false)

  function toggleMenu() {
    setNavOpened(!navOpened)
  }

  return (
    <div className="pl-4 pt-3 flex justify-between items-center">
      <Logo />
      <button className="app-header__nav-toggle" onClick={toggleMenu}>
        <span className={`fa fa-${navOpened ? 'times' : 'bars'}`}></span>
      </button>
      <nav
        // className={`nav${navOpened ? ' nav--open' : ''}`}
        className="fixed top-[-100vh] h-screen left-0 right-0 transition-top duration-400 flex items-center bg-[rgba(var(--col-background),0.8)] p-2 sm:p-4 backdrop-filter backdrop-blur-md"
        onClick={toggleMenu}
      >
        <Nav />
      </nav>
    </div>
  )
}

export default Header
