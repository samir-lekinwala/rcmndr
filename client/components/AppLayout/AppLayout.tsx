import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import { Toaster } from 'react-hot-toast'
import useUpdateTitle from '../../hooks/useUpdateTitle'

function AppLayout() {
  useUpdateTitle()

  return (
    <div className="bg-darkPurple h-screen text-white">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
