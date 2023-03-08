import React from 'react'
import InputSearch from '../InputSearch/InputSearch'
import styles from './AllAuctions.module.css'
import { AuctionPanel } from './AuctionPanel/AuctionPanel'
import { FilterPanel } from './FilterPanel/FilterPanel'

export const AllAuctions = () => {
  return (
    <div className={styles.allAuctions}>
      <InputSearch />
      <div className={styles.panels}>
        <div className={styles.filterPanel}>
          <FilterPanel />
        </div>
        <div className={styles.auctionPanel}>
          <AuctionPanel />
        </div>
      </div>
    </div>
  )
}
