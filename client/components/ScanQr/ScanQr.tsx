import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'

const schema = z.object({
  text: z.string(),
})

function Test() {
  const navigate = useNavigate()

  function handleScan(result: unknown) {
    const resultParsed = schema.safeParse(result)

    if (!resultParsed.success) return
    navigate(`/code/${resultParsed.data.text}`)
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
