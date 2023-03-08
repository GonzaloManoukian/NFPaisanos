import { getAllAuctions } from '@/api/services'
import NFPaisano from '@/interfaces/NFPaisano'
// import { getAllAuctions } from '@/api/stubServices'
import { useQuery } from '@tanstack/react-query'

export const useAllAuctions = () => useQuery<NFPaisano[]>(
  {
    queryKey: ['allAuctions'],
    queryFn: getAllAuctions
  }
)
