import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ConfirmScan from '../../components/ConfirmScan/ConfirmScan'

function Code() {
  const { code } = useParams()

  useEffect(() => {
    console.log(code)
  }, [code])

  async function handleFollow() {}

  return <ConfirmScan name={'banana'} />
}

export default Code
