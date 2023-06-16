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
import ScanQr from './components/ScanQrCode/ScanQrCode'
import ConfirmScan from './Pages/ConfirmScan/ConfirmScan'
import ProtectedComponent from './components/UI/ProtectedComponent'
import Profile from './Pages/Profile/Profile'
import Home from './Pages/Home/Home'
import ShowQR from './Pages/ShowQR/ShowQR'
import MyFriends from './Pages/MyFriends/MyFriends'
import FindFriends from './Pages/FindFriends/FindFriends'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route
      path="find-friends"
      element={<ProtectedComponent component={FindFriends} />}
    />
    <Route path="scan" element={<ProtectedComponent component={ScanQr} />} />
    <Route
      path="code/:code"
      element={<ProtectedComponent component={ConfirmScan} />}
    />
    <Route path="show-qr" element={<ProtectedComponent component={ShowQR} />} />
    <Route
      path="my-friends"
      element={<ProtectedComponent component={MyFriends} />}
    />
    <Route
      path="profile"
      element={<ProtectedComponent component={Profile} />}
    />
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
