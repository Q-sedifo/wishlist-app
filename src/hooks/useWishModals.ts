import { useState } from 'react'
import type { IWish } from '../types/wish'

export function useWishModals() {
  const [addOpen, setAddOpen] = useState(false)
  const [editWish, setEditWish] = useState<IWish | null>(null)
  const [deleteId, setDeleteId] = useState<number | string | null>(null)

  return {
    addOpen,
    openAdd: () => setAddOpen(true),
    closeAdd: () => setAddOpen(false),

    editWish,
    openEdit: (wish: IWish) => setEditWish(wish),
    closeEdit: () => setEditWish(null),

    deleteId,
    openDelete: (id: number | string) => setDeleteId(id),
    closeDelete: () => setDeleteId(null),
  }
}
