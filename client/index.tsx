import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Test from './components/Test'
import Code from './components/Code'

function AppProvider() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="test" element={<Test />} />
        <Route path="code/:code" element={<Code />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <AppProvider />
  )
})
