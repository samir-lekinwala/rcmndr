interface Props {
  children: React.ReactNode
}

function Icon({ children }: Props) {
  return (
    <div className="flex flex-col justify-center bg-extraLightPurple rounded-full text-black text-xs w-6 h-6">
      {children}
    </div>
  )
}

export default Icon
