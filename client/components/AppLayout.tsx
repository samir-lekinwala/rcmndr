import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'

function AppLayout() {
  return (
    <div className="bg-darkPurple h-screen text-white">
      <Nav />
      <Title />
      <Outlet />
    </div>
  )
}

export default AppLayout
