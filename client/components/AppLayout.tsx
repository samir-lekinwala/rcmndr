import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function AppLayout() {
  return (
    <div className="bg-darkPurple h-screen text-white">
      {/* <Nav /> */}
      <Outlet />
    </div>
  )
}

export default AppLayout
