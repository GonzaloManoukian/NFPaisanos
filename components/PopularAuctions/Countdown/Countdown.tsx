import { useCountdownTimer } from '@/hooks/useCountdownTimer'
import React from 'react'
import { CountdownElement } from './CountdownElement'
import style from './Countdown.module.css'

export const Countdown = ({ endsAt }: {endsAt: Date}) => {
  // The endsAt prop in the api is expired, a mock is used instead
  const { hours, minutes, seconds } = useCountdownTimer(3600 * 24)

  return (
    <div className={style.countdown}>
      <CountdownElement time={hours} text='Hrs' />
      <CountdownElement time={minutes} text='mins' />
      <CountdownElement time={seconds} text='secs' />
    </div>
  )
}
