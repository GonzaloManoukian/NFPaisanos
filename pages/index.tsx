import { AllAuctions } from '@/components/AllAuctions/AllAuctions'
import { PopularAuctions } from '@/components/PopularAuctions/PopularAuctions'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <title> NFPaisanos </title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <PopularAuctions />
        <AllAuctions />
      </div>
    </>
  )
}
