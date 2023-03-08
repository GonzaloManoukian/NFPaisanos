import { Poppins, DM_Sans as DMSans } from '@next/font/google'

export const textFont = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin']
})

export const titleFont = DMSans({
  weight: ['700'],
  subsets: ['latin']
})
