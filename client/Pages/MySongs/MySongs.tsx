import { useEffect } from 'react'

function MySongs() {
  useEffect(() => {
    document.title = 'MySongs'
  }, [])
  return (
    <div>
      <h1>My Songs</h1>
    </div>
  )
}

export default MySongs
