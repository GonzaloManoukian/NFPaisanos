import { usePopularAuctions } from '@/hooks'
import { titleFont } from '@/utils/fonts'
import Image from 'next/image'
import React, { useState } from 'react'
import { CircleImage } from '../CircleImage/CircleImage'
import style from './PopularAuctions.module.css'
import StopIcon from '@/public/icons/stop.svg'
import Text from '@/components/Text/Text'
import Button from '../Button/Button'
import ArrowLeft from '@/public/icons/ArrowLeft.svg'
import ArrowRight from '@/public/icons/ArrowRight.svg'
import { BidInfoCard } from './BidInfoCard/BidInfoCard'

export const PopularAuctions = () => {
  const { data, isLoading } = usePopularAuctions()
  const [currentPage, setCurrentPage] = useState(0)

  if (!data || isLoading) return null

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < data.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const NFP = data[currentPage]

  return (
    <div className={style.main}>
      <div className={style.mainGrid}>
        <div className={style.leftPanel}>
          <div className={style.imageContainer}>
            <Image
              src={NFP.media.image2x}
              fill
              alt='the creator network®'
            />
          </div>
        </div>
        <div className={style.rightPanel}>
          <div className={style.auctionInfoCard}>
            <div className={style.auctionPrimary}>
              <Text as='h1' variant='headline-1' className={titleFont.className}> the creator network® </Text>
              <div className='flex flexBetween'>
                <div className='flex gapXs'>
                  <CircleImage src={NFP.authorAvatar} alt={NFP.author} size='md' fill />
                  <div className='flex flexColumn flexStart'>
                    <Text variant='caption-2' color='light'> Creator </Text>
                    <Text variant='caption'> {NFP.author} </Text>
                  </div>
                </div>
                <div className='flex gapXs'>
                  <CircleImage src={StopIcon} size='md' bgColor='var(--secondary-color)' width={20} height={20} />
                  <div className='flex flexColumn flexStart'>
                    <Text variant='caption-2' color='light'> Instant Price </Text>
                    <Text variant='caption'> {NFP.instantPrice} </Text>
                  </div>
                </div>
              </div>
            </div>
            <BidInfoCard nfp={NFP} />
            <div className='flex flexColumn gapXs'>
              <Button primary size='large' fullWidth> Place a bid </Button>
              <Button outline size='large' fullWidth> View Item </Button>
            </div>
            <div className='flex gapXs'>
              <Button icon={ArrowLeft} onClick={handlePrevPage} outline />
              <Button icon={ArrowRight} onClick={handleNextPage} outline />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
