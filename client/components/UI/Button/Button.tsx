import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'w-auto hover:font-semibold bg-primary text-white py-2 px-4 rounded-lg',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
