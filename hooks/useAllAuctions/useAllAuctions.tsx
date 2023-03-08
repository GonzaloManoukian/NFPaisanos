// import { getAllAuctions } from '@/api/services'
import { getAllAuctions } from '@/api/stubServices'
import NFPaisano from '@/interfaces/NFPaisano'
import { useQuery } from '@tanstack/react-query'

export const useAllAuctions = () => useQuery<NFPaisano[]>(
  {
    queryKey: ['allAuctions'],
    queryFn: getAllAuctions
  }
)
