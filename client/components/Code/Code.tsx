import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../UI/Button/Button'

function Code() {
  const { code } = useParams()

  useEffect(() => {
    console.log(code)
  }, [code])

  async function handleFollow() {}

  return (
    <div className="flex flex-col pl-4 h-screen items-center justify-center space-y-4">
      <p>
        We found <b>charlie</b> in the database{' '}
      </p>
      <p>Would you like to follow charlie</p>
      <div className="space-x-4">
        <Button onClick={handleFollow}>Follow</Button>
        <Button className="bg-white text-primary">Cancel</Button>
      </div>
    </div>
  )
}

export default Code
