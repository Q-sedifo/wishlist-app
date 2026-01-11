import type { TextareaHTMLAttributes } from 'react'

interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function Textarea({ label, className = '', ...props }: ITextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <textarea
        {...props}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}
      />
    </div>
  )
}