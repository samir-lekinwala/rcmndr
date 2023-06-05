import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react'

import AppLayout from './components/AppLayout/AppLayout'
import Test from './components/ScanQr/ScanQr'
import Code from './components/Code/Code'
import ProtectedComponent from './components/UI/ProtectedComponent'
import Profile from './Pages/Profile/Profile'
import Home from './Pages/Home/Home'
import MySongs from './Pages/MySongs/MySongs'
import AddSongs from './Pages/AddSongs/AddSongs'
import ShowQR from './Pages/ShowQR/ShowQR'

function AppProvider() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="scan" element={<ProtectedComponent component={Test} />} />
        <Route
          path="code/:code"
          element={<ProtectedComponent component={Code} />}
        />
        <Route
          path="show-qr"
          element={<ProtectedComponent component={ShowQR} />}
        />
        <Route
          path="my-songs"
          element={<ProtectedComponent component={MySongs} />}
        />
        <Route
          path="add-songs"
          element={<ProtectedComponent component={AddSongs} />}
        />
        <Route
          path="profile"
          element={<ProtectedComponent component={Profile} />}
        />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="rcmndr-dev-academy.au.auth0.com"
      clientId="6GbkK4Z4WyNAcRadrPYsWLrgaFT7Gaoa"
      cacheLocation="localstorage"
      authorizationParams={{
        audience: 'https://rcmndr/api',
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
