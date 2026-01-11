import type { TDateSort, TPriceSort } from '../types/filters'
import { Select } from './ui/Select'

interface FiltersBarProps {
  dateSort: TDateSort
  priceSort: TPriceSort
  onDateChange: (value: TDateSort) => void
  onPriceChange: (value: TPriceSort) => void
}

export function FiltersBar({
  dateSort,
  priceSort,
  onDateChange,
  onPriceChange,
}: FiltersBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Select
        label="Sort by date"
        value={dateSort}
        onChange={e => onDateChange(e.target.value as TDateSort)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </Select>

      <Select
        label="Sort by price"
        value={priceSort}
        onChange={e => onPriceChange(e.target.value as TPriceSort)}
      >
        <option value="high">Price: High → Low</option>
        <option value="low">Price: Low → High</option>
      </Select>
    </div>
  )
}