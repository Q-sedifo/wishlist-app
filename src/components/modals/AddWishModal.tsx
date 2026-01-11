import { ModalLayout } from './ModalLayout'
import { WishForm } from '../forms/WishForm'
import type { IWish } from '../../types/wish'

interface IProps {
  isOpen: boolean
  onClose: () => void
  initialData?: IWish | null
  onSubmit: (data: IWish | Omit<IWish, 'id'>) => void
}

export function AddWishModal({ isOpen, onClose, onSubmit }: IProps) {
  return (
    <ModalLayout
      title="Add wish"
      isOpen={isOpen}
      onClose={onClose}
    >
      <WishForm
        onSubmit={onSubmit}
      />
    </ModalLayout>
  )
} 