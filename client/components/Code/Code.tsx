import { useParams } from 'react-router-dom'

function Code() {
  const { code } = useParams()

  async function handleFollow() { }

  return (
    <>
      <p>
        We found <b>charlie</b>({code}) in the database{' '}
      </p>
      <p>Would you like to follow charlie</p>
      <button className="border-slate-50 border-2" onClick={handleFollow}>
        Follow?
      </button>
    </>
  )
}

export default Code
