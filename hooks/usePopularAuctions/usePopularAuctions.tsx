// import { getPopularAuctions } from '@/api/services'
import { getPopularAuctions } from '@/api/stubServices'
import NFPaisano from '@/interfaces/NFPaisano'
import { useQuery } from '@tanstack/react-query'

export const usePopularAuctions = () => useQuery<NFPaisano[]>(
  {
    queryKey: ['popularAuctions'],
    queryFn: getPopularAuctions
  }
)
