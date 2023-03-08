// import { getEthUsdPrice } from '@/api/services'
import { getEthUsdPrice } from '@/api/stubServices'
import { useQuery } from '@tanstack/react-query'

export const useEthUsd = (ethPrice: string) => {
  const { data, isLoading } = useQuery(
    {
      queryKey: ['ethUsdPrice'],
      queryFn: getEthUsdPrice
    })

  const ethToUsd = (eth: string) => {
    if (!data || isLoading) return null
    const ethPriceNumber = parseFloat(eth.split(' ')[0])
    const ethPriceUsd = parseFloat(data.usd.replace(',', ''))
    const usdValue = ethPriceNumber * ethPriceUsd
    return usdValue.toFixed(2)
  }

  return ethToUsd(ethPrice)
}
