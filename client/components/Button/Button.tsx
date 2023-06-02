interface Props {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return (
    <div className="bg-purple-600">
      <button className="bg-blue-500 hover:bg-blue-700 text-pink-50 font-bold py-2 px-4 rounded-full">
        {children}
      </button>
    </div>
  )
}

export default Button
