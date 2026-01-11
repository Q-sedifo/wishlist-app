import { useWish } from '../hooks/useWish'
import { ConfirmDeleteWishModal } from '../components/modals/ConfirmDeleteWishModal'
import { UpdateWishModal } from '../components/modals/UpdateWishModal'
import { AddWishModal } from '../components/modals/AddWishModal'
import type { IWish } from '../types/wish'
import { WishCard } from '../components/WishCard'
import { Loader } from '../components/Loader'
import { useWishSorting } from '../hooks/useWishSorting'
import { useWishModals } from '../hooks/useWishModals'
import { usePagination } from '../hooks/usePagination'
import { FiltersBar } from '../components/FilterBar'
import { Button } from '../components/ui/Button'

export default function Dashboard() {
  const { wishes, loading, deleteWish, addWish, updateWish } = useWish()

  const {
    addOpen,
    openAdd,
    closeAdd,
    editWish,
    openEdit,
    closeEdit,
    deleteId,
    openDelete,
    closeDelete
  } = useWishModals()

  const {
    sortedWishes,
    dateSort,
    priceSort,
    setDateSort,
    setPriceSort
  } = useWishSorting(wishes)

  const {
    paginatedItems,
    canLoadMore,
    loadMore,
    reset
  } = usePagination(sortedWishes, 6)

  if (loading) return <Loader/>

  return (
    <main className="p-2">
      <div className='w-full flex gap-2 items-center justify-between'>
        <FiltersBar
          dateSort={dateSort}
          priceSort={priceSort}
          onDateChange={(value) => {
            setDateSort(value)
            reset()
          }}
          onPriceChange={(value) => {
            setPriceSort(value)
            reset()
          }}
        />
        <Button
        variant='primary'
        onClick={openAdd}
        >
          + Add wish
        </Button>
      </div>
      <AddWishModal
        isOpen={addOpen}
        onClose={closeAdd}
        onSubmit={(data) => {
          addWish(data)
          closeAdd()
        }}
      />
      <UpdateWishModal
        isOpen={!!editWish}
        onClose={closeEdit}
        initialData={editWish}
        onSubmit={(data) => {
          updateWish(data as IWish)
          closeEdit()
        }}
      />
      <ConfirmDeleteWishModal
        isOpen={!!deleteId}
        onClose={closeDelete}
        onConfirm={() => {
          deleteWish(deleteId!)
          closeDelete()
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedItems.map((wish) => (
          <WishCard
            key={wish.id}
            wish={wish}
            setEditWish={openEdit}
            setDeleteId={openDelete}
          />
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <Button
            variant='primary'
            onClick={loadMore}
          >
            Load more
          </Button>
        </div>
      )}
    </main>
  )
}
