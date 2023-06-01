import { useParams } from 'react-router-dom'

function Code() {
  const { code } = useParams()
  return (
    <>
      <p>
        We found <b>charlie</b>({code}) in the database{' '}
      </p>
      <p>Would you like to follow charlie</p>
      {/* style button */}
      <button className="border-slate-50 border-2">Follow?</button>
    </>
  )
}

export default Code
