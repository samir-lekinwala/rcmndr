import { HtmlHTMLAttributes } from 'react'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-auto hover:font-semibold bg-primary text-white py-2 px-4 rounded-lg"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
