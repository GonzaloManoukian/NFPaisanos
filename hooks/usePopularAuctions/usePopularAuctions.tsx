// import { getPopularAuctions } from '@/api/services'
import { getPopularAuctions } from '@/api/stubServices'
import { useQuery } from '@tanstack/react-query'

export const usePopularAuctions = () => useQuery(
  {
    queryKey: ['popularAuctions'],
    queryFn: getPopularAuctions
  }
)
