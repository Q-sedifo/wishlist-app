import { Button } from '../ui/Button'
import { ModalLayout } from './ModalLayout'

interface IConfirmDeleteProps {
  onConfirm: () => void
  onClose: () => void
  isOpen: boolean
}

export function ConfirmDeleteWishModal({ onConfirm, onClose, isOpen }: IConfirmDeleteProps) {
  return (
    <ModalLayout
      title='Delete wish'
      onClose={onClose}
      isOpen={isOpen}
    >
      <div>
        <p className="mb-6">Are you sure you want to delete this wish?</p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </ModalLayout>
  )
}