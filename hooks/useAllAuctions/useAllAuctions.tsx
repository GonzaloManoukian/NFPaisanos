// import { getAllAuctions } from '@/api/services'
import { getAllAuctions } from '@/api/stubServices'
import { useQuery } from '@tanstack/react-query'

export const useAllAuctions = () => useQuery(
  {
    queryKey: ['allAuctions'],
    queryFn: getAllAuctions
  }
)
