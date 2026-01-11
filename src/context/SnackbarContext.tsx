import { type ReactNode, useState, createContext } from 'react'

export type TSnackbarType = 'success' | 'error'

export interface ISnackbarState {
  open: boolean
  message: string
  type: TSnackbarType
}

export interface SnackbarContextType {
  showSnackbar: (message: string, type: TSnackbarType) => void
}

export const SnackbarContext = createContext<SnackbarContextType | null>(null)

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [snackbar, setSnackbar] = useState<ISnackbarState>({
    open: false,
    message: '',
    type: 'success',
  })

  const showSnackbar = (message: string, type: TSnackbarType) => {
    setSnackbar({ open: true, message, type })

    setTimeout(() => {
      setSnackbar(prev => ({ ...prev, open: false }))
    }, 3000)
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar.open && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-3 rounded shadow-lg text-white
            ${snackbar.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {snackbar.message}
        </div>
      )}
    </SnackbarContext.Provider>
  )
}