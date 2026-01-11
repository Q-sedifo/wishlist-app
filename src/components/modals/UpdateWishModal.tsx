import { ModalLayout } from './ModalLayout'
import { WishForm } from '../forms/WishForm'
import type { IWish } from '../../types/wish'

interface IProps {
  isOpen: boolean
  onClose: () => void
  initialData?: IWish | null
  onSubmit: (data: Omit<IWish, 'id'> | IWish) => void
}

export function UpdateWishModal({ isOpen, onClose, initialData, onSubmit }: IProps) {
  return (
    <ModalLayout
      title="Update wish"
      isOpen={isOpen}
      onClose={onClose}
    >
      <WishForm
        initialData={initialData}
        onSubmit={onSubmit}
      />
    </ModalLayout>
  )
} 