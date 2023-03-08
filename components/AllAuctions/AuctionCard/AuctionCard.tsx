import NFPaisano from '@/interfaces/NFPaisano'
import React from 'react'
import styles from './AuctionCard.module.css'
import Image from 'next/image'
import Text from '@/components/Text/Text'
import { CircleImage } from '@/components/CircleImage/CircleImage'
import { Icon } from '@/components/Icon/Icon'
import FilterIcon from '@/public/icons/filter.svg'

export const AuctionCard = ({ nfp }: { nfp: NFPaisano }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={nfp.media.image} alt={nfp.author} fill />
      </div>
      <div className={styles.row}>
        <Text as='h3' variant='body-2' fontWeight='bold'> Amazing digital art </Text>
        <div className={styles.instantPrice}>
          <Text as='span' variant='hairline' color='secondary'> {nfp.instantPrice} </Text>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.bidUsers}>
          {nfp.bidUsers.map((user, i) => (
            <div key={user.id} className={styles.bidUser} style={{ zIndex: i + 1, left: i * 16 }} title={user.name}>
              <CircleImage src={user.avatar} size='sm' fill />
            </div>
          ))}
        </div>
        <div>
          <Text as='span' variant='caption'> {nfp.stock} in stock </Text>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.bid}>
          <Icon src={FilterIcon} height={20} width={20} />
          <Text as='span' variant='caption-2' color='light'> Highest bid </Text>
          <Text as='span' variant='caption-2' fontWeight='bold'> {nfp.highestBid} </Text>
        </div>
        <Text as='span' variant='caption-2' color='light'> New bid 🔥 </Text>
      </div>
      <div />

    </div>
  )
}
