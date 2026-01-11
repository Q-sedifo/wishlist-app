import { useEffect, useState } from 'react'
import type { IWish } from '../../types/wish'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Button } from '../ui/Button'

interface IWishFormProps {
  initialData?: IWish | null
  onSubmit: (data: Omit<IWish, 'id'> | IWish) => void
}

export function WishForm({ initialData, onSubmit }: IWishFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setDescription(initialData.description)
      setPrice(String(initialData.price))
      setImage(initialData.image)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const wish = {
      ...(initialData ?? {}),
      title,
      description,
      price: Number(price),
      image,
      createdAt: initialData?.createdAt ?? new Date().toISOString(),
    }

    onSubmit(wish)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <Textarea
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <Input
        type="number"
        label="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
      <Input
        label="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        {initialData ? 'Update wish' : 'Add wish'}
      </Button>
    </form>
  )
}
