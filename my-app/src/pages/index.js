import Head from 'next/head'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import HomeTop from '@/components/homeTop'
import HomeServ from '@/components/HomeServ'
import HomePrem from '@/components/HomePrem'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <HomeTop />
        <HomeServ />
        <HomePrem />
        <Footer />
      </main>
    </>
  )
}
