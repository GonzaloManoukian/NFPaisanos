
import { SelectElement } from '@/components/Select/Select'
import { Context, createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'

export interface FiltersStateContext {
  orderByFilter: SelectElement;
  categoryFilter: SelectElement;
  likesFilter: SelectElement;
  colorsFilter: SelectElement;
}

interface FiltersMutationContext {
  setOrderByFilter: (value: SelectElement) => void;
  setCategoryFilter: (value: SelectElement) => void;
  setLikesFilter: (value: SelectElement) => void;
  setColorsFilter: (value: SelectElement) => void;
}

export const StateFiltersContext = createContext<FiltersStateContext | undefined>(undefined)
export const MutationFiltersContext = createContext<FiltersMutationContext | undefined>(undefined)

interface ProviderProps {
    children: ReactNode
}

export const emptyElement: SelectElement = { id: '', name: '' }

const FiltersProvider: FC<ProviderProps> = ({ children }): JSX.Element => {
  const [orderByFilter, setOrderByFilter] = useState<SelectElement>(emptyElement)
  const [categoryFilter, setCategoryFilter] = useState<SelectElement>(emptyElement)
  const [likesFilter, setLikesFilter] = useState<SelectElement>(emptyElement)
  const [colorsFilter, setColorsFilter] = useState<SelectElement>(emptyElement)

  const memoizedMutations = useMemo<FiltersMutationContext>(() => ({
    setOrderByFilter,
    setCategoryFilter,
    setLikesFilter,
    setColorsFilter
  }), [setOrderByFilter, setCategoryFilter, setLikesFilter, setColorsFilter])

  return (
    <MutationFiltersContext.Provider value={memoizedMutations}>
      <StateFiltersContext.Provider value={{ orderByFilter, categoryFilter, likesFilter, colorsFilter }}>
        {children}
      </StateFiltersContext.Provider>
    </MutationFiltersContext.Provider>
  )
}

export const useStateFiltersContext = (): FiltersStateContext => useGetContext<FiltersStateContext>(StateFiltersContext)
export const useMutationFiltersContext = (): FiltersMutationContext => useGetContext<FiltersMutationContext>(MutationFiltersContext)

const useGetContext = <T, >(contextName: Context<T | undefined>): T => {
  const context = useContext<T | undefined>(contextName)
  if (!context) {
    throw new Error('FiltersProvider is required')
  }
  return context
}

export default FiltersProvider
