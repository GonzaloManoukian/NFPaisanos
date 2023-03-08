import React from 'react'
import { Icon } from '../../Icon/Icon'
import Text from '../../Text/Text'
import styles from './Logo.module.css'
import LogoIcon from '@/public/icons/logo.svg'
import { titleFont } from '@/utils/fonts'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Icon src={LogoIcon} width={32} height={32} />
      <Text as='h2' variant='body-1' fontWeight='bold' className={titleFont.className}> NFPaisanos</Text>
    </div>
  )
}
