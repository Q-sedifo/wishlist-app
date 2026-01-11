import type { ReactNode } from 'react'

// Providers
import { WishProvider } from '../../context/WishContext'
import { SnackbarProvider } from '../../context/SnackbarContext'

interface IProps {
  children: ReactNode
}

export function Providers({ children }: IProps) {
  return (
    <SnackbarProvider>
      <WishProvider>
        { children }
      </WishProvider>
    </SnackbarProvider>
  )
}