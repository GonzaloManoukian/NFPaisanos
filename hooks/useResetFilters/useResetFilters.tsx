import { emptyElement, useMutationFiltersContext } from '@/contexts/FiltersContext/FilterContexts'

export const useResetFilters = () => {
  const { setOrderByFilter, setCategoryFilter, setLikesFilter, setColorsFilter } = useMutationFiltersContext()

  const resetFilters = () => {
    setOrderByFilter(emptyElement)
    setCategoryFilter(emptyElement)
    setLikesFilter(emptyElement)
    setColorsFilter(emptyElement)
  }

  return resetFilters
}
