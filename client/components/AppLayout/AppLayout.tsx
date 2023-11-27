import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import { Toaster } from 'react-hot-toast'

function AppLayout() {
  return (
    <div className="bg-darkPurple text-white">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
