import LoginButton from '../../components/Login/Login'
import RegisterButton from '../../components/RegisterButton/RegisterButton'
import { motion } from 'framer-motion'

function Home() {
  const slogan = ['collate.', 'recommend.', 'discover.']
  return (
    <div>
      <div
        className="pt-44 pl-4 flex flex-col gap-4"
        style={{ marginBottom: `40px` }}
      >
        {slogan.map((word, i) => (
          <div key={word}>
            <motion.p
              initial={{ opacity: 1, translateX: -250 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.7, delay: i * 1 }}
              className="text-4xl"
            >
              {word}
            </motion.p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
