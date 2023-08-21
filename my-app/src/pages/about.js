import Head from 'next/head'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import AboutContent from '@/components/AboutContent'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AboutContent />
        <Footer />
      </main>
    </>
  )
}
