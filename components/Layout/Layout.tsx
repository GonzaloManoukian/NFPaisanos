import { textFont } from '@/utils/fonts'
import { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'

export default function Layout ({ children }: { children: ReactNode }) {
  return (
    <div className={textFont.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
