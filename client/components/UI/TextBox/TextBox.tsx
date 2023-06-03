import { InputHTMLAttributes } from 'react'

interface Props {
  defaultValue?: string
}

type InputAttribues = InputHTMLAttributes<HTMLInputElement>

function TextBox({ defaultValue, ...rest }: InputAttribues) {
  return (
    <input
      className="w-full bg-[#301453] placeholder-[#B07CF2] text-white px-3 py-2 text-sm leading-tight border shadow appearance-none focus:outline-none focus:shadow-outline rounded-lg"
      {...rest}
    />
  )
}

export default TextBox
