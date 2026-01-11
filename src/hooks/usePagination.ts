import { useState, useMemo } from 'react'

export function usePagination<T>(items: T[], pageSize = 6) {
  const [page, setPage] = useState(1)

  const paginatedItems = useMemo(() => {
    return items.slice(0, page * pageSize)
  }, [items, page, pageSize])

  const canLoadMore = paginatedItems.length < items.length

  const loadMore = () => setPage((p) => p + 1)
  const reset = () => setPage(1)

  return {
    paginatedItems,
    canLoadMore,
    loadMore,
    reset,
  }
}
