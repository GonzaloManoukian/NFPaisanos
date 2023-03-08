import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import Button from '../../Button/Button'
import { Logo } from '../Logo/Logo'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftPanel}>
        <Link href='/'>
          <Logo />
        </Link>
        <div className={styles.divider} />
        <Link href='/'>
          <Button size='small' plain> Discover </Button>
        </Link>
        <Link href='/'>
          <Button size='small' plain> What we do </Button>
        </Link>
      </div>
      <div className={styles.rightPanel}>
        <Button size='medium' outline> Connect Wallet </Button>
      </div>
    </div>
  )
}
