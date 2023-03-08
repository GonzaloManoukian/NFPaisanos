import styles from './FilterPanel.module.css'
import dynamic from 'next/dynamic'
import { useMutationFiltersContext, useStateFiltersContext } from '@/contexts/FiltersContext/FilterContexts'
import { SelectElement } from '@/components/Select/Select'
import Button from '@/components/Button/Button'
import CloseIcon from '@/public/icons/close.svg'
import { useResetFilters } from '@/hooks/useResetFilters/useResetFilters'

type NewType = import('@/components/Select/Select').SelectProps
const Select = dynamic<NewType>(() =>
  import('@/components/Select/Select').then((mod) => mod.Select), {
  ssr: false
}
)

export const FilterPanel = () => {
  const { orderByFilter, categoryFilter, likesFilter, colorsFilter } = useStateFiltersContext()
  const { setOrderByFilter, setCategoryFilter, setLikesFilter, setColorsFilter } = useMutationFiltersContext()
  const resetFilters = useResetFilters()

  const orderBy: SelectElement[] = [
    { id: 'newest', name: 'Newest' },
    { id: 'oldest', name: 'Oldest' }
  ]
  const categories = [
    { id: 'allItems', name: 'All Items' },
    { id: 'Art', name: 'Art' },
    { id: 'Photography', name: 'Photography' }
  ]
  const likes = [
    { id: 'mostLiked', name: 'Most Liked' },
    { id: 'leastLiked', name: 'Least Liked' }
  ]
  const colors = [
    { id: 'allColors', name: 'All Colors' },
    { id: 'black', name: 'Black' },
    { id: 'orange', name: 'Orange' },
    { id: 'pink', name: 'Pink' },
    { id: 'blue', name: 'Blue' }
  ]

  return (
    <div className={styles.filterPanel}>
      <Select elements={orderBy} title='Order By' value={orderByFilter} setValue={setOrderByFilter} />
      <Select elements={categories} title='Categories' value={categoryFilter} setValue={setCategoryFilter} />
      <Select elements={likes} title='Likes' value={likesFilter} setValue={setLikesFilter} />
      <Select elements={colors} title='Colors' value={colorsFilter} setValue={setColorsFilter} />
      <div className={styles.divider} />
      <div className='flex flexBetween'>
        <Button icon={CloseIcon} plain size='small' style={{ color: 'var(--font-color)' }} onClick={resetFilters}> Reset filters </Button>
      </div>
    </div>
  )
}
