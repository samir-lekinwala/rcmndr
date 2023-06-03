import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function AppLayout() {
  return (
      <Nav />
    <div className="bg-darkPurple h-screen text-white">
      <Outlet />
    </div>
  )
}

export default AppLayout
