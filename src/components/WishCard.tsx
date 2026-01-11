import type { IWish } from '../types/wish'
import { Link } from 'react-router-dom'

interface IProps {
  wish: IWish
  setEditWish: (wish: IWish) => void
  setDeleteId: (id: number | string) => void
}

export function WishCard({ wish, setEditWish, setDeleteId }: IProps) {
  return (
    <div key={wish.id} className="border p-4 rounded">
      <img src={wish.image} className="h-40 w-full object-cover mb-2" />
      <h3 className="font-semibold">{wish.title}</h3>
      <p>{wish.price}$</p>

      <div className="flex gap-2 mt-3">
        <Link
          to={`/wish/${wish.id}`}
          className="text-green-600"
        >
          Details
        </Link>
        <button
          onClick={() => setEditWish(wish)}
          className="text-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => setDeleteId(wish.id)}
          className="text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}