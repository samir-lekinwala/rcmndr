import LoginButton from '../components/Login'
import RegisterButton from '../components/Register'

function Home() {
  return (
    <div className="pt-44 pl-4 flex flex-col gap-4">
      <div>
        <p className="text-4xl">collate.</p>
        <p className="text-4xl">recommend.</p>
        <p className="text-4xl">discover.</p>
      </div>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
