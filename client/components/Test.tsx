import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()

  function handleScan(result: any) {
    if (result) {
      navigate(`/code/${result.text}`)
    }
  }

  return (
    <>
      <QrReader
        constraints={{ width: 100 }}
        scanDelay={300}
        onResult={handleScan}
      />
    </>
  )
}
export default Test
