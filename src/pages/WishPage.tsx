import { useParams, useNavigate, Link } from 'react-router-dom'
import { useWish } from '../hooks/useWish'
import { ConfirmDeleteWishModal } from '../components/modals/ConfirmDeleteWishModal'
import { UpdateWishModal } from '../components/modals/UpdateWishModal'
import { Button } from '../components/ui/Button'
import { useWishModals } from '../hooks/useWishModals'
import type { IWish } from '../types/wish'  

export default function WishPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { wishes, updateWish, deleteWish } = useWish()

  const wish = wishes.find(w => w.id === id)

  const { 
    editWish,
    openEdit,
    closeEdit,
    deleteId,
    openDelete,
    closeDelete
  } = useWishModals()

  if (!wish) {
    return (
      <div className="p-6">
        <p>Wish not found</p>
        <Link to="/" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to dashboard
      </Link>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img
          src={wish.image}
          alt={wish.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3">{wish.title}</h1>
          <p className="text-gray-700 mb-4">{wish.description}</p>
          <p className="text-xl font-semibold">{wish.price}$</p>
        </div>
        <div className="flex justify-end gap-3 p-6 border-t">
          <Button 
            variant="secondary" 
            onClick={() => openEdit(wish)}
          >
            Edit
          </Button>
          <Button 
            variant="danger" 
            onClick={() => openDelete(wish.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      <UpdateWishModal
        isOpen={!!editWish}
        onClose={closeEdit}
        initialData={editWish}
        onSubmit={data => {
          updateWish(data as IWish)
          closeEdit()
        }}
      />
      <ConfirmDeleteWishModal
        onConfirm={() => {
          deleteWish(deleteId!)
          closeDelete()
          navigate('/')
        }}
        isOpen={!!deleteId}
        onClose={closeDelete}
      />
    </div>
  )
}
