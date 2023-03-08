import { useState } from 'react'
import styles from './FilterPanel.module.css'
import type { SelectElement } from '@/components/Select/Select'
import dynamic from 'next/dynamic'

type NewType = import('@/components/Select/Select').SelectProps
const Select = dynamic<NewType>(() =>
  import('@/components/Select/Select').then((mod) => mod.Select), {
  ssr: false
}
)

export const FilterPanel = () => {
  const [orderByValue, setOrderByValue] = useState<SelectElement>()

  const orderBy = [
    { id: 'newest', name: 'Newest' },
    { id: 'oldest', name: 'Oldest' }
  ]
  const categories = [
    { id: 'allItems', name: 'All Items' },
    { id: 'art', name: 'Art' },
    { id: 'photography', name: 'Photography' }
  ]
  const likes = [
    { id: 'mostLiked', name: 'Most Liked' },
    { id: 'leastLiked', name: 'Least Liked' }
  ]
  const colors = [
    { id: 'allColors', name: 'All Colors' },
    { id: 'black', name: 'Black' },
    { id: 'green', name: 'Green' },
    { id: 'pink', name: 'Pink' },
    { id: 'purple', name: 'Purple' }
  ]

  return (
    <div className={styles.filterPanel}>
      <Select elements={orderBy} title='Order By' value={orderByValue} setValue={setOrderByValue} />
      <Select elements={categories} title='Categories' />
      <Select elements={likes} title='Likes' />
      <Select elements={colors} title='Colors' />
    </div>
  )
}
