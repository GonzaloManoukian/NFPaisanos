import { getPopularAuctions } from '@/api/services'
import NFPaisano from '@/interfaces/NFPaisano'
// import { getPopularAuctions } from '@/api/stubServices'
import { useQuery } from '@tanstack/react-query'

export const usePopularAuctions = () => useQuery<NFPaisano[]>(
  {
    queryKey: ['popularAuctions'],
    queryFn: getPopularAuctions
  }
)
