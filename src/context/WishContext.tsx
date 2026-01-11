import { type ReactNode, useEffect, useState, createContext } from 'react'
import type { IWish } from '../types/wish'
import { useApi } from '../api/useApi'
import { useSnackbar } from '../hooks/useSnackbar'

export interface IWishContext {
  wishes: IWish[]
  loading: boolean
  error: string | null
  fetchWishes: () => Promise<void>
  addWish: (wish: Omit<IWish, 'id'>) => Promise<void>
  updateWish: (wish: IWish) => Promise<void>
  deleteWish: (id: number | string) => Promise<void>
}

export const WishContext = createContext<IWishContext | null>(null)

export function WishProvider({ children }: { children: ReactNode }) {
  const [wishes, setWishes] = useState<IWish[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { showSnackbar } = useSnackbar()

  const { request } = useApi()

  const fetchWishes = async () => {
    try {
      setLoading(true)
      const data = await request<IWish[]>('/wishes')
      setWishes(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const addWish = async (wish: Omit<IWish, 'id'>) => {
    try {
      setLoading(true)
      const newWish = await request<IWish>('/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(wish),
      })
      setWishes(prev => [...prev, newWish])
      showSnackbar('Wish added successfully', 'success')
    } catch (err) {
      setError((err as Error).message)
      showSnackbar('Failed to add wish', 'error')
    } finally {
      setLoading(false)
    }
  }

  const updateWish = async (wish: IWish) => {
    try {
      setLoading(true)
      const updated = await request<IWish>(`/wishes/${wish.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(wish),
      })

      setWishes(prev =>
        prev.map(w => (w.id === updated.id ? updated : w))
      )

      showSnackbar('Wish updated successfully', 'success')
    } catch (err) {
      setError((err as Error).message)
      showSnackbar('Failed to add wish', 'error')
    } finally {
      setLoading(false)
    }
  }

  const deleteWish = async (id: number | string) => {
    try {
      setLoading(true)

      await request(`/wishes/${id}`, { method: 'DELETE' })
      
      setWishes(prev => prev.filter(w => w.id !== id))
      showSnackbar('Wish deleted successfully', 'success')
    } catch (err) {
      setError((err as Error).message)
      showSnackbar('Failed to delete wish', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWishes()
  }, [])

  return (
    <WishContext.Provider
      value={{
        wishes,
        loading,
        error,
        fetchWishes,
        addWish,
        updateWish,
        deleteWish,
      }}
    >
      {children}
    </WishContext.Provider>
  )
}
