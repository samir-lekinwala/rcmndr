import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()
  const [data, setData] = useState('No result')

  const handleScan = (result) => {
    if (result) {
      setData((prevData) => result.text)
      console.log(result.text)
      navigate(`/code/${result.text}`)
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        onResult={handleScan}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  )
}
export default Test
