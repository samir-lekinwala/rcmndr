import Header from '../../components/Header/Header'
import Background from '../../components/UI/Background/Background'

function ErrorPage() {
  return (
    <div>
      <Background>
        <Header />
        <div className="self-centered">
          <i
            className="fa-solid fa-triangle-exclamation w-40 h-40 rounded-full bg-slate-500"
            style={{ color: '#DBC3FA' }}
          ></i>
        </div>
      </Background>
    </div>
  )
}

export default ErrorPage
