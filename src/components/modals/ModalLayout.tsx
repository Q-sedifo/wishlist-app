import { type ReactNode, useEffect } from 'react'
import { Button } from '../ui/Button'

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export function ModalLayout({ isOpen, onClose, title, children }: IModalProps) {
  
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])
  
  if (!isOpen) return null

  return (
    <div className="fixed p-2 inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="p-2 bg-white rounded-lg w-full max-w-md p-6 relative">
        {title && (
          <h2 className="text-xl font-semibold mb-4">
            {title}
          </h2>
        )}
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 bg-red-500 hover:bg-red-500"
        >
          ✕
        </Button>
        {children}
      </div>
    </div>
  )
}
