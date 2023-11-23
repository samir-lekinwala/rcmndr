import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { searchFriends } from '../../../../server/db/users'

type InputAttribues = InputHTMLAttributes<HTMLInputElement>

function TextBox({ className, ...rest }: InputAttribues) {
  return (
    <input
      onChange={() => {
        searchFriends()
      }}
      type="text"
      className={twMerge(
        'p-2 bg-[#301453] text-white border focus:shadow-[0px_0px_9px_2px_#B07CF2] border-transparent placeholder-[#B07CF2] focus:outline-none block w-full rounded-md sm:text-sm',
        className
      )}
      autoComplete="off"
      {...rest}
    />
  )
}

export default TextBox
