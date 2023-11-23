import { useEffect } from 'react'
import LoginButton from '../../components/Login/Login'
import RegisterButton from '../../components/RegisterButton/RegisterButton'
import { useAnimation, motion } from 'framer-motion'

function Home() {
  // const [scope, animate] = useAnimate()

  // useEffect(() => {
  //   animate(
  //     scope.current,
  //     { opacity: 1 },
  //     { delay: stagger(0.1, { from: 'first' }) }
  //   )
  // })
  //   return (
  //     <div className="pt-44 pl-4 flex flex-col gap-4">
  //       <div>
  //         <p className="text-4xl">collate.</p>
  //         <p className="text-4xl">recommend.</p>
  //         <p className="text-4xl">discover.</p>
  //       </div>
  //       <div className="flex gap-2">
  //         <LoginButton />
  //         <RegisterButton />
  //       </div>
  //     </div>
  //   )
  // }
  const controls = useAnimation()
  useEffect(() => {
    const staggerAnimation = async () => {
      await controls.start((i) => ({
        opacity: 1,
        transition: { duration: 5 },
        delay: i * 0.2,
      }))
    }
    staggerAnimation()
  }, [controls])
  return (
    <div className="pt-44 pl-4 flex flex-col gap-4">
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={controls}
          custom={0}
          style={{ marginBottom: `10px` }}
          className="text-4xl"
        >
          collate.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={controls}
          custom={1}
          style={{ marginBottom: `10px` }}
          className="text-4xl"
        >
          recommend.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={controls}
          custom={2}
          style={{ marginBottom: `10px` }}
          className="text-4xl"
        >
          discover.
        </motion.p>
      </div>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
