import React from 'react'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.css'
import Text from '../../Text/Text'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
      <Text as='h3' variant='body-1'> The New Creative Economy. </Text>
      <div className={styles.divider} />
      <Text as='p' variant='caption-2' color='light'> Created with ❤ by Gonzalo Manoukian  </Text>
    </div>
  )
}
