import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'danger'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: IButtonProps) {
  const base = 'px-4 py-2 rounded font-medium transition disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'px-6 py-2 rounded bg-gray-800 text-white hover:bg-gray-700',
    secondary: 'border border-gray-300 hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  )
}
