import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react'

import AppLayout from './components/AppLayout'
import Test from './components/Test'
import Code from './components/Code'
import ProtectedComponent from './components/ProtectedComponent'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import MyTracks from './Pages/MyTracks'
import AddSongs from './Pages/AddSongs'

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
          path="my-songs"
          element={<ProtectedComponent component={MyTracks} />}
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
