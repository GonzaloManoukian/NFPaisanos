import { useFilterAuctions } from '@/hooks/useFilters/useFIlters'
import React from 'react'
import { AuctionCard } from '../AuctionCard/AuctionCard'
import styles from './AuctionPanel.module.css'

export const AuctionPanel = () => {
  const { filteredAuctions, isLoading } = useFilterAuctions()
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && filteredAuctions && (
        <div className={styles.auctionPanel}>
          {filteredAuctions.map((nfp) => (
            <div key={nfp.id} className={styles.auctionCard}>
              <AuctionCard nfp={nfp} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
