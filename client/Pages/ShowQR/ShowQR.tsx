import { useAuth0 } from '@auth0/auth0-react'

function ShowQR() {
  const { user } = useAuth0()

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${user?.sub}&amp;size=100x100`}
        alt="your qr code"
      />
    </div>
  )
}

export default ShowQR
