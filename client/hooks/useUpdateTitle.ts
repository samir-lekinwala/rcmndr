import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useUpdateTitle() {
  const location = useLocation()
  useEffect(() => {
    document.title = location.pathname.slice(1)
      ? location.pathname.slice(1)
      : 'Home'
  }, [location])
}
