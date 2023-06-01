import { createRoot } from 'react-dom/client'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <p>Hello World</p>
  )
})
