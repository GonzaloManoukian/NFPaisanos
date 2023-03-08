import { useAllAuctions } from '@/hooks'
import React from 'react'
import { AuctionCard } from '../AuctionCard/AuctionCard'
import styles from './AuctionPanel.module.css'

export const AuctionPanel = () => {
  const { data, isLoading } = useAllAuctions()

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && (
        <div className={styles.auctionPanel}>
          {data.map((nfp) => (
            <div key={nfp.id} className={styles.auctionCard}>
              <AuctionCard nfp={nfp} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
