import { useContext } from 'react'
import { WishContext } from '../context/WishContext'

export function useWish() {
  const context = useContext(WishContext)

  if (!context) {
    throw new Error('useWish must be used inside WishProvider')
  }

  return context
}