import { InputHTMLAttributes } from 'react'

type InputAttribues = InputHTMLAttributes<HTMLInputElement>

function TextBox({ ...rest }: InputAttribues) {
  return (
    <input
      type="text"
      className="px-3 py-2 bg-[#301453] text-white border focus:shadow-[0px_0px_9px_2px_#B07CF2] border-transparent placeholder-[#B07CF2] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none block w-full rounded-md sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
      {...rest}
    />
  )
}

export default TextBox
