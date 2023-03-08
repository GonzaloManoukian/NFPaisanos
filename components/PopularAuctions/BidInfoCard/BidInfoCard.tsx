import NFPaisano from '@/interfaces/NFPaisano'
import React from 'react'
import style from './BidInfoCard.module.css'
import Text from '@/components/Text/Text'
import { titleFont } from '@/utils/fonts'
import { Countdown } from '../Countdown/Countdown'
import { useEthUsd } from '@/hooks'

export const BidInfoCard = ({ nfp }: { nfp: NFPaisano}) => {
  const usdBidPrice = useEthUsd(nfp.highestBid)

  return (
    <div className={style.card}>
      <div className={style.cardElement}>
        <Text as='span' variant='body-2' fontWeight='bold'> Current Bid </Text>
        <Text as='h2' variant='headline-2' className={titleFont.className}> {nfp.highestBid} </Text>
        <Text as='span' variant='body-1' fontWeight='bold' color='light'> ${usdBidPrice} </Text>
      </div>
      <div className={`${style.cardElement} gapXs`}>
        <Text as='span' variant='body-2' fontWeight='bold'> Auction ending in </Text>
        <Countdown endsAt={new Date(nfp.endsAt)} />
      </div>
    </div>
  )
}
