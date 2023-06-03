import { InputHTMLAttributes } from 'react'

type InputAttribues = InputHTMLAttributes<HTMLInputElement>

function TextBox({ ...rest }: InputAttribues) {
  return (
    <input
      type="text"
      className="p-2 bg-[#301453] text-white border focus:shadow-[0px_0px_9px_2px_#B07CF2] border-transparent placeholder-[#B07CF2] focus:outline-none block w-full rounded-md sm:text-sm"
      {...rest}
    />
  )
}

export default TextBox
