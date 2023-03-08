import React from 'react'
import Text from '@/components/Text/Text'
import { titleFont } from '@/utils/fonts'
import style from './Countdown.module.css'

type CountdownElementProps= {
  time: string,
  text: string
}

export const CountdownElement = ({ time, text }: CountdownElementProps) => {
  return (
    <div className={style.countdownElement}>
      <div className={style.countdownTimer}>
        <Text as='span' variant='headline-4' className={titleFont.className}> {time} </Text>
      </div>
      <Text as='span' variant='body-2' fontWeight='bold' color='light'> {text} </Text>
    </div>
  )
}
