import { useStateFiltersContext } from '@/contexts/FiltersContext/FilterContexts'
import NFPaisano from '@/interfaces/NFPaisano'
import { useAllAuctions } from '../useAllAuctions'

type FilterAuctions = () =>{
  filteredAuctions: NFPaisano[] | undefined,
  isLoading: boolean
}

export const useFilterAuctions: FilterAuctions = () => {
  const { data: auctions, isLoading } = useAllAuctions()
  const { orderByFilter, categoryFilter, likesFilter, colorsFilter } = useStateFiltersContext()

  let filteredAuctions = auctions

  if (filteredAuctions) {
    filteredAuctions = filteredAuctions.filter((auction) => {
      if (categoryFilter.id === '' || categoryFilter.id === 'allItems') return true
      return auction.type === categoryFilter.id
    })
      .filter((auction) => {
        if (colorsFilter.id === '' || colorsFilter.id === 'allColors') return true
        return auction.attributes.color === colorsFilter.id
      })

    if (orderByFilter && orderByFilter.id !== '') {
      orderByFilter.id === 'newest' && filteredAuctions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      orderByFilter.id === 'oldest' && filteredAuctions.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }
    if (likesFilter && likesFilter.id !== '') {
      likesFilter.id === 'mostLiked' && filteredAuctions.sort((a, b) => b.likes - a.likes)
      likesFilter.id === 'leastLiked' && filteredAuctions.sort((a, b) => a.likes - b.likes)
    }
  }

  return { filteredAuctions, isLoading }
}
