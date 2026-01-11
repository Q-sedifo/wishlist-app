import { useState, useMemo } from 'react'
import type { IWish } from '../types/wish'
import type { TDateSort, TPriceSort } from '../types/filters'

type TActiveSort = 'date' | 'price'

export function useWishSorting(wishes: IWish[]) {
  const [dateSort, setDateSort] = useState<TDateSort>('newest')
  const [priceSort, setPriceSort] = useState<TPriceSort>('high')
  const [activeSort, setActiveSort] = useState<TActiveSort>('date')

  const sortedWishes = useMemo(() => {
    const result = [...wishes]

    if (activeSort === 'date') {
      result.sort((a, b) =>
        dateSort === 'newest'
          ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    }

    if (activeSort === 'price') {
      result.sort((a, b) =>
        priceSort === 'high' ? b.price - a.price : a.price - b.price
      )
    }

    return result
  }, [wishes, activeSort, dateSort, priceSort])

  return {
    sortedWishes,
    dateSort,
    priceSort,
    setDateSort: (prev: TDateSort) => {
      setDateSort(prev)
      setActiveSort('date')
    },
    setPriceSort: (prev: TPriceSort) => {
      setPriceSort(prev)
      setActiveSort('price')
    },
  }
}
