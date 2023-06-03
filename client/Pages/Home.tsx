import LoginButton from '../components/Login'
import RegisterButton from '../components/Register'

function Home() {
  return (
    <div className="pt-44 pl-4">
      <div>
        <p className="text-3xl">collate.</p>
        <p className="text-3xl">recommend.</p>
        <p className="text-3xl">discover.</p>
      </div>
      <LoginButton />
      <RegisterButton />
    </div>
  )
}

export default Home
