import type { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export function Select({ label, className = '', children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-600">
        {label}
      </label>}
      <select
        {...props}
        className={`border rounded px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        {children}
      </select>
    </div>
  )
}