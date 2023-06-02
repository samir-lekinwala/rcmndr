import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import AppLayout from './components/AppLayout'
import Test from './components/Test'
import Code from './components/Code'
import { Auth0Provider } from '@auth0/auth0-react'
import ProtectedComponent from './components/ProtectedComponent'
import Profile from './components/Profile'
import Home from './Home'

function AppProvider() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="code/:code" element={<Code />} />
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
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="rcmndr-dev-academy.au.auth0.com"
      clientId="6GbkK4Z4WyNAcRadrPYsWLrgaFT7Gaoa"
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider />
    </Auth0Provider>
  )
})
