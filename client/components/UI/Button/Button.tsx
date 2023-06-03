import React from 'react'

interface Props {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return (
    <button className="w-full hover:font-semibold bg-primary text-white py-2 px-4 rounded-lg">
      {children}
    </button>
  )
}

export default Button
